import React from "react";
import AntType from "../AntTypo/AntType";
import "./CustomerDetailBox.css";
import { EditOutlined } from "@ant-design/icons";
import Paragraph from "../Paragraph/Paragraph";
import Antavatar from "../Antavatar/Antavatar";

const CustomerDetailBox = () => {
  return (
    <div className="detailBox">
      <div className="detailBoxHeadSection">
        <div>
          <AntType text="Customer" fontSize={4} color="black" />
        </div>
        <div className="textIcon">
          <AntType text="Edit Customer" fontSize={5} color="#00818F" />
          <EditOutlined className="editIcon" />
        </div>
      </div>
      <div className="spacing">
        <AntType text="John Dancer" fontSize={5} color="black" />
        <Paragraph text="H : (416) 555 5555" fontSize="0.9rem" color="gray" />
        <Paragraph text="E : john@gmail.com" fontSize="0.9rem" color="gray" />
      </div>

      <div className="spacing">
        <AntType text="Shipping address" fontSize={5} color="black" />
        <Paragraph text="81 Main Street" fontSize="0.9rem" color="gray" />
        <Paragraph text="Toronto, Ontario" fontSize="0.9rem" color="gray" />
        <Paragraph text="M4R-53" fontSize="0.9rem" color="gray" />
      </div>

      <div className="spacing">
        <AntType text="Account Manager" fontSize={5} color="black" />

        <div style={{ display: "flex" }}>
          <Antavatar img="https://avatars.githubusercontent.com/u/1674036?s=40&v=4" />

          <Paragraph
            text="Aftab Khan"
            fontSize="0.9rem"
            color="gray"
            padding="0.2rem 1rem"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailBox;
