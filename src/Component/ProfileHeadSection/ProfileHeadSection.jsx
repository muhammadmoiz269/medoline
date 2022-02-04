import React, { useState, useEffect, useContext } from "react";
import AntType from "../AntTypo/AntType";
import "./ProfileHeadSection.css";
import { DownOutlined, UpOutlined, LogoutOutlined } from "@ant-design/icons";
import ProfileCard from "../ProfileCard/ProfileCard";
import SettingsPopover from "../SettingsPopover/SettingsPopover";
import Child from "../Child/Child";
import { userContext } from "../../Pages/Profile/Profile";

const ProfileHeadSection = ({ data }) => {
  const [visible, setvisible] = useState(false);
  const [count, setCount] = useState(0);
  const user = useContext(userContext);

  const isTrigger = () => {
    setvisible(true);
  };

  useEffect(() => {
    console.log("Data passed from parent to child", data);
  }, [data]);

  useEffect(() => {
    return () => {
      console.log("Child Punch Out");
    };
  }, []);

  return (
    <div style={{ borderBottom: "1px solid #DCDCDC", padding: "1rem 0rem" }}>
      <AntType
        text="Flooring & Home"
        fontSize={1}
        fontWeight={true}
        color="#1D1C1C"
      />
      <div className="profileTabs">
        <AntType
          text={"Overview"}
          fontSize={5}
          fontWeight={true}
          color="#00818F"
          margin="0rem 1rem"
        />

        <SettingsPopover>
          <AntType
            text={"Settings"}
            fontSize={5}
            fontWeight={true}
            color="#00818F"
            margin="0rem 1rem"
          />
        </SettingsPopover>

        <SettingsPopover>
          <AntType
            text={"Billings"}
            fontSize={5}
            fontWeight={true}
            color="#00818F"
            margin="0rem 1rem"
          />
        </SettingsPopover>

        <AntType
          text={"Integrations"}
          fontSize={5}
          fontWeight={true}
          color="#00818F"
          margin="0rem 1rem"
        />
      </div>
      <h1>Count is {user}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default ProfileHeadSection;
