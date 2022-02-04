import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import ProfileHeadSection from "../../Component/ProfileHeadSection/ProfileHeadSection";
import AntType from "../../Component/AntTypo/AntType";
import Paragraph from "../../Component/Paragraph/Paragraph";
import { firestore } from "./../../Firebase/Firebase";
import AntTable from "../../Component/AntTable/AntTable";
import { Row, Col, Button } from "antd";
import { Skeleton } from "antd";
import MuiCard from "../../Component/MuiCard/MuiCard";
const { Content } = Layout;

const Doctors = () => {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    fetchCustomerList();
  }, []);

  const fetchCustomerList = async () => {
    try {
      setCustomerList([]);
      var query = await firestore.collection("doctors").get();

      //   console.log("query is", query.docs.ref);

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

  return (
    <div style={{ paddingBottom: "2rem" }}>
      <div className="verticalGap" style={{ padding: "0.5rem 3rem" }}>
        <AntType
          text="Available Doctors"
          fontSize={2}
          fontWeight={true}
          color="black"
        />
      </div>
      <Row className="verticalGap" gutter={[24, 24]}>
        <Col
          xl={24}
          lg={24}
          md={24}
          className="gutter-row"
          style={{ padding: "1rem 4rem" }}
        >
          <Row gutter={[16, 16]}>
            {customerList.length > 0 ? (
              customerList.map((items) => {
                return (
                  <Col
                    className="gutter-row"
                    xl={8}
                    lg={8}
                    md={12}
                    sm={24}
                    xs={24}
                  >
                    <MuiCard
                      item={items}
                      isAdmin={true}
                      fetchCustomerList={fetchCustomerList}
                    />
                  </Col>
                );
              })
            ) : (
              <Skeleton active />
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Doctors;
