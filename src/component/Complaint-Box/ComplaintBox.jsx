import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {Container, Row , Col } from 'react-bootstrap'
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import './Complaintbox.css'

function ComplaintBox() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };




  return (
    <>
    <Container>
    <div className='complaint-box'>
        <h2>REGISTER A COMPLAINT</h2>
    </div>
    <div className='form-box'>
<Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="8" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="8" controlId="validationCustom02">
            <Form.Label>Father's name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your Father's name"
                
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="8" controlId="validationCustom03">
            <Form.Label>E-mail</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your E-mail"
                
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="8" controlId="validationCustom04">
            <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter your Mobile No."
                
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="8" controlId="validationCustom05">
            <Form.Label>Complaint</Form.Label>
              <Form.Control
                required
                type="textarea"
                placeholder="Type Here....."
                
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          </Row>
          <Button type="submit">Submit Complaint</Button>
        </Form>
     </div>
    </Container>
    
    </>
    
  )
}
export default ComplaintBox;
