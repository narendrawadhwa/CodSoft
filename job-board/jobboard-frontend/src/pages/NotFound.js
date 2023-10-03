import React from "react";
import gif from "../images/4041.gif";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  

const navigate = useNavigate(); 

const handleBackToHome = () => {
  navigate("/"); 
};

  return (
    <>
      <div className="cont-404">
        <img src={gif} alt="svg" />
        <button className="btn btn1" onClick={handleBackToHome}>Back to Home</button>
      </div>
    </>
  );
};

export default NotFound;