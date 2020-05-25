import React, { Component} from "react";
import { Link } from 'react-router-dom';
import businessService from "./../lib/business-service";
// import 'bootstrap/dist/css/bootstrap.css';






export default class BusinessDetails extends Component {
  state = {
    
    business:null,
    
  };

  componentDidMount() {
    const { businessId } = this.props.match.params;
    
      businessService
      .getOneBusinessById(businessId)
      .then((business)=> {
          console.log("businesses",business)
        this.setState({ business })
        
      })
      .catch( (err) => console.log(err));


  }
  componentDidUpdate(nextState){
return nextState !== this.state
  }
  
  //   const [selectedBusiness, setSelected] = useState(null);

  

  render() {
    const {business}=this.state
    // const {selectedBusiness}=this.state
      return (
        <div>
        
      
      
      
  
            {business?
                
                   
                    <div>
                  
                  <img src={business.image_url}  alt="img-business"/>
                  <h2 >{business.business_name}</h2>
                  {/* <h2>{selectedBusiness.type}</h2>
                  <h2>{selectedBusiness.properties.SERVICE}</h2> */}
                  
                  <p >{business.address}</p>
                  <p >{business.zip_code}</p>
                  <p >{business.city}</p>
                  <p >{business.phone_number}</p>
                  <p >{business.description}</p>
                  <p >{business.service}</p>
                  <p >{business.discount}</p>
                  <p >{business.initial_price}</p>
                  <p >{business.discount_price}</p>
                  <p >{business.description}</p>
                  <p >{business.availability}</p>






                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                 </div>
              
              
                   
            :null}
  
           
        </div>
      );
    }
  }
