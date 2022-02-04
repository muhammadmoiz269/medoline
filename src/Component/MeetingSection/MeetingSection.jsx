import React, { useEffect, useState } from "react";
import { Row, Col, Divider } from "antd";
import Addcard from "../Addcard/Addcard";
import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import AntType from "../AntTypo/AntType";
import AntButton from "../AntButton/AntButton";
import TaskCard from "../TaskCard/TaskCard";
import AntCalendar from "../AntCalendar/AntCalendar";
import Todo from "../../Component/Todo/Todo";
import moment from "moment";
import { storage, firestore } from "./../../Firebase/Firebase";

import "./MeetingSection.css";

const filmMaking = [
  {
    name: "Set up installment for Anna Care",
    color: "#EC8348",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",

    fontsize: "1.2",
    time: "9:00 am",
  },
  {
    name: "Kamadan Delievery",

    color: "#7EBAB7",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",

    fontsize: "1.2",
    time: "10:00 am",
  },
  {
    name: "Set up installment for Anna Care",
    color: "#F8CA69",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",

    fontsize: "1.2",
    time: "10:30 am",
  },
  {
    name: "Kamadan Delievery",

    color: "#318E87",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",

    fontsize: "1.2",
    time: "11:00 am",
  },
  {
    name: "Kamadan Delievery",

    color: "#318E87",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",

    fontsize: "1.2",
    time: "11:00 am",
  },
];

const MeetingSection = () => {
  const [CurrentDate, setCurrentDate] = useState(moment());
  const [date, setDate] = useState(moment().format("DD"));

  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    fetchAppointment();
  }, []);

  const fetchAppointment = async () => {
    try {
      var query = await firestore.collection("appointments").get();

      // console.log("query is", query);

      query.docs.forEach((doc) => {
        setAppointmentList((prevState) => [
          ...prevState,
          { ...doc.data(), id: doc.id },
        ]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log("appoint list", appointmentList);

  const getDate = (value) => {
    setDate(date);
    setCurrentDate(value);
  };

  return (
    <div className="MeetingSec">
      <Row>
        <Col className="meetingSection" xs={24}>
          <div className="meetingSectionHeading">
            <AntType text="Calendar" fontSize={3} color="black" align="left" />
          </div>
          <div className="meetingSectionPlacement">
            <LeftOutlined
              onClick={() => {
                setDate(CurrentDate.subtract(1, "days").format("DD"));
              }}
              className="LeftOutlineIcon"
            />

            <AntType
              text={`${CurrentDate.format("MMM")}-${CurrentDate.format("DD")}`}
              fontSize={5}
              color="gray"
              align="center"
            />

            <RightOutlined
              onClick={() => {
                setDate(CurrentDate.add(1, "days").format("DD"));
              }}
              className="RightOutlineIcon"
            />
          </div>
          <div>
            <AntButton
              background="#00818F"
              color="#ffff"
              text="Create an event"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Row className="meetingSectionPlacement">
            <AntCalendar getDate={getDate} />
          </Row>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          className="meetingSectionScrollBar"
          style={{}}
        >
          {appointmentList.map((items) => {
            return <Todo item={items} />;
          })}
        </Col>
      </Row>
    </div>
  );
};

export default MeetingSection;
