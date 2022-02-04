import React from "react";
import { Avatar, Divider, Tooltip } from "antd";

const Antavatar = ({ img }) => {
  return (
    <div>
      <Avatar src={img} />
    </div>
  );
};

export default Antavatar;
