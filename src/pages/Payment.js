import React, { Component } from "react";
import { withAuth } from './../lib/Auth';
import "./Payment.css"
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button,
    Steps
    
  } from 'antd';


class Payment extends Component {
  state = { cardholder_name: "", card_number: "" , expiration_date:"",  cv_code:""};

  handleFormSubmit = event => {
    event.preventDefault();
    const {cardholder_name, card_number, expiration_date, cv_code} = this.state;

    this.props.payment(cardholder_name, card_number, expiration_date, cv_code);
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
  </div>
        <form className="credit-card" onSubmit={this.handleFormSubmit}>
  <div className="form-header">
    <h4 className="title">Credit card details</h4>
  </div>
 
  <div className="form-body">
    
  <input type="text" className="card-number" placeholder="Cardholder Name" value={cardholder_name} onChange={this.handleChange}/>
    <input type="text" className="card-number" placeholder="Card Number" value={card_number} onChange={this.handleChange}/>
 
   
    <div className="date-field">
      <div className="month">
      <input type="text" className="card-number" placeholder="MM/YY" value={expiration_date} onChange={this.handleChange}/>
        {/* <select name="Month">
        <option value="month" selected >Month</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select> */}
      </div>
      <div className="year">
      <input type="text" className="card-number" placeholder="CVV" value={cv_code} onChange={this.handleChange}/>
        {/* <select name="Year">
        <option value="year" selected >Year</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select> */}
      </div>
    </div>
 
{/*     
    <div className="year">
      <div className="cvv-input">
        <input type="text" placeholder="CVV"/>
      </div>
      <div className="cvv-details"> */}
        
      {/* </div> */}
    {/* </div> */}
 
    
    <button type="submit" className="proceed-btn">Proceed</button>
    
  </div>
</form>
   </div>
    );
  }
}

export default Payment;



