import React, { useState } from "react";
import { Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DropDown from "../Dropdown/Dropdown";
import "./Searchbar.css";
const { Search } = Input;

const onSearch = (value) => console.log(value);

const suffix = <SearchOutlined className="searchIcon" />;

const Searchbar = () => {
  const [dropdownvisible, setdropdownvisible] = useState(false);
  const SetDropDown = () => {
    setdropdownvisible(!dropdownvisible);
  };

  return (
    <div className="Search">
      <Input
        className="searchInput"
        placeholder="Search"
        onSearch={onSearch}
        onClick={SetDropDown}
        bordered={false}
        suffix={suffix}
      />

      <DropDown dropdown={dropdownvisible} />
    </div>
  );
};

export default Searchbar;
