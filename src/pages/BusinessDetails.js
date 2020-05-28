import React, { Component } from "react";
import { Link } from "react-router-dom";
import businessService from "./../lib/business-service";

import "./BusinessDetails.css";
import { Button } from "antd";

export default class BusinessDetails extends Component {
  state = {
    business: null,
  };

  componentDidMount() {
    const { businessId } = this.props.match.params;

    businessService
      .getOneBusinessById(businessId)
      .then((business) => {
        console.log("businesses", business);
        this.setState({ business });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate(nextState) {
    return nextState !== this.state;
  }

  render() {
    const { business } = this.state;

    return (
      <div>
        {business ? (
          <div>
            <h1 className="title-business">{business.business_name}</h1>

            <section className="details">
              <img src={business.image_url} alt="img-business" />

              <div className="details-business">
                <p>
                  <b>Address:</b> {business.address} {business.zip_code}{" "}
                  {business.city}
                </p>

                <p>
                  {" "}
                  <b>Phone number:</b> {business.phone_number}
                </p>

                <p>
                  <b>Service offered:</b> {business.service}
                </p>
                <p>
                  <b>Discount:</b>{" "}
                  <span className="bleu-btn">-{business.discount}%</span>
                </p>
                <div className="prices">
                  <p>
                    <b>Initial price:</b>{" "}
                    <span className="bleu-btn">
                      <strike>{business.initial_price}€</strike>
                    </span>
                  </p>

                  <p className="hueco-price">
                    <b>Hueco's price:</b>{" "}
                    <span className="bleu-btn">
                      {business.discounted_price}€
                    </span>
                  </p>
                </div>
                <p className="description-details">
                  <b> Description of the service:</b>
                  <br /> {business.description}
                </p>
                <div className="available-huecos">
                  <p>
                    <b>Select the Hueco you want to book:</b>
                  </p>
                  <ul>
                    {business.availability.map((hueco) => {
                      console.log("huecoisbooke", hueco.isBooked);
                      return hueco.isBooked === true ? null : (
                        <div className="hueco-link">
                          <Link
                            to={`/booking/${business._id}/${hueco._id}/contact-info`}
                          >
                            <Button>{hueco.timeSlot}</Button>
                          </Link>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        ) : null}
      </div>
    );
  }
}
