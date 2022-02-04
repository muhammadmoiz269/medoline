import { Content } from "antd/lib/layout/layout";
import React, { useState, useEffect } from "react";
import AntType from "../../Component/AntTypo/AntType";
import BuildQuote from "../../Component/BuildQuote/BuildQuote";
import QuoteManufacturer from "../../Component/QuoteManufacturer/QuoteManufacturer";
import "./Quotes.css";
import { Steps, Row, Col, Form } from "antd";
import ManufacturerDetails from "../../Component/ManufacturerDetails/ManufacturerDetails";
import ManufacturerMeasurement from "../../Component/ManufacturerMeasurement/ManufacturerMeasurement";
import Antimage from "../../Component/Antimage/Antimage";
import { notification } from "antd";
import { firestore } from "../../Firebase/Firebase";
const { Step } = Steps;

const Quotes = () => {
  const [current, setCurrent] = React.useState(0);
  const [logo, setLogo] = React.useState();

  const [data, setdata] = React.useState({});
  const [doctorType, setDoctorType] = React.useState("");

  const [quotesForm] = Form.useForm();

  const onFinish = async (valuess) => {
    const _manufactureDetails = Object.entries(data.manufactureDetails).reduce(
      (acc, curr) => {
        const [key, value] = curr;
        if (value) acc[key] = value;
        return acc;
      },
      {}
    );
    const _manufactureMeasurement = Object.entries(valuess).reduce(
      (acc, curr) => {
        const [key, value] = curr;
        if (value) acc[key] = value;
        return acc;
      },
      {}
    );
    console.log({ _manufactureDetails });

    const quoteObj = {
      manufactureDetails: _manufactureDetails,
      manufactureMeasurement: _manufactureMeasurement,
    };

    await firestore.collection("quotes").add(quoteObj);

    openNotification(
      "bottomLeft",
      "Form submitted successfully.",
      "Form Submitted"
    );
    quotesForm.resetFields();
  };

  const getFieldValues = () => {
    setdata({ manufactureDetails: quotesForm.getFieldsValue() });
    // console.log("*******", data);
  };
  const resetField = () => {
    setdata(null);
    quotesForm.resetFields();
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

  const setImageLogo = (image) => {
    setLogo(image);
  };

  const next = (value) => {
    setDoctorType(value);
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "First",
      content: <BuildQuote next={next} />,
    },
    {
      title: "Second",
      content: (
        <QuoteManufacturer
          next={next}
          prev={prev}
          setImageLogo={setImageLogo}
          getDoctorType={doctorType}
        />
      ),
    },
  ];

  return (
    <div>
      <Content className="quoteContent">
        <div className="quoteHeadSection">
          <Row>
            <Col xs={12} xl={12} className="quoteHeadGrid">
              <AntType
                text="Select a Doctor"
                fontSize={1}
                fontWeight={true}
                color="#1D1C1C"
              />

              <AntType
                text={current > 0 && "Appointment No #: 000024"}
                fontSize={5}
                fontWeight={true}
                color="gray"
              />
            </Col>
            <Col className="logoSection" xs={12} xl={12}>
              {logo && current === 2 ? (
                <div className="imageAnimate">
                  <Antimage img={logo} height="70px" width="90px" />
                </div>
              ) : (
                <></>
              )}
            </Col>
          </Row>
        </div>
        <>
          <Form
            form={quotesForm}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="steps-content">{steps[current].content}</div>
          </Form>
        </>
      </Content>
    </div>
  );
};

export default Quotes;
