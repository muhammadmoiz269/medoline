import React from "react";
import { Button, Radio } from "antd";
import "./AntButton.css";
import { Link } from "react-router-dom";

const AntButton = ({ color, background, text, padding, link }) => {
  return link ? (
    <Link to={link && `/${link}`}>
      <div
        className="antButton"
        style={{
          borderRadius: "5px",
          background: background,
          color: color,
          padding: padding ? padding : "0.7rem 2rem",
        }}
      >
        {text}
      </div>
    </Link>
  ) : (
    <div
      className="antButton"
      style={{
        borderRadius: "5px",
        background: background,
        color: color,
        padding: padding ? padding : "0.7rem 2rem",
      }}
    >
      {text}
    </div>
  );
};

export default AntButton;
