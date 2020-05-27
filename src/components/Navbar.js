import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../lib/Auth'
import 'antd/dist/antd.css';

import "./Navbar.css"
import { MailOutlined,  HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;



class Navbar extends Component {
  // state = {
  //   current: 'mail',
  // };

  // handleClick = e => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // };
  render() {
    // `user`, `logout`, `isLoggedIn` are coming from the AuthProvider 
    // and are injected by the withAuth HOC
    const { business, logout, isLoggedIn } = this.props;

    return (
      
<Layout className="Layout">


{/* //     <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
//       <div className="logo" >
//       <Link to={"/"}>
//             <img src="#" className="logo" alt="logo" />
//           </Link>
// </div> */}
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Link to={"/"}>
        <Menu.Item key="1">Home</Menu.Item>
        </Link> */}
        
        {
          isLoggedIn ? (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      {/* <div className="logo" />
      <Link to={"/"}>
            <img src="#" className="logo" alt="logo" />
          </Link> */}
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']}>
      <Menu.Item key="1" >
        <Link to={"/"}>
        Home
        </Link>
        </Menu.Item>
       
        <Menu.Item key="4">
        <Link to={"/private"}>
        My Huecos
        </Link>
        </Menu.Item>
        <Menu.Item key="5">You are logged in as {business.business_name}</Menu.Item>
        
         
        <Link onClick={logout} className="logout">
        Log out
        </Link>
        
        
        
      </Menu>
    </Header>
            
            // <div>
            // <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            // <Menu.Item key="1">{business.email}</Menu.Item>
            // <Link to={"/logout"}>
            // <Menu.Item key="5" >Logout</Menu.Item>
            // </Link>
            // </Menu>
            // </div>
          )
            : (
              <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      
     
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      
        <Menu.Item key="1" >
        <Link to={"/"}>
        Home
        </Link>
        </Menu.Item>
        <Menu.Item key="2">
        <Link to={"/login"}>
        Business Log in
        </Link>
        </Menu.Item>
        <Menu.Item key="3">
        <Link to={"/signup"}>
        Business Sign up
        </Link>
        </Menu.Item>
      </Menu>
    </Header>
              
              // <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              //   <Link to="/login">
              //     {' '}
              //     <Menu.Item key="3">Business Log In </Menu.Item>
              //   </Link>
              //   <br />
              //   <Link to="/signup">
              //     {' '}
              //     <Menu.Item key="4">Business Sign Up </Menu.Item>
              //   </Link>
              //   </Menu>
              
            )}
            
           </Layout>
           
      
    );
  }
}

export default withAuth(Navbar);


