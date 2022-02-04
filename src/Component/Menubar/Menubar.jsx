import React from "react";
import { Menu } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import "./Menubar.css";

import {
  AppstoreOutlined,
  FlagOutlined,
  UserOutlined,
  CalendarOutlined,
  OrderedListOutlined,
  LeftOutlined,
  CopyOutlined,
  FolderOpenOutlined,
  SnippetsOutlined,
  TagOutlined,
  BulbOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const { Title } = Typography;

const Menubar = ({ showDrawer, onClose, visible }) => {
  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className="menubr">
      <Menu
        onClick={handleClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        width="245"
      >
        {visible ? (
          <LeftOutlined className="LeftIcon" onClick={onClose} />
        ) : (
          <></>
        )}
        <div className="MenuBarUpperSection">
          <div className="flex1">
            <FlagOutlined className="flagIcon" />
            <Title level={5}>Medoline</Title>
          </div>
        </div>

        <Menu.Item key="1" icon={<AppstoreOutlined className="icon" />}>
          <Link to="/home">Homee</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarOutlined className="icon" />}>
          <Link to="/doctorlist">Find Doctor</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<OrderedListOutlined className="icon" />}>
          <Link to="/available_doctors">Available Doctors</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<OrderedListOutlined className="icon" />}>
          <Link to="/quote">Doctors Category</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<OrderedListOutlined className="icon" />}>
          <Link to="/appointment">Add Appointment</Link>
        </Menu.Item>
        {/* <SubMenu
          key="sub2"
          icon={<UserOutlined className="icon" />}
          title="Customers"
        >
          <Menu.Item key="4">
            <Link to="/add_doctor">Add Doctor</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/doctorlist">Doctor List</Link>
          </Menu.Item>
        </SubMenu> */}
        <SubMenu
          key="sub3"
          icon={<CopyOutlined className="icon" />}
          title="Admin"
        >
          <Menu.Item key="6">
            <Link to="/add_doctor">Add Doctor</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/doctors">Upd / Del Doctor</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="8" icon={<FolderOpenOutlined className="icon" />}>
          User Profile
        </Menu.Item>
        <Menu.Item key="9" icon={<SnippetsOutlined className="icon" />}>
          Support
        </Menu.Item>
        <Menu.Item key="10" icon={<TagOutlined className="icon" />}>
          <Link to="/feedback">Rate & Feedback</Link>
        </Menu.Item>

        <Menu.Item
          key="14"
          icon={<BulbOutlined className="icon" />}
          className="bottonMenu"
        >
          Learn Center
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Menubar;
