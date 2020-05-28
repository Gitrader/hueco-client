import React from "react";
import Map from "./../components/Map";
import BusinessListCard from "./../components/BusinessListCard";
// import ReactDOM from 'react-dom';

import "antd/dist/antd.css";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="b-card">
        <Map className="map" />

        <BusinessListCard className="list-card" />
      </div>
    </div>
  );
}

export default Home;
