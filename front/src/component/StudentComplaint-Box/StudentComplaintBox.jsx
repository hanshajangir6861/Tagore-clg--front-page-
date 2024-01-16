import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col } from 'react-bootstrap'
import { useState ,useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import { context } from '../../App';
import axios from 'axios';
import '../StudentComplaint-Box/StudentComplaintBox.css'

function ComplaintBox() {
  const {serverLink} = useContext(context)
  const [Firstname, setFirstname] = useState('')
  const [Fathername, setFathername] = useState('')
  const [Email, setEmail] = useState('')
  const [Mobileno, setMobileno] = useState('')
  const [Complaint, setComplaint] = useState('')
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const SendComplain = async () => {
    let result = await axios.post(`${serverLink}/Complaint/Student`, {
      Firstname: Firstname,
      Fathersname: Fathername,
      Email: Email,
      MobileNo: Mobileno,
      Complaint: Complaint
    })
    result= result.data
    console.log(result);
  }

  

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
                value={Firstname}
                onChange={(e)=>setFirstname(e.target.value)}
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
                value={Fathername}
                onChange={(e)=>setFathername(e.target.value)}
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
                value={Email}
                onChange={(e)=>setEmail(e.target.value)}
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
                value={Mobileno}
                onChange={(e)=>setMobileno(e.target.value)}
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
                value={Complaint}
                onChange={(e)=>setComplaint(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          </Row>
          <Button type="submit" 
            onClick={(e) => {
              e.preventDefault();
              SendComplain()
            }
            }
          >Submit Complaint</Button>
        </Form>
     </div>
    </Container>
    
    </>
    
  )
}
export default ComplaintBox;
