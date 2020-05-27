import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Private from './pages/Private';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import ContactInfo from './pages/ContactInfo'
import Payment from './pages/Payment'
import MyHueco from './pages/MyHueco'
import QRCode from "./pages/QRCode"
import AddHueco from "./pages/AddHueco"
import EditHueco from "./pages/EditHueco"
import BusinessDetails from  "./pages/BusinessDetails"





class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute exact path="/signup" component={Signup} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/businesses/:businessId" component={BusinessDetails} />
          <PublicRoute exact path="/booking/:businessId/:timeslotId/contact-info" component={ContactInfo} />
          <PublicRoute exact path="/booking/:bookingId/payment-information" component={Payment} />
          <PublicRoute exact path="/booking/:bookingId" component={QRCode} />

          <PrivateRoute exact path="/private" component={MyHueco} />
          <PrivateRoute exact path="/businesses/:businessId/add-hueco" component={AddHueco} />
          <PrivateRoute exact path="/businesses/:businessId/edit-hueco" component={EditHueco} />
        </Switch>

        <div className="footer">
  <p>Footer</p>
</div>
       
      </div>
    );
  }
}

export default App;


