import React from "react";
import Layout from "../layout/Layout";
import Login from "../components/login/Login";
import Welcome from "../components/welcome";

import { Col, Row } from "reactstrap";
import Header from "../header/Header";
import SidebarC from "../sidebar/sidebarCandidat/SidebarCandidat";
function Home  () {
    const styles = {
        contentDiv: {
          display: "flex",
        },
        contentMargin: {
          marginLeft: "10px",
          width: "100%",
        },};
  return (
    <>
    <Row>
      <Col>
        <Header></Header>
      </Col>
    </Row>
    <div style={styles.contentDiv}>
      <SidebarC></SidebarC>
      <div style={styles.contentMargin}>
        <Welcome />
      </div>
    </div>
  </>
  );
};

export default Home;