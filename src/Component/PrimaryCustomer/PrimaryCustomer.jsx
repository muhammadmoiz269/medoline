import React from "react";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import UserInfoFields from "../UserInfoFields/UserInfoFields";
import { Input, Form } from "antd";

import "./PrimaryCustomer.css";

const PrimaryCustomer = () => {
  return (
    <div>
      <AntType
        text="Primray Doctor"
        fontSize={4}
        fontWeight={true}
        color="#1D1C1C"
      />
      <div className="account">
        <AntType
          text="Select Specialization"
          fontSize={5}
          fontWeight={true}
          color="#1D1C1C"
        />
        <AntSelect placeholder="Make a Selection" valueName="specialization" />
      </div>
      <div>
        <AntType
          text="Fields marked with * are mandatory"
          fontSize={5}
          fontWeight={true}
          color="#1D1C1C"
        />
        <UserInfoFields requiredUser="true" />
      </div>
    </div>
  );
};

export default PrimaryCustomer;
