import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const AntType = ({
  fontSize,
  color,
  fontWeight,
  text,
  align,
  margin,
  icon,
  justifyContent,
}) => {
  return (
    <div
      style={{
        textAlign: align,
        display: "flex",
        justifyContent: justifyContent ? justifyContent : "",
      }}
    >
      <div>
        <Title
          level={fontSize}
          strong={fontWeight}
          style={{ color: color, margin: margin }}
        >
          {text}
        </Title>
      </div>

      <div style={{ marginLeft: "1rem", color: "#C95B1D" }}>{icon}</div>
    </div>
  );
};

export default AntType;
