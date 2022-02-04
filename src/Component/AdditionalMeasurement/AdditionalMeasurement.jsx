import { Col, Row } from "antd";
import React, { useState } from "react";
import AntType from "../AntTypo/AntType";
import AntInput from "../AntInput/AntInput";
import { Collapse } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";

const AdditionalMeasurement = (text, plusIcon) => {
  const [addMeasurement, setaddMeasurement] = useState(false);

  const setMeasurement = () => {
    setaddMeasurement(!addMeasurement);
  };
  const hide = () => {
    setaddMeasurement(!addMeasurement);
  };
  return (
    <div>
      <div>
        <div onClick={setMeasurement}>
          <AntType
            text="Add another measurement"
            fontSize={5}
            fontWeight={true}
            color="#00818F"
            icon={<PlusOutlined />}
            margin="0rem 0.5rem"
          />
        </div>
        <div style={{ padding: "1rem 1rem" }}>
          {addMeasurement ? (
            <Row gutter={[24, 24]}>
              <Col xl={8} lg={8} md={24}>
                <AntInput
                  placeholder="1200 sq ft"
                  value="addSqFt"
                  regex={/^[0-9]+$/}
                />
              </Col>
              <Col xl={14} lg={14} md={24}>
                <AntInput
                  placeholder="Basement"
                  value="addDescription"
                  regex={/^[a-zA-Z_ ]*$/}
                />
              </Col>

              <div
                style={{
                  fontSize: "1rem",
                  color: "#C95B1D",
                }}
              >
                <DeleteOutlined onClick={hide} />
              </div>
            </Row>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdditionalMeasurement;
