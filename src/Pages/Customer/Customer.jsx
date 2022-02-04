import React, { useState, useEffect } from "react";
import { Form, Layout, Button } from "antd";
import AntType from "../../Component/AntTypo/AntType";
import "./Customer.css";
import PrimaryCustomer from "../../Component/PrimaryCustomer/PrimaryCustomer";
import AdditionalCustomer from "../../Component/AdditionalCustomer/AdditionalCustomer";
import AddCompany from "../../Component/AddCompany/AddCompany";
import BillingAddress from "../../Component/BillingAddress/BillingAddress";
import { firestore } from "../../Firebase/Firebase";
import { notification } from "antd";
import { Modal, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Tooltip } from "antd";

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: "Do you Want to delete these items?",
    icon: <ExclamationCircleOutlined />,
    content: "Some descriptions",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
}

const { Content } = Layout;

const Customer = ({ auth }) => {
  const [customerForm] = Form.useForm();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (auth?.email === "admin@gmail.com") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  const onFinish = async (values) => {
    // console.log("Success:", values);
    const {
      specialization,
      firstName,
      lastName,
      emailAddress,
      homeNumber,
      mobileNumber,
      qualification,
      experience,
      availibility,
      charges,
      homeAddress,
      appartment,
      zip,
      province,
      city,
      notes,
    } = values;
    const docObj = {
      doctorDetails: {
        specialization: specialization || "",
        firstName: firstName || "",
        lastName: lastName || "",
        emailAddress: emailAddress || "",
        homeNumber: homeNumber || "",
        mobileNumber: mobileNumber || "",
      },

      personalInfo: {
        qualification: qualification || "",
        experience: experience || "",
        availibility: availibility || "",
        charges: charges || "",
      },
      doctorAddress: {
        homeAddress: homeAddress || "",
        appartment: appartment || "",
        zip: zip || "",
        province: province || "",
        city: city || "",
      },
      doctorNotes: { notes: notes || "" },
    };
    console.log("success ", docObj);
    await firestore.collection("doctors").add(docObj);
    openNotification(
      "bottomLeft",
      "Form submitted successfully.",
      "Form Submitted"
    );
    customerForm.resetFields();
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
    <div>
      <Content className="customerContent">
        <div className="customerHeadSection">
          <AntType
            text="Add a Doctor"
            fontSize={1}
            fontWeight={true}
            color="#1D1C1C"
          />
        </div>
        <Form
          form={customerForm}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <PrimaryCustomer />

          <AddCompany />
          <BillingAddress />

          <Tooltip
            visible={isAdmin ? false : true}
            placement="top"
            title="Only Admin can Add doctors"
          >
            <Button
              htmlType="submit"
              size="large"
              disabled={isAdmin ? false : true}
            >
              Submit
            </Button>
          </Tooltip>
        </Form>
      </Content>
    </div>
  );
};

var mapState = (state) => ({
  auth: state.auth,
});

export default connect(mapState)(Customer);
