import React from "react";
import "./Addcard.css";
import { Card, Col, Row } from "antd";
import AntType from "../AntTypo/AntType";
import { Link } from "react-router-dom";

const Addcard = ({ item }) => {
  return (
    <Card className="antcard">
      <Link to={item.slug}>
        <div
          style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#ffff" }}
        >
          {item.icon}
        </div>

        <AntType text={item.title} fontSize={5} color="white" align="left" />
      </Link>
    </Card>
  );
};

export default Addcard;
