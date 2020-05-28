import React, { Component } from "react";
import { Link } from "react-router-dom";
import businessService from "./../lib/business-service";
import "antd/dist/antd.css";

export default class BusinessListCard extends Component {
  state = {
    businesses: [],
    selectedBusiness: null,
  };

  componentDidMount() {
    businessService
      .getAllBusinesses()
      .then((businesses) => {
        console.log("business", businesses);
        this.setState({ businesses });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate(nextState) {
    return nextState !== this.state;
  }

  render() {
    console.log(
      "business list card seletected business",
      this.state.selectedBusiness
    );
    const { businesses } = this.state;

    return (
      <div>
        {businesses
          ? businesses.map((business) => {
              return (
                <section className="business-card">
                  <Link to={`/businesses/${business._id}`}>
                    <div className="card">
                  {!business.image_url?(<div>
<img src="https://res.cloudinary.com/dksnrn8gi/image/upload/v1590692029/m3-project/hueco_dumqcz.png" alt="Avatar"
                        style={{ width: 100 }}/>
                  </div>):(<>
                      <img
                        src={business.image_url}
                        alt="Avatar"
                        style={{ width: 100 }}
                      />
                      </>
                  )}
                      <div className="container">
                        <h4>
                          <b>{business.business_name}</b>
                        </h4>
                        <p>{business.service}</p>
                        <p>Discount: -{business.discount}%</p>
                      </div>
                    </div>
                  </Link>
                </section>
              );
            })
          : null}
      </div>
    );
  }
}
