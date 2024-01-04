import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col } from 'react-bootstrap'
import '../StudentDetails/StudentDetails.css'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

export default function StudentDetails() {
  return (
    <>
        <div className='student-back'>
          <div className='student'>
            <h3>***Honest self-reflection opens your mind to reprogramming,change,success and freedom.***</h3>
            <h1>Student-Record</h1>
          </div>        
       
        <div className='lower-box'>
          <Container>
            <Row className="below">
              <Col className="lower" lg={2}>

              </Col>
              <Col className="lower" lg={3}>
                <HowToRegIcon/>
                <h2>Attendence</h2>
              </Col>
              <Col className="lower" lg={3}>
                <AssignmentIcon/>
                <h2><Link to='/stdResult'>Results</Link></h2>
              </Col>
              <Col className="lower" lg={2}>
              </Col>
            </Row>
          </Container>
        </div>
        </div>


    </>

  )
}