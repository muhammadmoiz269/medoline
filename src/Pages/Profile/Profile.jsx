import React, { useState, useEffect } from "react";
import "./Profile.css";
import { Layout } from "antd";
import ProfileHeadSection from "../../Component/ProfileHeadSection/ProfileHeadSection";
import Child from "../../Component/Child/Child";
const { Content } = Layout;
export const userContext = React.createContext();

const Profile = () => {
  const [count, setCount] = useState(0);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log("value updated from Parent", count);
  }, []);

  const Counter = () => {
    setCount(count + 1);
    // setVisible(!visible);
  };

  return (
    <div>
      <Content className="profileContent">
        {/* <userContext.Provider value={count}>
          <ProfileHeadSection />
          <button onClick={Counter}>change value</button>
        </userContext.Provider> */}
        <Child age={12} />
      </Content>
    </div>
  );
};

export default Profile;
