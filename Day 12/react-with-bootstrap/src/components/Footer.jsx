import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
      <Container>
        <Row className="text-center">
          <Col>
            <p className="mb-0">© {new Date().getFullYear()} Ayush. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
