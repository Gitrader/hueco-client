import React, { Component} from "react";
import { Link } from 'react-router-dom';
import businessService from "./../lib/business-service";
// import 'bootstrap/dist/css/bootstrap.css';
import './BusinessDetails.css'
import {Button} from 'antd';





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
                
                   
                    <section  className="details">
                    <h2 >{business.business_name}</h2>
                  <img src={business.image_url}  alt="img-business"/>
                  
                  {/* <h2>{selectedBusiness.type}</h2>
                  <h2>{selectedBusiness.properties.SERVICE}</h2> */}
                  <div className="address">
                    <address>
                      <p >{business.address}</p>
                      <p >{business.zip_code}</p>
                      <p >{business.city}</p>
                    </address>
                  

                  <p > Phone number: {business.phone_number}</p>
                  
                  <p >Service offered: {business.service}</p>
                  <p >Discount: -{business.discount}%</p>
                  <p >Initial price: {business.initial_price}€</p>
                  <p >Hueco's price: {business.discounted_price}€</p>
                  <p >Description of the service: {business.description}</p>
                  <p >Available huecos:<ul> {
                    business.availability.map(hueco=>{
                   return(
                     <Link to={`/booking/${business._id}/${hueco._id}/contact-info`}>
                     <Button>
                       {hueco.timeSlot}
                       </Button>
                       </Link>
                    )})}
                    </ul>
                   </p>
</div>





                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                 </section>
              
              
                   
            :null}
  
           
        </div>
      );
    }
  }
