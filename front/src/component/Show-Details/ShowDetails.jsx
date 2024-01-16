import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import {Container, Row , Col } from 'react-bootstrap'
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Ankita from '../Image/Ankita.jpg'
import './ShowDetails.css'


function ShowDetails() {
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
      <div className='student-record'>
        <Container>

        <div className='std-rcd'>
        <h1>STUDENT-RECORD</h1>
       </div>

      <div className='img-box'>
          <img src={Ankita} alt="" />
      </div>

           
       <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Row className="mb-3">


        <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Ankita"
          />
     
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Priya"
          />
     
        </Form.Group>


      
      </Row>


      <Row className="mb-3">


      <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>Father's name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Bhagirath Mal Saini"
          />
    
      
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Label>Mother's name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Sushila Devi"
          />
     
        </Form.Group>



      


      </Row>


      
      <Row className="mb-3">


        <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Ankita"
          />
     
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Priya"
          />
     
        </Form.Group>


      
      </Row>
    
    </Form>



        </Container>
      




      </div>
    </>
  
  )
}

export default ShowDetails