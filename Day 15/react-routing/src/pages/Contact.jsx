import React from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <Container className="mt-5 bg-light p-5">
        <Row className="justify-content-center">
            <Col md={6}>
                <h1>Contact us</h1>
                <Form action="">
                    <Form.Group className="mb-3">
                        <label>Name</label>
                        <Form.Control type="text" placeholder='Enter your name'/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <label>Email</label>
                        <Form.Control type="email" placeholder='Enter your email'/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <label>Message</label>
                        <Form.Control as="textarea" rows={3} placeholder='Enter your message'/>
                    </Form.Group>
                    <Button variant="info" type="submit">Send</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Contact
