import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
 
  const getutilisateur = async (e) => {
    e.preventDefault();
          await axios.get('http://localhost:5000/users/getuser', {

          
          
        }, { 
        },{
             headers: {'X-Requested-With': 'XMLHttpRequest', 
             "content-type":"application/json", "Access-Control-Allow-Origin": "http://localhost:5000", 
             "Access-control-request-methods":"POST, GET, DELETE, PUT, PATCH, COPY, HEAD, OPTIONS"}, 
            "withCredentials": true 
          }) .then((response) => {
            const msg = response.data.message;
           
           
        }).catch(err => {
            console.log(err);
          
      
        });
    }
          
          
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
      
        Welcome  <strong>{getutilisateur.respone}</strong>
      </h2>
    </div>
  );
};

export default Welcome;