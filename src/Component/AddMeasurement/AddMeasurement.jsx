import { Col, Row } from "antd";
import React, { useState } from "react";
import AntType from "../AntTypo/AntType";
import AntInput from "../AntInput/AntInput";
import { Collapse } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const AddMeasurement = ({
  text,
  upIcon,
  downIcon,
  col1,
  col2,
  isAddAnother,
}) => {
  const [iconVisible, seticonVisible] = useState(["1"]);

  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
  };
  function callback(key) {
    seticonVisible(key);
  }

  return (
    <Collapse defaultActiveKey={["0"]} onChange={callback}>
      <Panel
        showArrow={false}
        header={
          <AntType
            text={text}
            fontSize={5}
            fontWeight={true}
            color="#00818F"
            icon={
              iconVisible.length === 1 ? (
                <div style={{ color: "#C95B1D" }}>{upIcon}</div>
              ) : (
                <div style={{ color: "#C95B1D" }}>{downIcon}</div>
              )
            }
            margin="0rem 0.5em"
          />
        }
        key="1"
      >
        {
          <div>
            <Row gutter={[24, 24]}>
              <Col xl={col1} lg={col1} md={24}>
                {isAddAnother ? (
                  <></>
                ) : (
                  <AntType
                    text="Length"
                    fontSize={5}
                    fontWeight={true}
                    color="#004D8B"
                  />
                )}
                <AntInput
                  placeholder="1200 sq ft"
                  value={isAddAnother ? "addSqFt" : "length"}
                  regex={/^[0-9]+$/}
                />
              </Col>
              <Col xl={col2} lg={col2} md={24}>
                {isAddAnother ? (
                  <></>
                ) : (
                  <AntType
                    text="Width"
                    fontSize={5}
                    fontWeight={true}
                    color="#004D8B"
                  />
                )}
                <AntInput
                  placeholder="Basement"
                  value={isAddAnother ? "addDescription" : "width"}
                  regex={isAddAnother ? /^[a-zA-Z_ ]*$/ : /^[0-9]+$/}
                />
              </Col>
              {isAddAnother ? (
                <div
                  style={{
                    fontSize: "1rem",
                    color: "#C95B1D",
                  }}
                >
                  <DeleteOutlined />
                </div>
              ) : (
                <></>
              )}
            </Row>
          </div>
        }
      </Panel>
    </Collapse>
  );
};

export default AddMeasurement;
