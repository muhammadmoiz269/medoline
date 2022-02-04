import React from "react";
import { Collapse } from "antd";
import AntType from "../AntTypo/AntType";
import { PlusOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import { Input, Form } from "antd";

import "./AntAccordian.css";

const { Panel } = Collapse;

function callback(key) {}

const AntAccordian = ({ items }) => {
  const [value, setValue] = React.useState(1);

  const onChange = (e, name) => {
    setValue(e.target.value);
  };
  return (
    <Collapse defaultActiveKey={["0"]} onChange={callback}>
      <Panel
        showArrow={false}
        header={
          <AntType
            text={items.title}
            fontSize={5}
            fontWeight={true}
            color="black"
            justifyContent="space-between"
            icon={<PlusOutlined style={{ color: "#C95B1D" }} />}
            margin="0rem 0.5em"
          />
        }
        key="1"
      >
        {items.radioItem.map((radioItems) => {
          return (
            <div>
              <Form.Item name={items.title}>
                <Radio.Group
                  onChange={(e) => onChange(e, items.title)}
                  value={radioItems.radio}
                  name={items.title}
                >
                  <Radio value={radioItems.radio}>{radioItems.radio}</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          );
        })}
      </Panel>
    </Collapse>
  );
};

export default AntAccordian;
