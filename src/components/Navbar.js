import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import "antd/dist/antd.css";

import "./Navbar.css";

import { Layout, Menu } from "antd";

const { Header } = Layout;

class Navbar extends Component {
  render() {
    // `business`, `logout`, `isLoggedIn` are coming from the AuthProvider
    // and are injected by the withAuth HOC
    const { business, logout, isLoggedIn } = this.props;

    return (
      <Layout className="Layout">
        {isLoggedIn ? (
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1">
                <Link to={"/"}>Home</Link>
              </Menu.Item>

              <Menu.Item key="4">
                <Link to={"/private"}>My Huecos</Link>
              </Menu.Item>
              <Menu.Item key="5">
                You are logged in as {business.business_name}
              </Menu.Item>

              <Link onClick={logout} className="logout">
                Log out
              </Link>
            </Menu>
          </Header>
        ) : (
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to={"/"}>Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={"/login"}>Business Log in</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to={"/signup"}>Business Sign up</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to={"/about-us"}>About us</Link>
              </Menu.Item>
            </Menu>
          </Header>
        )}
      </Layout>
    );
  }
}

export default withAuth(Navbar);
