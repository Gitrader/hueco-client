
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../lib/Auth';
import "./MyHueco.css"
import { Empty,Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import businessService from "./../lib/business-service"

class MyHueco extends Component {
  state = { 
  
   availability:[], 

  
  
  
  };

 
  // component did uptdate appelle database, aller chercher pour ce business (busniessID), regarder s'il a des crénaux au début

  // Si oui this.Setstate en remplissant availabilyt et change isEmpty par false.

  // A chaque fois qu'on clicque sur add, appel une fonction qui appelle la DB, et qui appelle la route add hueco.


  // Une fois que add hueco est ajouté, appel db 


componentDidMount () {
  console.log("businessID", this.props)
  const businessId=this.props.business._id
  // const myHuecoId=this.props.timeSlot._id
  
  businessService
  .getOneBusinessById(businessId)
  .then((business)=> {
      console.log("businesses",business)
    this.setState({ availability: business.availability})
    
  })
  .catch( (err) => console.log(err));
  

  // businessService
  // .deleteById(businessId,myHuecoId)
  // .then((business)=> {
  //     console.log("businesses",business)
  //   this.setState({ availability: business.availability})
    
  // })
  // .catch( (err) => console.log(err));

}

deleteHueco = (id,index) => {
  const businessId=this.props.business._id
  businessService
  .deleteHueco(businessId,id)
  .then((business)=> {
    console.log("businesses.availability",business.availability)
    const availabilityCopy = [...this.state.availability]
    availabilityCopy.splice(index,1)
  this.setState({ availability: availabilityCopy})
  
})
.catch( (err) => console.log(err));

}
 

  render() {
    console.log("availability", this.state.availability)
    const { availability} = this.state;
    return (
      <div className="huecos">
        <h1>My Huecos</h1>

          {availability.length>0?(
            <div>
            
            {availability.map
            
              ((eachSlots,index) => {
                console.log("availabilityyy",eachSlots)
                  return (<div>
                     <p>{eachSlots.timeSlot}</p>
                    
                     
                     <Button onClick={()=> this.deleteHueco(eachSlots._id,index)}>Delete</Button>
                     
                    
                   </div>
              )})} 
          <Button type="primary" icon={<PlusOutlined />}>
          <Link to={`/businesses/${this.props.business._id}/add-hueco`} className="link-hueco">
      Add a hueco
      </Link>
    </Button></div>):(
            <div className="add-hueco">
          <Empty/> 
          <Button type="primary" icon={<PlusOutlined />}>
          <Link to={`/businesses/${this.props.business._id}/add-hueco`} className="link-hueco">
      Add a hueco
      </Link>
    </Button>
    </div>)
    }


        {/* <form onSubmit={this.handleFormSubmit}>

          <label>Hueco 1:</label>
          <input type="text" name="hueco1" value={availability[0]} onChange={this.handleChange} />

          <label>Hueco 2:</label>
          <input type="text" name="hueco2" value={availability[1]} onChange={this.handleChange} />

          <label>Hueco 3:</label>
          <input type="text" name="hueco3" value={availability[2]} onChange={this.handleChange} />

          <label>Hueco 4:</label>
          <input type="text" name="hueco4" value={availability[3]} onChange={this.handleChange} />

          <label>Hueco 5:</label>
          <input type="text" name="hueco5" value={availability[4]} onChange={this.handleChange} />

          

          <input type="submit" value="myHuecos" />
        </form> */}

        
      </div>
    );
  }
}

export default withAuth(MyHueco);




