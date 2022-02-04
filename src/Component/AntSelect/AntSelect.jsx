import React from "react";
import { Select } from "antd";
import "./AntSelect.css";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Form } from "antd";

const { Option } = Select;

function onBlur() {
  // console.log("blur");
}

function onFocus() {
  // console.log("focus");
}

function onSearch(val) {
  // console.log("search:", val);
}

const AntSelect = ({
  placeholder,
  valueName,
  onNav,
  next,
  doctorList,
  specializationList,
}) => {
  function onChange(value) {
    next && setNextPage(value);
  }
  const setNextPage = (value) => {
    next(value);
    // onChange();
  };

  return (
    <div>
      <Form.Item name={valueName}>
        <Select
          className={onNav ? "navSearchbr" : "Searchbr"}
          showSearch={true}
          placeholder={placeholder}
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {doctorList ? (
            doctorList?.map((name) => {
              return (
                <Option value={name.doctorDetails.firstName}>
                  {`${name.doctorDetails.firstName} ${name.doctorDetails.lastName}`}
                </Option>
              );
            })
          ) : (
            <>
              <Option value="neurology">Neurology</Option>
              <Option value="family_medicine">Family_Medicine</Option>
              <Option value="urology">Urology</Option>
              <Option value="pathalogy">Pathalogy</Option>
              <Option value="orthopadic">Orthopadic</Option>
            </>
          )}
        </Select>
      </Form.Item>
    </div>
  );
};

export default AntSelect;
