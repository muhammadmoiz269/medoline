import React from "react";
import AntButton from "../AntButton/AntButton";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import AntUpload from "../AntUpload/AntUpload";
import Paragraph from "../Paragraph/Paragraph";
import { Input, Form } from "antd";
import { DatePicker, Space } from "antd";

import { Radio } from "antd";

import "./ProductManufacturerSection.css";
const ProductManufacturerSection = ({ setAppointmentDate }) => {
  const [value, setValue] = React.useState(1);

  function onChange(date, dateString) {
    // console.log(dateString);
    setAppointmentDate(dateString);
  }
  return (
    <div>
      <div className="nameFields">
        <div className="names">
          <AntType
            text="Enter patient name"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput
            regex={/^[a-zA-Z_ ]*$/}
            placeholder="Enter patient name"
            value="patientName"
          />

          <div>
            <AntType
              text="Enter date of birth"
              fontSize={5}
              fontWeight={true}
              color="#1D1C1C"
            />

            <Form.Item name="patientDOB">
              <DatePicker onChange={onChange} />
            </Form.Item>
          </div>

          <div className="uploadImage">
            <AntUpload imgName="patientImage" />

            <div>
              <AntType
                text="Upload Patient image"
                fontSize={5}
                fontWeight={true}
                color="#1D1C1C"
              />
              <Paragraph
                text="Photo should be atleast 300px x 300px"
                fontSize="0.9rem"
                color="gray"
              />

              <AntButton
                background="#ffff"
                color="#00818F"
                text="Upload Image"
                padding="0.2rem 0.5rem"
              />
            </div>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManufacturerSection;
