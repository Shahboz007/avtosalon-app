import { Button, Layout, Menu } from "antd";
import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { Person } from "./Icons";

const { Header } = Layout;

const menuItem = [
  {
    label: (
      <Link to={"/admin"}>
        <Button size="large" type="primary">
          <Person style={{ marginRight: "10px" }} />
          Adminga o'tish
        </Button>
      </Link>
    ),
    key: "admin",
  },
];

const Navbar = () => (
  <Header className="container">
    <Menu mode="horizontal" defaultSelectedKeys={["2"]} items={menuItem} />
  </Header>
);

export default Navbar;
