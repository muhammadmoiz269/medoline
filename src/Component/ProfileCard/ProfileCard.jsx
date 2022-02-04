import React, { useState } from "react";
import { Popover, Button } from "antd";
import { DownOutlined, UpOutlined, LogoutOutlined } from "@ant-design/icons";
import Navbarinfo from "../Navbarinfo/Navbarinfo";
import Paragraph from "../Paragraph/Paragraph";
import AntButton from "../AntButton/AntButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../Redux/auth/authActions";
import "./ProfileCard.css";

const icon = <UpOutlined style={{ color: "#ffff" }} />;

const ProfileCard = ({ signout }) => {
  const [visible, setvisible] = useState(false);
  const hide = () => {
    setvisible(false);
    signout();
  };

  const names = [
    {
      text: "Toronto",
    },
    {
      text: "Alberta",
    },
    {
      text: "Profile",
    },
    {
      text: "Account",
    },
    {
      text: "LogOut",
      display: "flex",

      icon1: (
        <div onClick={hide}>
          <LogoutOutlined
            style={{
              color: "#004d8b",
              fontSize: "1.2rem",
              paddingRight: "0.5rem",
            }}
          />
        </div>
      ),
    },
  ];

  const handleVisibleChange = (visible) => {
    setvisible(visible);
  };
  return (
    <div style={{ borderRadius: "100px" }}>
      <Popover
        content={
          <div className="ProfileBox">
            <div className="UpperSection">
              <div className="flex">
                <Navbarinfo color="#ffff" icon={icon} />
              </div>
              <div className="profileButton">
                <AntButton
                  background="#ffff"
                  color="#00818F"
                  text="Owner"
                  padding="0.2rem 0.5rem"
                />
              </div>
            </div>
            <div className="LowerSection">
              {names.map((item) => {
                return item.text === "Profile" ? (
                  <Link to="/appointment">
                    <Paragraph
                      display={item.display ? item.display : ""}
                      text={item.text}
                      icon={item.icon1 ? item.icon1 : <></>}
                      fontSize="1rem"
                      color="gray"
                      borderBottom="1px solid #DCDCDC"
                      padding="0.3rem 0.5rem"
                    />
                  </Link>
                ) : (
                  <Paragraph
                    display={item.display ? item.display : ""}
                    text={item.text}
                    icon={item.icon1 ? item.icon1 : <></>}
                    fontSize="1rem"
                    color="gray"
                    borderBottom="1px solid #DCDCDC"
                    padding="0.3rem 0.5rem"
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
        <DownOutlined />
      </Popover>
    </div>
  );
};

var actions = {
  signout,
};
export default connect(null, actions)(ProfileCard);
