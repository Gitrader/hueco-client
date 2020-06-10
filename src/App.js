import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';


import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import ContactInfo from './pages/ContactInfo'
import Payment from './pages/Payment'
import MyHueco from './pages/MyHueco'
import QRCode from "./pages/QRCode"
import AddHueco from "./pages/AddHueco"
import Splashscreen from "./pages/Splashscreen"
import AboutUs from  "./pages/AboutUs"
import BusinessDetails from  "./pages/BusinessDetails"





class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/home" component={Home} />
          <PublicRoute exact path="/" component={Splashscreen} />
          <PublicRoute exact path="/about-us" component={AboutUs} />

          <PublicRoute exact path="/signup" component={Signup} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/businesses/:businessId" component={BusinessDetails} />
          <PublicRoute exact path="/booking/:businessId/:timeslotId/contact-info" component={ContactInfo} />
          <PublicRoute exact path="/booking/:bookingId/payment-information" component={Payment} />
          <PublicRoute exact path="/booking/:bookingId" component={QRCode} />

          <PrivateRoute exact path="/private" component={MyHueco} />
          <PrivateRoute exact path="/businesses/:businessId/add-hueco" component={AddHueco} />
         
        </Switch>


        <div className="footer">
  <p>Hueco ©2020 Created by Maxime Lagrange</p>
</div>
    
      </div>
    );
  }
}

export default App;


