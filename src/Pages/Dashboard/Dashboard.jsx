import React, { useEffect } from "react";
import { Layout } from "antd";
import "./Dashboard.css";
import Morningsection from "../../Component/Morningsection/Morningsection";
import AddContentSection from "../../Component/AddContentSection/AddContentSection";
import TaskSection from "../../Component/TaskSection/TaskSection";
import MeetingSection from "../../Component/MeetingSection/MeetingSection";
import { firestore } from "../../Firebase/Firebase";

const { Content } = Layout;
const Dashboard = () => {
  useEffect(() => {
    console.log("dashboard");
  }, []);
  return (
    <div>
      <Content className="dashboardContent">
        <Morningsection />
        <AddContentSection />
        <TaskSection />
        <MeetingSection />
      </Content>
    </div>
  );
};

export default Dashboard;
