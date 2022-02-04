import React from "react";
import "./TaskCard.css";
import { Card, Col, Row } from "antd";
import Paragraph from "../../Component/Paragraph/Paragraph";
import AntType from "../AntTypo/AntType";
import { Checkbox } from "antd";
import Antavatar from "../Antavatar/Antavatar";
const TaskCard = ({ item }) => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <Row className="taskCardSection">
      <Col>
        <Card bodyStyle={{ background: item.background }} className="taskcard">
          <div>
            <AntType
              text={item.productname}
              fontSize={5}
              color="black"
              align="left"
            />
            <Paragraph text={item.time} fontSize="0.9rem" color="gray" />
            <div>
              <Paragraph
                text="Assigned Stuff"
                fontSize="0.8rem"
                color="black"
                bold="bold"
              />
              <Antavatar img={item.avatar} />
            </div>
          </div>

          <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            <Checkbox onChange={onChange}></Checkbox>
          </div>
          <div className="dateBox flex">
            <Paragraph
              text="Mar 11"
              fontSize="0.8rem"
              color="black"
              bold="bold"
              align="center"
            />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default TaskCard;
