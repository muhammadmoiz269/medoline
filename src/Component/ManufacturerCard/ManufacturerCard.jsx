import React from "react";
import { Card, Col, Row } from "antd";
import AntType from "../AntTypo/AntType";
import { Link } from "react-router-dom";
import "./ManufacturerCard.css";
import Antimage from "../Antimage/Antimage";

const ManufacturerCard = ({ item, setImageLogo, next }) => {
  // console.log("products", item.productDetails.productImage);

  const handleLogo = () => {
    setImageLogo(item.productDetails.productImage);
    next();
  };

  return (
    <Card className="manufacturerCard" onClick={handleLogo}>
      <div
        className="imageManu"
        style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#ffff" }}
      >
        <Antimage
          img={item.productDetails.productImage}
          height="70px"
          width="90px"
        />
      </div>
    </Card>
  );
};

export default ManufacturerCard;
