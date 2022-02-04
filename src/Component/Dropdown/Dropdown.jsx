import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import "./Dropdown.css";

const DropDown = ({ dropdown }) => {
  return (
    <div className="dropdownsection">
      {dropdown ? (
        <Menu style={{ background: "#F1F1F1" }}>
          <Menu.Item>
            <a>1st menu item</a>
          </Menu.Item>
          <Menu.Item>
            <a>1st menu item</a>
          </Menu.Item>
          <Menu.Item>
            <a>1st menu item</a>
          </Menu.Item>
        </Menu>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DropDown;
