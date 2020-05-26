import React from 'react'
import Map from "./../components/Map"
import BusinessListCard from "./../components/BusinessListCard"
import ReactDOM from 'react-dom';
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';

function Home() {
  return (

    <div> 
      <h1>Home Page</h1>

      <Row>
      <Col flex="1 1 200px">
      
      <Map/>
      </Col>
    
      
      
      <Col flex="0 1 300px">
      
      <BusinessListCard/>
      </Col>
      </Row>
    </div>
  )
}

export default Home;



{/* <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
      Raw flex style
    </Divider>
    <Row>
      <Col flex="1 1 200px">1 1 200px</Col>
      <Col flex="0 1 300px">0 1 300px</Col>
    </Row> */}
