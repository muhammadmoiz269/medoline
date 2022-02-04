import React from "react";
import AntType from "../AntTypo/AntType";
import { MenuFoldOutlined } from "@ant-design/icons";
import Paragraph from "../Paragraph/Paragraph";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./MorningSection.css";

const Morningsection = () => {
  return (
    <div className="morningSection">
      <AntType
        text="Good Morning Aftab"
        fontSize={1}
        fontWeight={true}
        color="#1D1C1C"
      />
      <div className="morningHeadingSection">
        <Paragraph
          text="Hey Whats happening at floor and toronto."
          fontSize="1rem"
          color="gray"
        />

        <div className="morningSortSection">
          <AntType
            text="Filter and sort."
            fontSize={5}
            fontWeight={true}
            color="#00818F"
          />
          <MenuFoldOutlined
            style={{
              color: "#00818F",
              fontSize: "1.3rem",
              paddingLeft: "1rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Morningsection;
