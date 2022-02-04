import React from "react";
import { Row, Col, Divider } from "antd";
import Addcard from "../Addcard/Addcard";
import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import AntType from "../AntTypo/AntType";
import AntButton from "../AntButton/AntButton";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskSection.css";
import ImageSlider from "../SlickCarousel/ImageSlider";

const product = [
  {
    productname: "Call Ana Care  installation",
    time: "9:00 Am",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#ECBB3D",
  },
  {
    productname: "Product Delievery  time",
    time: "Today",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#80C7D0",
  },
  {
    productname: "Follow up with Cambria",
    time: "Today",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#F98341",
  },
  {
    productname: "Brochure  Review",
    time: "Tomorrow",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#B1A8DE",
  },
  {
    productname: "Brian Noble Pick Up",
    time: "2:00 Pm",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#80C7D0",
  },
];

const TaskSection = () => {
  return (
    <div className="TaskSec">
      <Row>
        <Col className="taskUpperSection" xs={24}>
          <div>
            <AntType text="Tasks" fontSize={3} color="black" align="left" />
          </div>
          <div>
            <AntButton background="#00818F" color="#ffff" text="Add a Task" />
          </div>
        </Col>
      </Row>
      <div>
        <ImageSlider />
      </div>
    </div>
  );
};

export default TaskSection;
