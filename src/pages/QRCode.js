import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./QRCode.css";
import "antd/dist/antd.css";
import { Button, Steps, Result } from "antd";

class QRCode extends Component {
  state = { business: [] };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      cardholder_name,
      card_number,
      expiration_date,
      cv_code,
    } = this.state;

    this.props.payment(cardholder_name, card_number, expiration_date, cv_code);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { Step } = Steps;

    return (
      <div className="thankyou-page">
        <div className="step">
          <Steps current={2}>
            <Step title="Contact Information" description="Done" />
            <Step title="Secure your hueco" subTitle="" description="Done" />
            <Step title="Booking Confirmed!" description="Hueco confirmation" />
          </Steps>
          <img
            className="QRcode-img"
            src="https://res.cloudinary.com/dksnrn8gi/image/upload/v1590510091/m3-project/qrcode_r6n6qv.png"
            alt="qrcode"
          />
        </div>
        <Result
          status="success"
          title="Congratulations! Your Hueco Has Been Successfully Booked "
          subTitle="Make sure you download your QR Code by clicking below on download!"
          extra={[
            <div className="buttons-qr">
              <a
                href="https://res.cloudinary.com/dksnrn8gi/image/upload/v1590510091/m3-project/qrcode_r6n6qv.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="primary" key="console" className="space-btn">
                  Download My QR Code!
                </Button>
              </a>
              <Link to={"/"}>
                <Button key="buy">See other Huecos available today!</Button>
              </Link>
            </div>,
          ]}
        />
      </div>
    );
  }
}

export default QRCode;
