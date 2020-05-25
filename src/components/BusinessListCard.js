import React, { Component} from "react";
import { Link } from 'react-router-dom';
import businessService from "./../lib/business-service";
// import 'bootstrap/dist/css/bootstrap.css';






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
      return (
        <div>
        
      
      
      
  
            {businesses?
                businesses.map((business) => {
                   return( 
                    <div class="col-7">
                    <div class="card" style={{"width": "18rem"}}>
                  <h2 class="card-title">{business.business_name}</h2>
                  <img src={business.image_url} class="card-img-top" alt="img-business"/>
                  {/* <h2>{selectedBusiness.type}</h2>
                  <h2>{selectedBusiness.properties.SERVICE}</h2> */}
                  <p class="card-text">{business.service}</p>
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div> 
                </div> 
              
              
                   )
            }):null}
  
  
            <Link to="/">
                                    <button className="">Go Back</button>
                                </Link>
        </div>
      );
    }
}


