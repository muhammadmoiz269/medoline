import React from "react";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import AntButton from "../AntButton/AntButton";
import "./BuildQuote.css";

const BuildQuote = ({ next }) => {
  return (
    <div className="verticalPadding">
      <AntType
        text="Select Doctor Category"
        fontSize={5}
        fontWeight={true}
        color="#1D1C1C"
      />

      <AntSelect placeholder="Make a Selection" next={next} />

      <div className="verticalPadding">
        <AntType text="or" fontSize={3} fontWeight={true} color="gray" />
        <div>
          <AntButton
            background="#00818F"
            color="#ffff"
            text="Add a new Doctor"
            link="add_doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default BuildQuote;
