import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

class Layout extends React.Component {
    render(){
  return (
    <>
      <Header />
        <main>{this.props.children}</main>
      <Sidebar />
        
        
        
      </>
   
  );}
};

export default Layout;