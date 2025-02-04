import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container fluid className="hero-section d-flex justify-content-center align-items-center text-center">
      <Row>
        <Col>
          <img src="./vite.svg" alt="Hero Image" className="hero-image mb-3" />
          <h1 className="text-white">Hi, I'm Ayush</h1>
          <p className="text-light">A React Developer passionate about building amazing web experiences.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
