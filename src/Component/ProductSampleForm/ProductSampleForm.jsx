import React from "react";
import AdditionalCustomer from "../AdditionalCustomer/AdditionalCustomer";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import "./ProductSampleForm.css";
import { Input, Form } from "antd";
import { DatePicker, Space } from "antd";
import { Radio } from "antd";
const { TextArea } = Input;
const ProductSampleForm = ({ doctorList }) => {
  const [value, setValue] = React.useState(1);

  const onChangeradio = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div className="productFields">
      <div>
        <div className="forSpacing">
          <AntType
            text="Select Doctor"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntSelect
            placeholder="Select Doctor"
            valueName="doctorName"
            doctorList={doctorList}
          />
        </div>
        <div>
          <AntType
            text="Select Appointment Date"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <Form.Item name="appointmentDate">
            <DatePicker onChange={onChange} />
          </Form.Item>
        </div>

        <div>
          <AntType
            text="Select Gender"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <div>
            <Form.Item name="patientGender">
              <Radio.Group onChange={onChangeradio} value={value}>
                <Radio value={1}>Male</Radio>
                <Radio value={2}>Female</Radio>
                <Radio value={3}>Other</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>

        <div>
          <AntType
            text="Enter Patient History"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <Form.Item name="patientHistory">
            <TextArea rows={6} />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default ProductSampleForm;
