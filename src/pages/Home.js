import React from 'react'
import Map from "./../components/Map"
import BusinessListCard from "./../components/BusinessListCard"
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

function Home() {
  return (
    <div> 
      <h1>Home Page</h1>
      
      <Map/>
      
      
      
    <Col span={12} push={12}>
      <BusinessListCard/>
      </Col>
      
    </div>
  )
}

export default Home;




