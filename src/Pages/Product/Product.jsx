import React, { useState, useEffect, useRef } from "react";
import { Layout, Button, Form } from "antd";
import AntType from "../../Component/AntTypo/AntType";
import "./Product.css";
import { Row, Col } from "antd";
import { storage, firestore } from "./../../Firebase/Firebase";
import ProductSampleForm from "../../Component/ProductSampleForm/ProductSampleForm";
import ProductManufacturerSection from "../../Component/ProductManufacturerSection/ProductManufacturerSection";
import { notification } from "antd";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import emailjs from "emailjs-com";

const { Content } = Layout;

const Product = ({ auth }) => {
  const form = useRef();
  const [productForm] = Form.useForm();
  const [doctorList, setDoctorList] = useState([]);
  const [date, setDate] = useState("");

  const setAppointmentDate = (dateValue) => {
    setDate(dateValue);
  };

  useEffect(() => {
    fetchDoctorList();
  }, []);

  function sendEmail(e) {
    console.log("hello ", e);
    const obj = {
      name: e.patientName,
      doctorName: e.doctorName,
      appointmentDate: date,
      userEmail: auth.email,
    };
    emailjs
      .send(
        "service_d4zr2db",
        "template_unq023r",
        obj,
        "user_G7uS6aPr0bDSwg8FQnbCe"
      )
      .then(
        (result) => {
          console.log("***", result.text);
        },
        (error) => {
          console.log("----", error.text);
        }
      );
    console.log("hello ", e);
  }
  const fetchDoctorList = async () => {
    try {
      var query = await firestore.collection("doctors").get();

      // console.log("query is", query);

      query.docs.forEach((doc) => {
        setDoctorList((prevState) => [
          ...prevState,
          { ...doc.data(), id: doc.id },
        ]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onFinish = async (values) => {
    console.log("Values ", values);
    // console.log("Values . target ", values.target);
    const {
      patientName,
      patientImage: {
        file: { originFileObj },
      },
      patientDOB,
      doctorName,
      patientHistory,
      patientGender,
    } = values;
    // console.log("file is", originFileObj);

    var imageRef = storage.child(`products/${uuid()}`);
    var fileListener = imageRef.put(originFileObj, {
      contentType: `${originFileObj.type}`,
      firebaseStorageDownloadTokens: uuid(),
    });
    // console.log("product image is", productImage);

    //file listener takes 4 argumnets
    //fileListener.on(event type, cb file state, cb error, cd will trigger after file upload)
    fileListener.on(
      "state_changed",
      async (snapshot) => {
        console.log("********", snapshot);
        var progress =
          (await (snapshot.bytesTransferred / snapshot.totalBytes)) * 100;
        console.log("Upload is " + progress + " % done");
      },
      (error) => {
        console.log(error);
      },
      async () => {
        //will trigger after completion
        var downloadURL = await imageRef.getDownloadURL();

        //modify productObj with coverPhoto URL and created At
        const patientObj = {
          productDetails: {
            patientName: patientName || "",
            patientImage: downloadURL,
            doctorName: doctorName || "",
            patientHistory: patientHistory || "",
            patientDOB: patientDOB?._d || "",
            appointmentDate: date,
            patientGender: patientGender === 1 ? "Male" : "Female" || "",
          },
        };

        //create doc at firestore
        await firestore.collection("appointments").add(patientObj);

        console.log(patientObj);
        openNotification(
          "bottomLeft",
          "Form submitted successfully.",
          "Form Submitted"
        );
        sendEmail(values);

        productForm.resetFields();
      }
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    openNotification(
      "bottomLeft",
      "Please fill out the field correctly.",
      "Field Error"
    );
  };
  const openNotification = (placement, text, status) => {
    if (status === "Field Error") {
      notification.error({
        message: `Notification ${status}`,
        description: text,
        placement,
        duration: 2,
      });
    } else {
      notification.success({
        message: `Notification ${status}`,
        description: text,
        placement,
        duration: 2,
      });
    }
  };

  return (
    <Content className="customerContent">
      <div>
        <AntType
          text="Appointment Form"
          fontSize={1}
          fontWeight={true}
          color="#1D1C1C"
        />
      </div>

      <Form
        form={productForm}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row>
          <Col className="productLeftSection" xs={24} md={24} lg={10}>
            <ProductManufacturerSection
              setAppointmentDate={setAppointmentDate}
            />
          </Col>
          <Col className="productRightSection" xs={24} md={24} lg={14}>
            <ProductSampleForm doctorList={doctorList} />
            <Button size="large" htmlType="submit">
              Add Appointmnet
            </Button>
          </Col>
        </Row>
      </Form>
    </Content>
  );
};

var mapState = (state) => ({
  auth: state.auth,
});

export default connect(mapState)(Product);
