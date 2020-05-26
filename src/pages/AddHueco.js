
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../lib/Auth';
import "./MyHueco.css"
import { Empty,Button,TimePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import moment from 'moment';
import './AddHueco.css'
import businessService from './../lib/business-service'

class AddHueco extends Component {
  state = { 
  
   availability:[], 
   selectedSlot:"",
   isEmpty:false,
  //  choosenDate:null,
  //  choosenTime:null
  
  
  };

  // onChange(time, timeString) {
  //   console.log("tim",time, "timestring",timeString);
  //   this.setState({choosenDate:time._d, choosenTime:timeString})
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("state",this.state)
    const {
     selectedSlot
      } = this.state;

      console.log("this.props.match.params.businessId",this.props.match.params.businessId)
      businessService
      
      .addAHueco(this.props.match.params.businessId,selectedSlot) 
      
      // ,{choosenDate}
      .then( () => this.props.history.push("/private")) //////// INSERER DANS BUSINESS DETAILS ///////
      .catch( (err) => console.log(err));
    
      
  };

  handleChange = event => {
    console.log("eventtarget",event.target)
    const { name, value } = event.target;
    
    this.setState({ [name]: value });
  };

  render() {
   console.log("state",this.state)
    return (
      <div className="add-huecos">
        <h1>Add Huecos</h1>
        <p>Select your empty timeslots for today and press add to display them to your futur customers. You can display maximum 5 huecos per day.</p>

        
        <form onSubmit={this.handleFormSubmit}>
        <div className="hueco-container">
        <label for="">Select your empty slots:</label>
<select id="" name="selectedSlot" form="" onChange={this.handleChange} >
<option value="" selected>Select</option>
<option value="00h - 01h">00h - 01h</option>
<option value="01h - 02h">01h - 02h</option>
  <option value="02h - 03h">02h - 03h</option>
  <option value="03h - 04h">03h - 04h</option>
  <option value="04h - 05h">04h - 05h</option>
  <option value="05h - 06h">05h - 06h</option>
  <option value="06h - 07h">06h - 07h</option>
  <option value="07h - 08h">07h - 08h</option>
  <option value="08h - 09h">08h - 09h</option>
  <option value="9h - 10h">9h - 10h</option>
  <option value="10h - 11h">10h - 11h</option>
  <option value="11h - 12h">11h - 12h</option>
  <option value="12h - 13h">12h - 13h</option>
  <option value="13h - 14h">13h - 14h</option>
  <option value="14h - 15h">14h - 15h</option>
  <option value="15h - 16h">15h - 16h</option>
  <option value="16h - 17h">16h - 17h</option>
  <option value="17h - 18h">17h - 18h</option>
  <option value="18h - 19h">18h - 19h</option>
  <option value="19h - 20h">19h - 20h</option>
  <option value="21h - 22h">21h - 22h</option>
  <option value="22h - 23h">22h - 23h</option>
  <option value="23h - 00h">23h - 00h</option>

</select>
</div>


<div className="hueco-container">
        <label for="">Select your empty slots:</label>
<select id="" name="selectedSlot" form="" onChange={this.handleChange} >
<option value="" selected>Select</option>
<option value="00h - 01h">00h - 01h</option>
<option value="01h - 02h">01h - 02h</option>
  <option value="02h - 03h">02h - 03h</option>
  <option value="03h - 04h">03h - 04h</option>
  <option value="04h - 05h">04h - 05h</option>
  <option value="05h - 06h">05h - 06h</option>
  <option value="06h - 07h">06h - 07h</option>
  <option value="07h - 08h">07h - 08h</option>
  <option value="08h - 09h">08h - 09h</option>
  <option value="9h - 10h">9h - 10h</option>
  <option value="10h - 11h">10h - 11h</option>
  <option value="11h - 12h">11h - 12h</option>
  <option value="12h - 13h">12h - 13h</option>
  <option value="13h - 14h">13h - 14h</option>
  <option value="14h - 15h">14h - 15h</option>
  <option value="15h - 16h">15h - 16h</option>
  <option value="16h - 17h">16h - 17h</option>
  <option value="17h - 18h">17h - 18h</option>
  <option value="18h - 19h">18h - 19h</option>
  <option value="19h - 20h">19h - 20h</option>
  <option value="21h - 22h">21h - 22h</option>
  <option value="22h - 23h">22h - 23h</option>
  <option value="23h - 00h">23h - 00h</option>

</select>
</div>

<div className="hueco-container">
        <label for="">Select your empty slots:</label>
<select id="" name="selectedSlot" form="" onChange={this.handleChange} >
<option value="" selected>Select</option>
<option value="00h - 01h">00h - 01h</option>
<option value="01h - 02h">01h - 02h</option>
  <option value="02h - 03h">02h - 03h</option>
  <option value="03h - 04h">03h - 04h</option>
  <option value="04h - 05h">04h - 05h</option>
  <option value="05h - 06h">05h - 06h</option>
  <option value="06h - 07h">06h - 07h</option>
  <option value="07h - 08h">07h - 08h</option>
  <option value="08h - 09h">08h - 09h</option>
  <option value="9h - 10h">9h - 10h</option>
  <option value="10h - 11h">10h - 11h</option>
  <option value="11h - 12h">11h - 12h</option>
  <option value="12h - 13h">12h - 13h</option>
  <option value="13h - 14h">13h - 14h</option>
  <option value="14h - 15h">14h - 15h</option>
  <option value="15h - 16h">15h - 16h</option>
  <option value="16h - 17h">16h - 17h</option>
  <option value="17h - 18h">17h - 18h</option>
  <option value="18h - 19h">18h - 19h</option>
  <option value="19h - 20h">19h - 20h</option>
  <option value="21h - 22h">21h - 22h</option>
  <option value="22h - 23h">22h - 23h</option>
  <option value="23h - 00h">23h - 00h</option>

</select>
</div>

<div className="hueco-container">
        <label for="">Select your empty slots:</label>
<select id="" name="selectedSlot" form="" onChange={this.handleChange} >
<option value="" selected>Select</option>
<option value="00h - 01h">00h - 01h</option>
<option value="01h - 02h">01h - 02h</option>
  <option value="02h - 03h">02h - 03h</option>
  <option value="03h - 04h">03h - 04h</option>
  <option value="04h - 05h">04h - 05h</option>
  <option value="05h - 06h">05h - 06h</option>
  <option value="06h - 07h">06h - 07h</option>
  <option value="07h - 08h">07h - 08h</option>
  <option value="08h - 09h">08h - 09h</option>
  <option value="9h - 10h">9h - 10h</option>
  <option value="10h - 11h">10h - 11h</option>
  <option value="11h - 12h">11h - 12h</option>
  <option value="12h - 13h">12h - 13h</option>
  <option value="13h - 14h">13h - 14h</option>
  <option value="14h - 15h">14h - 15h</option>
  <option value="15h - 16h">15h - 16h</option>
  <option value="16h - 17h">16h - 17h</option>
  <option value="17h - 18h">17h - 18h</option>
  <option value="18h - 19h">18h - 19h</option>
  <option value="19h - 20h">19h - 20h</option>
  <option value="21h - 22h">21h - 22h</option>
  <option value="22h - 23h">22h - 23h</option>
  <option value="23h - 00h">23h - 00h</option>

</select>
</div>

<div className="hueco-container">
        <label for="">Select your empty slots:</label>
<select id="" name="selectedSlot" form="" onChange={this.handleChange} >
<option value="" selected>Select</option>
<option value="00h - 01h">00h - 01h</option>
<option value="01h - 02h">01h - 02h</option>
  <option value="02h - 03h">02h - 03h</option>
  <option value="03h - 04h">03h - 04h</option>
  <option value="04h - 05h">04h - 05h</option>
  <option value="05h - 06h">05h - 06h</option>
  <option value="06h - 07h">06h - 07h</option>
  <option value="07h - 08h">07h - 08h</option>
  <option value="08h - 09h">08h - 09h</option>
  <option value="9h - 10h">9h - 10h</option>
  <option value="10h - 11h">10h - 11h</option>
  <option value="11h - 12h">11h - 12h</option>
  <option value="12h - 13h">12h - 13h</option>
  <option value="13h - 14h">13h - 14h</option>
  <option value="14h - 15h">14h - 15h</option>
  <option value="15h - 16h">15h - 16h</option>
  <option value="16h - 17h">16h - 17h</option>
  <option value="17h - 18h">17h - 18h</option>
  <option value="18h - 19h">18h - 19h</option>
  <option value="19h - 20h">19h - 20h</option>
  <option value="21h - 22h">21h - 22h</option>
  <option value="22h - 23h">22h - 23h</option>
  <option value="23h - 00h">23h - 00h</option>

</select>
</div>



          <div className="hueco-container">
          <button  type="submit" icon={<PlusOutlined />}>
          {/* <Link to={"/private"} className="link-hueco"> */}
    Add my huecos now!
      {/* </Link> */}
    </button>
    
    </div>
    </form>
      </div>

    )};
  }


export default withAuth(AddHueco);



