import React from "react";
import "./AppointmentCard.css";
import { Card, Col, Row } from "antd";
import Paragraph from "../../Component/Paragraph/Paragraph";
import AntType from "../AntTypo/AntType";

const AppointmentCard = ({ item }) => {
  return (
    <Card className="appointcard">
      <div className="appointIcon">{item.icon}</div>
      <div style={{ padding: "1rem", textAlign: "left" }}>
        <AntType text={item.time} fontSize={5} color="#C95B1D" align="left" />

        <Paragraph text={item.title} fontSize="1.2rem" color="gray" />
        <AntType
          text={item.name}
          fontSize={5}
          color="#00818F"
          align="left"
          margin="0px"
        />

        <Paragraph text={item.description} fontSize="0.9rem" color="gray" />
      </div>
    </Card>
  );
};

export default AppointmentCard;
