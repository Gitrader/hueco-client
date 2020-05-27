import React, { Component } from "react";
import { withAuth } from './../lib/Auth';
import { Link } from "react-router-dom";
import "./Payment.css"
import bookingService from "./../lib/booking-service"
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button,
    Steps
    
  } from 'antd';


class Payment extends Component {
  state = { 
    
    cardholder_name: "",
    card_number: "" , 
    expiration_date:"",  
    cv_code:""
  };

  componentDidMount () {
    console.log("businessID", this.props)
    // const businessId=this.props.business._id
    // const bookingId=this.props.booking._id
    // const myHuecoId=this.props.timeSlot._id
    
                       
  }


  handleFormSubmit = event => {
    event.preventDefault();
    const {cardholder_name, card_number, expiration_date, cv_code} = this.state;
const {bookingId}=this.props.match.params
    bookingService
    .bookingUserPaymentInfo({cardholder_name, card_number, expiration_date, cv_code},bookingId)
    .then((booking)=> {
        console.log("booking",booking)
      this.props.history.push(`/booking/${booking._id}`)
    })
    .catch( (err) => console.log(err));

    // this.props.payment(cardholder_name, card_number, expiration_date, cv_code);
    // this.props.login method is coming from the AuthProvider
    // injected by the withAuth() HOC
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { cardholder_name, card_number, expiration_date, cv_code } = this.state;
    const { Step } = Steps;

    return (

        <div className="payment-info">
        <div className="step">
             <Steps current={1}>
    <Step title="Contact Information" description="Done" />
    <Step title="Secure your hueco" subTitle="" description="Payment Information" />
    <Step title="Waiting" description="Hueco confirmation" />
  </Steps>
  <div className="notice">
    <p><b>THIS PAYMENT PROCESSOR IS USED FOR A DEMO, DO NOT ENTER ANY REAL CREDIT CARD DETAILS!</b></p>
  </div>
  </div>
        <form className="credit-card" onSubmit={this.handleFormSubmit}>
  <div className="form-header">
    <h4 className="title">Credit card details: </h4>
   
  </div>
 
  <div className="form-body">
  <img src="https://res.cloudinary.com/dksnrn8gi/image/upload/v1590607554/m3-project/credit-cards-icons-png_nbh1fv.png" alt="cc-logo" />
  <input type="text" name="cardholder_name" className="card-number" placeholder="Cardholder Name" value={cardholder_name} onChange={this.handleChange}/>
    <input type="text" name="card_number" className="card-number" placeholder="Card Number" value={card_number} onChange={this.handleChange}/>
 
   
    <div className="date-field">
      <div className="month">
      <input type="text" className="card-number" name="expiration_date" placeholder="MM/YY" value={expiration_date} onChange={this.handleChange}/>
       
      </div>
      <div className="year">
      <input type="text" className="card-number" placeholder="CVV" name="cv_code" value={cv_code} onChange={this.handleChange}/>
      
      </div>
    </div>
 

 
    {/* <Link to={`/booking/booking.${_id}`}> */}
    <button type="submit" className="proceed-btn" value="Submit">Proceed</button>
    {/* </Link> */}
  </div>
</form>
   </div>
    );
  }
}

export default Payment;



