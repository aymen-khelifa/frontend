import React, { useEffect } from "react";
import Layout from "./Layout";
import Formmdpoublie from "../components/Formmdpoublie";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "admin") {
      navigate("/");
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <Formmdpoublie />
    </Layout>
  );
};

export default EditUser;