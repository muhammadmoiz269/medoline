import React from "react";
import { Image } from "antd";

const AntImage = ({ name, width }) => {
  return (
    <div>
      <Image preview={false} width={width} src={name} />
    </div>
  );
};

export default AntImage;
