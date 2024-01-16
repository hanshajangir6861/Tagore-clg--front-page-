import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import '../StdResultPage/StdResultPage.css'

function StdResultPage() {
  return (
    <>
     <div className='result-box'>
        <h1>STUDENT'S RESULT</h1>
        
        <div className='select'>

            <Container>
                <Row className='drop'>
                    <Col className='drop-col' lg={2}>
                    </Col>
                    <Col className='drop-col' lg={4}>
                    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select-Class
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">BA</Dropdown.Item>
       
        <Dropdown.Item href="#/action-4">B.Sc</Dropdown.Item>
      
        <Dropdown.Item href="#/action-7">B.Com</Dropdown.Item>
      
        <Dropdown.Item href="#/action-10">BCA</Dropdown.Item>
      
        <Dropdown.Item href="#/action-13">BBA</Dropdown.Item>
     
        <Dropdown.Item href="#/action-16">MA</Dropdown.Item>
      
        <Dropdown.Item href="#/action-18">M.Sc</Dropdown.Item>
      
        <Dropdown.Item href="#/action-20">M.Com</Dropdown.Item>
     
       
      </Dropdown.Menu>
    </Dropdown>

                    </Col>
                    <Col className='drop-col' lg={4}>
                    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Exam-type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Semester-I</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Semester-II</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Semester-III</Dropdown.Item>

      
      </Dropdown.Menu>
    </Dropdown>


                    </Col>
                    <Col className='drop-col' lg={2}>
                    </Col>
                </Row>
            </Container>
      


   

            </div> 
     </div>
    </>
   
  )
}

export default StdResultPage