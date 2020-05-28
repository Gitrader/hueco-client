import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import "./MyHueco.css";
import { Empty, Button } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import businessService from "./../lib/business-service";

class MyHueco extends Component {
  state = {
    availability: [],
  };

  componentDidMount() {
    console.log("businessID", this.props);
    const businessId = this.props.business._id;

    businessService
      .getOneBusinessById(businessId)
      .then((business) => {
        console.log("businesses", business);
        this.setState({ availability: business.availability });
      })
      .catch((err) => console.log(err));
  }

  deleteHueco = (id, index) => {
    const businessId = this.props.business._id;
    businessService
      .deleteHueco(businessId, id)
      .then((business) => {
        console.log("businesses.availability", business.availability);
        const availabilityCopy = [...this.state.availability];
        availabilityCopy.splice(index, 1);
        this.setState({ availability: availabilityCopy });
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log("availability", this.state.availability);
    const { availability } = this.state;
    return (
      <div className="huecos">
        <h1>My Huecos for the day:</h1>

        {availability.length > 0 ? (
          <div>
            {availability.map((eachSlots, index) => {
              console.log("each", eachSlots.isBooked);

              if (eachSlots.isBooked === true) {
                return (
                  <div>
                    <Button type="primary" style={{ backgroundColor: "red" }}>
                      {" "}
                      {eachSlots.timeSlot}
                    </Button>
                    <Button
                      onClick={() => this.deleteHueco(eachSlots._id, index)}
                    >
                      <DeleteOutlined />
                    </Button>
                  </div>
                );
              } else {
                return (
                  <div>
                    <Button
                      type="primary"
                      style={{ backgroundColor: "limegreen" }}
                    >
                      {" "}
                      {eachSlots.timeSlot}
                    </Button>
                    <Button
                      onClick={() => this.deleteHueco(eachSlots._id, index)}
                    >
                      <DeleteOutlined />
                    </Button>
                  </div>
                );
              }
            })}
            <Button type="primary" icon={<PlusOutlined />}>
              <Link
                to={`/businesses/${this.props.business._id}/add-hueco`}
                className="link-hueco"
              >
                Add a hueco
              </Link>
            </Button>
          </div>
        ) : (
          <div className="add-hueco">
            <Empty />
            <Button type="primary" icon={<PlusOutlined />}>
              <Link
                to={`/businesses/${this.props.business._id}/add-hueco`}
                className="link-hueco"
              >
                Add a hueco
              </Link>
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(MyHueco);
