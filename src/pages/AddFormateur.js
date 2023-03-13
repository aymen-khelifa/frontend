import React, { useEffect } from "react";
import {useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormAddFormateur from "../components/addformateur/FormAddFormateur";
import Header from "../header/Header";

const AddFormateur = () => {
  
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

   

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <div>
      <Header/>
      <FormAddFormateur/>
    </div>
      
      
      
  );
};

export default AddFormateur;