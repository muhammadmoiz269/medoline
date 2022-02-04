import React from "react";
import { Row, Col, Divider } from "antd";
import Addcard from "../Addcard/Addcard";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import { Space } from "antd";
import "./AddContentSection.css";

const style = { background: "#0092ff", padding: "8px 0" };
const product = [
  { title: "Find a Doctor", icon: <UserOutlined />, slug: "/doctorlist" },
  { title: "Add an Appointment", icon: <UserOutlined />, slug: "/appointment" },
];
const product1 = [
  {
    title: "Your Next Appointment",
    time: "9:00 am",
    name: "Brain smith in store",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  repudiandae consequuntur voluptatum laborum",
    icon: <CalendarOutlined />,
  },
];
const AddContentSection = () => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={10} xl={9}>
          <Row className="ContentLeftSection">
            {product.map((items) => {
              return (
                <Col className="flex" xl={12} lg={12} md={12} sm={24} xs={24}>
                  <Addcard item={items} />
                </Col>
              );
            })}
          </Row>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={14}
          xl={15}
          className="ContentRightSection"
        >
          {product1.map((items) => {
            return <AppointmentCard item={items} />;
          })}
        </Col>
      </Row>
    </div>
  );
};

export default AddContentSection;
