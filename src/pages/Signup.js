import React, { Component } from "react";
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
   image_url:"",
   description:"",
  //  coordinates:""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {
      business_name, 
      email, 
      password,
      address,
      city,
      zip_code,
      service,
      phone_number,
      image_url,
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
      image_url,
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
      image_url,
      description
      } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>Business name:</label>
          <input type="text" name="business_name" value={business_name} onChange={this.handleChange} />

          <label>email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <label>Phone number:</label>
          <input type="text" name="phone_number" value={phone_number} onChange={this.handleChange} />

          <label>Address:</label>
          <input type="text" name="address" value={address} onChange={this.handleChange} />

          <label>city:</label>
          <input type="text" name="city" value={city} onChange={this.handleChange} />

          <label>zip code:</label>
          <input type="text" name="zip_code" value={zip_code} onChange={this.handleChange} />

          {/* !!!!!!!CLOUDINARY !!!!!!! */}

          <label>Picture of your business:</label>
          <input type="file" name="image_url" value={image_url} onChange={this.handleChange} />    

          <label>What kind of service are you offering?</label>
          <input type="text" name="service" value={service} onChange={this.handleChange} />

          <label>Description of your business:</label>
          <input type="text" name="description" value={description} onChange={this.handleChange} />



          

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
