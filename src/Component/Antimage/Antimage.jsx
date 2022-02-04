import React from "react";
import { Image } from "antd";
const Antimage = ({ img, height, width }) => {
  return (
    <div>
      {/* <Image width={100} height={70} src={img} preview={false} /> */}
      <img src={img} height={height} width={width} alt="" />
    </div>
  );
};

export default Antimage;
