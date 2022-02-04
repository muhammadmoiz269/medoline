import React, { useState, useEffect } from "react";
import "./AntInput.css";
import { Input, Form } from "antd";

const AntInput = ({
  placeholder,
  isRequired,
  value,
  regex,

  setProductInfo,
}) => {
  return (
    <div>
      <Form.Item
        label={isRequired && value}
        name={value}
        rules={[
          {
            required: isRequired,
            message: `This is a required field`,
          },
          {
            pattern: regex,
            message: `Please enter  valid data`,
          },
        ]}
      >
        <Input placeholder={placeholder} size="middle" />
      </Form.Item>
    </div>
  );
};

export default AntInput;
