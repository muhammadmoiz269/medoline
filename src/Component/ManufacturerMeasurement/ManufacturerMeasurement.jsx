import React from "react";
import { Row, Col, Button } from "antd";

import AntButton from "../AntButton/AntButton";
import AntType from "../AntTypo/AntType";
import CustomerDetailBox from "../CustomerDetailBox/CustomerDetailBox";

import AntInput from "../AntInput/AntInput";
import "./ManufacturerMeasurement.css";

import {
  DownOutlined,
  UpOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import AddMeasurement from "../AddMeasurement/AddMeasurement";
import AdditionalMeasurement from "../AdditionalMeasurement/AdditionalMeasurement";

const ManufacturerMeasurement = ({ prev }) => {
  const setPrevPage = () => {
    prev();
  };
  return (
    <div>
      <div className="verticalGap">
        <AntType
          text="Add measurements"
          fontSize={4}
          fontWeight={true}
          color="gray"
        />
      </div>
      <Row className="verticalGap" gutter={[24, 24]}>
        <Col xl={14} lg={14} md={24} className="gutter-row">
          <Row gutter={[24, 24]}>
            <Col xl={7} lg={7} md={24}>
              <AntType
                text="Square Footage"
                fontSize={5}
                fontWeight={true}
                color="#004D8B"
              />
              <AntInput
                placeholder="1200 sq ft"
                value="squareFootage"
                regex={/^[0-9]+$/}
                isRequired="true"
              />
            </Col>
            <Col xl={10} lg={10} md={24}>
              <AntType
                text="Description of the items"
                fontSize={5}
                fontWeight={true}
                color="#004D8B"
              />
              <AntInput
                placeholder="Basement"
                value="itemDescription"
                regex={/^[a-zA-Z_ ]*$/}
                isRequired="true"
              />
            </Col>
            <Col xl={7} lg={7} md={24}>
              <AntType
                text="Cutting and Waste"
                fontSize={5}
                fontWeight={true}
                color="#004D8B"
              />
              <AntInput
                placeholder="120 sq ft"
                value="cuttingWaste"
                regex={/^[0-9]+$/}
                isRequired="true"
              />
            </Col>
          </Row>
          <Row>
            <AddMeasurement
              text="Add width and length of room"
              downIcon={<UpOutlined />}
              upIcon={<DownOutlined />}
              col1={10}
              col2={10}
            />
          </Row>
          <Row>
            <AdditionalMeasurement text="Add another measurement" />
          </Row>
          <div className="btnGap">
            <Button onClick={setPrevPage}>Back</Button>
            <Button htmlType="submit">Save</Button>
          </div>
        </Col>
        <Col xl={10} lg={10} md={24}>
          <CustomerDetailBox />
        </Col>
      </Row>
    </div>
  );
};

export default ManufacturerMeasurement;
