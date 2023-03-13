import React, { useEffect } from "react";
import Formmdpoublie from "../components/mdpoublie/Formmdpoublie";
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
   
      <Formmdpoublie />
    
  );
};

export default EditUser;