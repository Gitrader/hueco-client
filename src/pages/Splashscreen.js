import React from "react";
import {  Button } from "antd";
import { Link } from "react-router-dom";
import "./Splashscreen.css"
// import ReactDOM from 'react-dom';

import "antd/dist/antd.css";



function Splashscreen() {
  return (
    <div className="splash-container">
    <h1>Welcome to Hueco! </h1>
    <h3>What is Hueco? </h3> 
    <p>Hueco is a booking platform that allows users to get appointments at discounted prices for their favorite local businesses.</p>
    <img src="https://res.cloudinary.com/dksnrn8gi/image/upload/v1590692029/m3-project/hueco_dumqcz.png" alt="splash-logo" className="logo" />
      <Button type="primary">
          <Link to={"/home"}>
              Go to the website 
          </Link>
      </Button>
    </div>
  );
}

export default Splashscreen;


