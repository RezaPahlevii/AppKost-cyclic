import React from "react";
import {
  Container,
  Navbar,
  Form,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="mb-5 ">
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <NavLink
            style={{ textDecoration: "none", color: "Black" }}
            to={"/homepage"}
          >
            AppKost
          </NavLink>
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <Navbar.Text></Navbar.Text>
          <NavLink
            style={{ textDecoration: "none", paddingRight: 15, color: "Black" }}
            to={"/pusat-bantuan"}
          >
            Pusat Bantuan
          </NavLink>
          <Form className="d-flex">
            <Button variant="outline-success">Logout</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;
