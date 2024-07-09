import React from "react";
import "./Footer.css"
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-light py-4" >
      <Container className="footer-content">
        <Row>
          <Col md={6} className="contact-us text-md-left">
            <h5>Contact Us</h5>
            <p>Email: info@myapp.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <h5 className="contact-us">Follow Us</h5>
            <a href="https://www.facebook.com" className="text-dark mx-2">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.twitter.com" className="text-dark mx-2">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.instagram.com" className="text-dark mx-2">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com" className="text-dark mx-2">
              <FaLinkedin size={30} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
