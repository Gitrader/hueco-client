import React, { Component } from "react";
import { withAuth } from './../lib/Auth';

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.login(email, password);
    // this.props.login method is coming from the AuthProvider
    // injected by the withAuth() HOC
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 col-xl-6">
            <div className="row">
              <div className="col text-center">
                <h1>Login</h1>
                <p className="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
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
              <button className="btn btn-primary mt-4" type="submit" value="Login">Submit</button>
              </div>
              </div>
              </div>
   
    );
  }
}

export default withAuth(Login);




