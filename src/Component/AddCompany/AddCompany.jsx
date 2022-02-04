import React, { useState } from "react";
import { Collapse } from "antd";

import UserInfoFields from "../UserInfoFields/UserInfoFields";
import "./AddCompany.css";
import AntType from "../AntTypo/AntType";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const AddCompany = () => {
  const [iconVisible, seticonVisible] = useState(["1"]);
  function callback(key) {
    seticonVisible(key);
  }
  return (
    <div>
      <Collapse defaultActiveKey={["0"]} onChange={callback}>
        <Panel
          showArrow={false}
          header={
            <AntType
              text={
                iconVisible.length === 1
                  ? "Additional information"
                  : "Remove additional information"
              }
              fontSize={5}
              fontWeight={true}
              color="#00818F"
              icon={
                iconVisible.length === 1 ? (
                  <PlusOutlined style={{ color: "#C95B1D" }} />
                ) : (
                  <MinusOutlined style={{ color: "#C95B1D" }} />
                )
              }
              margin="0rem 0.5em"
            />
          }
          key="1"
        >
          <UserInfoFields isCompany="true" />
        </Panel>
      </Collapse>
    </div>
  );
};

export default AddCompany;
