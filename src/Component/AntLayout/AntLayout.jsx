import React from "react";
import { Layout } from "antd";
import Menubar from "../Menubar/Menubar";
import Navbar from "../Navbar/Navbar";
import { Row, Col } from "antd";
import Paragraph from "../Paragraph/Paragraph";
import "./AntLayout.css";
const { Header, Content, Footer } = Layout;

const AntLayout = ({ children }) => {
  console.log("LAyout");
  return (
    <div>
      <Layout>
        <Menubar style={{ width: "205px" }} />

        <Layout style={{ marginLeft: "205px" }}>
          <Header className="head">
            <Navbar />
          </Header>

          {children}
          <Footer>
            <Row style={{ height: "50px" }}>
              <Col className="footerSection" xs={6} md={12} lg={16}>
                <Paragraph
                  text="Build CRM @2021"
                  fontSize="1rem"
                  color="#ffff"
                />
              </Col>
              <Col className="footerInnerSection" xs={18} md={12} lg={8}>
                <Paragraph
                  text="Privacy Policy"
                  fontSize="1rem"
                  color="#ffff"
                />
                <Paragraph text="Support" fontSize="1rem" color="#ffff" />
                <Paragraph text="Feedback" fontSize="1rem" color="#ffff" />
              </Col>
            </Row>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default AntLayout;
