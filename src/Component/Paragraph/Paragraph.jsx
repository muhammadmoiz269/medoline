import React from "react";
import { Typography, Space } from "antd";
import { icons } from "antd/lib/image/PreviewGroup";

const { Text, Link } = Typography;

const Paragraph = ({
  text,
  fontSize,
  color,
  bold,
  align,
  borderBottom,
  padding,
  display,

  icon,
}) => {
  return (
    <div
      style={{
        fontSize: fontSize,
        fontWeight: bold,
        textAlign: align,
        borderBottom: borderBottom,
        padding: padding,
        display: display,
      }}
    >
      <div>{icon}</div>
      <div>
        <Text style={{ color: color }}>{text}</Text>
      </div>
    </div>
  );
};

export default Paragraph;
