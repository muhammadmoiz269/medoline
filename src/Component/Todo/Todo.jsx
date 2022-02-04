import React from "react";
import { Typography } from "antd";

import { CaretRightOutlined } from "@ant-design/icons";

import AntType from "../AntTypo/AntType";
import Paragraph from "../Paragraph/Paragraph";
import "./Todo.css";
import Antavatar from "../Antavatar/Antavatar";
const { Text } = Typography;

const Todo = ({ item }) => {
  return (
    <div
      className="package"
      style={{
        borderLeft: `30px solid #00818F`,
      }}
    >
      <div style={{ paddingLeft: "2rem" }}>
        <AntType
          text={`Appointment with Dr ${item.productDetails?.doctorName}`}
          fontSize={5}
          color="black"
          align="left"
        />

        <Paragraph
          text={item.productDetails?.appointmentDate}
          fontSize="1rem"
          color="gray"
        />
      </div>
      <div
        style={{
          float: "right",
          fontSize: "1.2rem",
          color: "gray",
        }}
      >
        <Antavatar
          img={
            "https://www.iconpacks.net/icons/2/free-stethoscope-icon-3539-thumb.png"
          }
        />
      </div>
    </div>
  );
};

export default Todo;
