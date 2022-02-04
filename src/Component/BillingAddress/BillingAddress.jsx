import React, { useState, useEffect } from "react";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import "../PrimaryCustomer/PrimaryCustomer.css";
import { Checkbox } from "antd";
import "./BillingAddress.css";
import { Input, Form } from "antd";

const { TextArea } = Input;
function onChange(e) {
  // console.log(`checked = ${e.target.checked}`);
}

const BillingAddress = () => {
  return (
    <div className="billingSection">
      <div>
        <AntType
          text="Billing Address"
          fontSize={4}
          fontWeight={true}
          color="#1D1C1C"
        />

        <Checkbox onChange={onChange}>
          Add a different shipping address
        </Checkbox>
      </div>

      <div className="nameFields">
        <div className="names">
          <AntType
            text="Address"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput placeholder="10 brown street" value="homeAddress" />
        </div>
      </div>
      <div className="names">
        <AntType
          text="Appartment, Suite etc"
          fontSize={5}
          fontWeight={true}
          color="#1D1C1C"
        />
        <AntInput placeholder="Suite No 302" value="appartment" />
      </div>
      <div className="nameFields">
        <div className="zip">
          <AntType
            text="Zip Code"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput regex={/^[0-9]+$/} placeholder="416-555-000" value="zip" />
        </div>
        <div className="city">
          <AntType text="City" fontSize={5} fontWeight={true} color="#1D1C1C" />
          <AntInput
            regex={/^[a-zA-Z_ ]*$/}
            placeholder="karachi"
            value="city"
          />
        </div>
        <div className="state">
          <AntType
            text="State / Province"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput
            regex={/^[a-zA-Z_ ]*$/}
            placeholder="Sindh"
            value="province"
          />
        </div>
      </div>

      <div className="nameFields">
        <div className="textAreaWidth">
          <AntType
            text="Doctor notes"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />

          {/* name property in Form.Item is a unique identifier yahan pe notes denoted kr rha hy meri text area ko   */}
          <Form.Item name="notes">
            <TextArea rows={6} />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;
