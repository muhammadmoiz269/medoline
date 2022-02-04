import React from "react";
import { Row, Col, Dropdown, Avatar } from "antd";
import Searchbar from "../Searchbar/Searchbar";
import "./Navbar.css";
import Navbarinfo from "../Navbarinfo/Navbarinfo";
import HomeImg from "../../assests/images/homeimage.png";
import Antimage from "../../Component/Antimage/Antimage";
import AntSelect from "../AntSelect/AntSelect";
import ProfileCard from "../ProfileCard/ProfileCard";

const Navbar = () => {
  return (
    <Row style={{ width: "100%" }}>
      <Col className="navbarSelect" span={20}>
        <AntSelect placeholder="Search" onNav="true" />

        <Navbarinfo />
      </Col>
      <Col span={4} className="navBarImage">
        <Antimage img={HomeImg} height="50px" width="70px" />
      </Col>
    </Row>
  );
};

export default Navbar;
