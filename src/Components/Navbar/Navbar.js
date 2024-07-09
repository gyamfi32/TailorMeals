import React from "react";
import "./Navbar.css";
import logo from "../../Assets/Logo (1).png";
import { Navbar, Nav, Container } from "react-bootstrap";

function MyNavbar  ()  {
  // const handleLinkClick = (url) => {
  //   window.open(url, "_blank");
  // };

  return (
    <Navbar
      className="navbar"
      expand="lg"
      bg="body-tertiary"
      variant="dark"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Tailor Meals"
            width="30"
            height="24"
            className="d-inline-block align-top"
          />{" "}
          <h5 className="brand-name">Tailor Meals</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            <Nav.Link href="/"className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link href="/MealPlanning" className="nav-item">
              Meal Planning
            </Nav.Link>
            <Nav.Link href="/NutritionalInfo" className="nav-item">
              Nutritional Info
            </Nav.Link>
            <Nav.Link href="/RecipeSearch" className="nav-item">
              Recipe Search
            </Nav.Link>
            <Nav.Link href="UserProfile" className="nav-item">
              User Profile
            </Nav.Link>
            <Nav.Link href="/LoginRegister"  className="nav-item">
              Login / Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
};

export default MyNavbar;
