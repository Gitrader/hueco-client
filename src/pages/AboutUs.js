import React from "react";
import {  Button } from "antd";
import { Link } from "react-router-dom";
import "./Splashscreen.css"
// import ReactDOM from 'react-dom';

import "antd/dist/antd.css";



function AboutUs() {
  return (
    <div >
    <h1>About Us</h1>
        <h2>What does Hueco mean?</h2>
        <p> The term Hueco comes from Spanish to express emptiness. So now on when you will refer to something empty you will say "there is a Hueco here!"</p>


        <h2>What is Hueco?</h2>
        <p>Hueco is a last minute booking service appointment that allows business to import their daily empty timeslots in order to make some profit on slow hours.
        People will take advantage of Hueco's unique discounts for their favorite services.
        </p>


        <h2>Why Hueco?</h2>
        <p>This application has been thought and designed during the Coronavirus pandemic where all activities have been stopped to protect the populations.
        No activity meant no jobs, no money, no profit but a new economy to rethink and new opportunities through this crisis.
        Businesses and people can take advantage of Hueco's service to help each other.</p>

        <h2>Where can I use Hueco?</h2>
        <p>Hueco is available in some cities at the moment but willing to expand soon. If you don't see any activities from Hueco around you please send us an email at contact@hueco.com with your city and the type of business you would be interested in.</p>



    </div>
  );
}

export default AboutUs;


