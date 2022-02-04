import React, { useState } from "react";
import { Popover, Button } from "antd";
import { DownOutlined, UpOutlined, LogoutOutlined } from "@ant-design/icons";
import Navbarinfo from "../Navbarinfo/Navbarinfo";
import Paragraph from "../Paragraph/Paragraph";
import AntButton from "../AntButton/AntButton";
import { Link } from "react-router-dom";
import "./SettingsPopover.css";

const icon = (
  <DownOutlined style={{ color: "#C95B1D", paddingTop: "0.5rem" }} />
);

const names = [
  {
    text: "Location Deatils",
  },
  {
    text: "User",
  },
  {
    text: "Contact Information",
  },
  {
    text: "Delete Account",
  },
];

const SettingsPopover = ({ text, children }) => {
  const [visible, setvisible] = useState(false);

  const hide = () => {
    setvisible(false);
  };

  const handleVisibleChange = (visible) => {
    setvisible(visible);
  };
  return (
    <div className="settingPopOver">
      <Popover
        content={
          <div className="SettingProfileBox">
            <div className="SettingLowerSection">
              {names.map((item) => {
                return item.text === "Profile" ? (
                  <Link to="/appointment">
                    <Paragraph
                      text={item.text}
                      fontSize="0.9rem"
                      color="gray"
                      borderBottom="1px solid #DCDCDC"
                      padding="0.5rem 0.5rem"
                    />
                  </Link>
                ) : (
                  <Paragraph
                    display={item.display ? item.display : ""}
                    text={item.text}
                    fontSize="0.9rem"
                    color="gray"
                    borderBottom="1px solid #DCDCDC"
                    padding="0.5rem 0.5rem"
                  />
                );
              })}
            </div>
          </div>
        }
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        {children}
        {icon}
      </Popover>
    </div>
  );
};

export default SettingsPopover;
