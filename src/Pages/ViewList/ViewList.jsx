import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import ProfileHeadSection from "../../Component/ProfileHeadSection/ProfileHeadSection";
import AntType from "../../Component/AntTypo/AntType";
import Paragraph from "../../Component/Paragraph/Paragraph";
import "./ViewList.css";
import { firestore } from "./../../Firebase/Firebase";

import AntTable from "../../Component/AntTable/AntTable";

const { Content } = Layout;

const ViewList = () => {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    fetchCustomerList();
  }, []);

  const fetchCustomerList = async () => {
    try {
      var query = await firestore.collection("doctors").get();

      console.log("query is", query);

      query.docs.forEach((doc) => {
        setCustomerList((prevState) => [
          ...prevState,
          { ...doc.data(), id: doc.id },
        ]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("Firebase data ", customerList);
  return (
    <Content className="customerListContent">
      <div className="customerListHeadSection">
        <AntType
          text="Doctor List"
          fontSize={1}
          fontWeight={true}
          color="#1D1C1C"
        />
        <Paragraph
          text="Search results for john"
          fontSize="1.2rem"
          color="gray"
        />
      </div>
      <AntTable customerLists={customerList} />
    </Content>
  );
};

export default ViewList;
