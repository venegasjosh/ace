import React from "react";
import "./navbar.styles.scss";
import { Navbar, Form, Button, FormControl, Nav } from "react-bootstrap";

const NavBar = () => (
  <Navbar sticky="top" bg="light" class="navbar-expand" variant="light">
    <Nav className="mr-auto">
      <Nav.Link className="link" href="#home">Home</Nav.Link>
      <Nav.Link href="#aboutus">About Us</Nav.Link>
      <Nav.Link href="#programs">Courses</Nav.Link>
      <Nav.Link href="#contactus">Contact Us</Nav.Link>
    </Nav>
  </Navbar>
);

export default NavBar;
