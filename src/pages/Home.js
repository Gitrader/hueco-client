import React from 'react'
import Map from "./../components/Map"
import BusinessListCard from "./../components/BusinessListCard"
import ReactDOM from 'react-dom';
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import './Home.css'

function Home() {
  return (
<div>
    {/* <h1>Home Page</h1> */}
    <div className="b-card"> 
      

      {/* <Row> */}
      {/* <Col flex="1 1 200px"> */}
      
      <Map className="map" />
      {/* </Col> */}
    
      
      
      {/* <Col flex="0 1 300px"> */}
      
      <BusinessListCard
        className="list-card"
      />
      {/* </Col>
      </Row> */}
    </div>
    </div>
  )
}

export default Home;



