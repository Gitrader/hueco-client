import React, { Component} from "react";
import { Link } from 'react-router-dom';
import businessService from "./../lib/business-service";
// import 'bootstrap/dist/css/bootstrap.css';

import 'antd/dist/antd.css';

import { Card, Col, Row } from 'antd';






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
    const {businesses}=this.state
    // const {selectedBusiness}=this.state
    const { Meta } = Card;
      return (
        <div>
  
            {businesses?
                businesses.map((business) => {
                   return( 
                     <div className="business-card">
                     <Col>
<Row span={12}></Row>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="business-img" src={business.image_url} />}
                          >
                            <Meta title={business.business_name} description={business.service} />
                        </Card>
                        </Col>
                    </div>
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



