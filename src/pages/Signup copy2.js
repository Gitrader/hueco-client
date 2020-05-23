import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../lib/Auth';


class Signup extends Component {
  state = { 
  
   business_name:"", 
   email:"", 
   password:"",
   address:"",
   city:"",
   zip_code:"",
   service:"",
   phone_number:"",
  //  image_url:"",
   description:"",
  //  coordinates:""
  };

  

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("state",this.state)
    const {
      business_name, 
      email, 
      password,
      address,
      city,
      zip_code,
      service,
      phone_number,
      // image_url,
      description
      } = this.state;

    this.props.signup(
      business_name, 
      email, 
      password,
      address,
      city,
      zip_code,
      service,
      phone_number,
      // image_url,
      description
      );
    // this.props.signup method is coming from the AuthProvider
    // injected by the withAuth() HOC
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { business_name, 
      email, 
      password,
      address,
      city,
      zip_code,
      service,
      phone_number,
      // image_url,
      description
      } = this.state;
    return (
      <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 col-xl-6">
            <div className="row">
              <div className="col text-center">
                <h1>Register</h1>
                <p className="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col mt-4">
              <input type="text" name="business_name"  className="form-control"  placeholder="Company Name" value={business_name} onChange={this.handleChange} />
        
              </div>
            </div>
            <div className="row align-items-center mt-4">
              <div className="col">
                
                <input type="email" className="form-control" name="email"  placeholder="Email" value={email} onChange={this.handleChange} />
              </div>
            </div>
            <div className="row align-items-center mt-4">
              <div className="col">
                
                <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
              </div>
              </div>
              
              <div className="row align-items-center mt-4">
              <div className="col">
              <input type="text" name="address"  className="form-control"  placeholder="Address" value={address} onChange={this.handleChange} />
        
              </div>
              </div>
  
              <div className="row align-items-center mt-4">
              <div className="col">
              <input type="text" name="zip_code"  className="form-control"  placeholder="Zip Code" value={zip_code} onChange={this.handleChange} />
              </div>
              </div>
  
              <div className="row align-items-center mt-4">
              <div className="col">
              <input type="text" name="city"  className="form-control"  placeholder="City" value={city} onChange={this.handleChange} />
              </div>
              </div>
  
              <div className="row align-items-center mt-4">
              <div className="col">
              <input type="text" name="phone_number"  className="form-control"  placeholder="Phone Number" value={phone_number} onChange={this.handleChange} />
              </div>
              </div>
  
              <div className="row align-items-center mt-4">
              <div className="col">
              <input type="text" name="service"  className="form-control"  placeholder="What kind of service are you offering?" value={service} onChange={this.handleChange} />
              </div>
              </div>
  
              <div className="row align-items-center mt-4">
              <div className="col">
              <input type="textarea" name="description"  className="form-control"  placeholder="Description of your business:" value={description} onChange={this.handleChange} />
              
              </div>
  
              
  
            </div>
            <div className="row justify-content-start mt-4">
              <div className="col">
                <div className="form-check">
                  <label className="form-check-label"/>
                    <input type="checkbox" className="form-check-input" />
                    I Read and Accept <a href="#"> Terms and Conditions</a>
                  </div>
                </div>
  
                <button className="btn btn-primary mt-4" type="submit" value="Signup">Submit</button>
              </div>
            </div>
          </div>
        </div>
      
    

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
        </section>
    );
  }
}

export default withAuth(Signup);





