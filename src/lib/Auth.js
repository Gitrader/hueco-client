import React from 'react';
import axios from 'axios';

const { Consumer, Provider } = React.createContext();



// HOC
function withAuth(WrappedComponent) {

  return function (props) {
    return (
      <Consumer>
        {(valueFromProvider) => (
          <WrappedComponent
            {...props}
            business={valueFromProvider.business}
            isLoggedIn={valueFromProvider.isLoggedIn}
            isLoading={valueFromProvider.isLoading}
            login={valueFromProvider.login}
            signup={valueFromProvider.signup}
            logout={valueFromProvider.logout}
          />
        )}
      </Consumer>
    )
  }
}

class AuthProvider extends React.Component {
  state = {
    business: null,
    isLoggedIn: false,
    isLoading: true
  }

  componentDidMount() {
    // When app and AuthProvider load for the first time
    // make a call to the server '/me' and check if user is authenitcated
    axios.get('http://localhost:5000/auth/me', { withCredentials: true })
      .then((response) => {
        const business = response.data;
        this.setState({ isLoggedIn: true, isLoading: false, business });
      })
      .catch((err) => this.setState({ isLoggedIn: false, isLoading: false, business: null }));
  }

  login = (email, password) => {
    axios.post('http://localhost:5000/auth/login', { email, password }, { withCredentials: true })
      .then((response) => {
        const business = response.data;
        this.setState({ isLoggedIn: true, isLoading: false, business });
      })
      .catch((err) => console.log(err));
  }
  signup = (
    business_name, 
    email, 
    password,
    address,
    city,
    zip_code,
    service,
    phone_number,
    image_url,
    description,
    coordinates
    ) => {
    axios.post('http://localhost:5000/auth/signup', 
    { 
      business_name, 
      email, 
      password,
      address,
      city,
      zip_code,
      service,
      phone_number,
      image_url,
      description,
      coordinates
    }, 
    { withCredentials: true })
      .then((response) => {
        const business = response.data;
        this.setState({ isLoggedIn: true, isLoading: false, business });
      })
      .catch((err) => console.log(err));
  }
  logout = () => {
    axios.get('http://localhost:5000/auth/logout', { withCredentials: true })
      .then((response) => {
        this.setState({ isLoggedIn: false, isLoading: false, business: null });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { business, isLoggedIn, isLoading } = this.state;
    const { login, signup, logout } = this;

    return (
      <Provider value={{ business, isLoggedIn, isLoading, login, signup, logout }}>
        {this.props.children}
      </Provider>
    )
  }
}

export { withAuth, AuthProvider }