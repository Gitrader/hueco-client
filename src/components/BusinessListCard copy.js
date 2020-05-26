import React, { Component} from "react";
import { Link } from 'react-router-dom';
import businessService from "./../lib/business-service";
// import 'bootstrap/dist/css/bootstrap.css';

import 'antd/dist/antd.css';

import { Card, Col, Row, List } from 'antd';






export default class BusinessListCard extends Component {
  state = {
    
    businesses:[],
    selectedBusiness: null,
  };

  componentDidMount() {
    
    businessService
      .getAllBusinesses()
      .then((businesses)=> {
          console.log("business",businesses)
        this.setState({ businesses })
        
      })
      .catch( (err) => console.log(err));
  }
  componentDidUpdate(nextState){
return nextState !== this.state
  }
  
  //   const [selectedBusiness, setSelected] = useState(null);

  

  render() {
    console.log("business list card seletected business",this.state.selectedBusiness)
    const {businesses}=this.state
    const {selectedBusiness}=this.state
    // const {selectedBusiness}=this.state
    const { Meta } = Card;
      return (
        <div>
  
            {businesses?
                businesses.map((business) => {
                   return( 
                     <section className="business-card">

                     
              
                     <Link to={`/businesses/${business._id}`}>
                    
                     
                    <div>
                    <article className="container">
                        <Card 
                        className="card"
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="business-img" src={business.image_url} />}
                          >
                            <Meta title={business.business_name} description={business.service} />
                        </Card>
                        </article>
                        </div>
                        </Link>
                        
                    </section>
                        )
                    })
                    :null}
  
  
            {/* <Link to="/">
                                    <button className="">Go Back</button>
                                </Link> */}
        </div>
      );
    }
}



{/* <List
grid={{
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 6,
  xxl: 3,
}}
dataSource={data}
renderItem={item => (
  <List.Item>
    <Card title={item.title}>Card content</Card>
  </List.Item> */}

  <h2>Card</h2>

<div class="card">
  <img src={business.image_url} alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>{business.business_name}</b></h4> 
    <p>{business.service}</p> 
  </div>
</div>