import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../lib/Auth';
import "./QRCode.css"
import 'antd/dist/antd.css';
import {
    
    Button,
    Steps,
    Result
    
  } from 'antd';

  



class QRCode extends Component {
  state = { business:[]};

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
    const { business } = this.state;
    const { Step } = Steps;

    return (

        <div className="thankyou-page">
        <div className="step">
             <Steps current={2}>
    <Step title="Contact Information" description="Done" />
    <Step title="Secure your hueco" subTitle="" description="Done" />
    <Step title="Booking Confirmed!" description="Hueco confirmation" />
  </Steps>
  {/* <img src="https://res.cloudinary.com/dksnrn8gi/image/upload/v1590510091/m3-project/qrcode_r6n6qv.png" alt="qrcode"/> */}
  </div>
  <Result
    status="success"
    title="Congratulations! Your Hueco Has Been Successfully Booked " 
    subTitle="Make sure your download your QR Code by clicking below on download!"
    /////////////////////// CHECK DOWNLOAD FILE////////////////////////////////
    
    
    extra={[
      
      <a href="./../components/image/qrcode.png" target="_blank" download="QRcode"><Button type="primary" key="console">
        Download My QR Code!
      </Button></a>,
      <Link to={"/"}>
      <Button key="buy">See other Huecos available today!</Button>
      </Link>
       /////////////////////// CHECK DOWNLOAD FILE////////////////////////////////
    ]}
  />
   </div>
    );
  }
}

export default QRCode;


