import { Button, Layout, Menu } from "antd";
import React from "react";
import '../styles/Navbar.css';
import {Link} from "react-router-dom";

const { Header } = Layout;

const menuItem = [
  {
    label: (
      <Link to={'/admin'}>
        <Button size="large" type='primary'>Adminga o'tish</Button>
      </Link>
    ),
    key: 'admin'
  }
]

const Navbar = () => (
  <Layout>
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={menuItem}
      />
    </Header>
  </Layout>
);

export default Navbar;
