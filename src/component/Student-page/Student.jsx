import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Row , Col } from 'react-bootstrap'
import Logo from '../Image/logo.jpeg'

import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import './student.css'


function Student() {
  return (
   <>
    {/* <div className="wapper">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
            <div className="name">
              <div className="hin">
                <h3>टैगोर पी.जी महाविद्यालय,गुढ़ा गोरजी</h3>
              </div>
              <div className="eng">
                <h3>Tagore P.G College,Gudha Gorji</h3>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
             <span> <EmailIcon color='dark'/> <a href="">tagore@gmail.com</a> </span>
                <span> <AddIcCallIcon/> <a href="">0988776665</a></span>
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div> */}
         

    {/* ......................navbar............................................ */}



{/* <div className='second-navbar'>
      <div className='name'>
      <h1>Hii!!!!!</h1>
       <h3>Name of Student</h3>
      </div>
      <div className='logout'>
        <button> Log-out</button>
      </div>
      
    </div> */}

<div className='second-navbar'>
<Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            
            <div className="name">
              <div className="hin">
                <h1>Hii!!!</h1>
              </div>
              <div className="eng">
                <h3>Name of student</h3>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
           <button className='logout'>Log-Out</button>
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
</div>

{/* <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            
            <div className="name">
              <div className="hin">
                <h1>Hii!!!</h1>
              </div>
              <div className="eng">
                <h3>Name of student</h3>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
           <button className='logout'>Log-Out</button>
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
   


      {/* ...................second-navbar................................ */}
      <div className="wapper-sec">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
              <Nav.Link href="#home">personal-info</Nav.Link>
                <Nav.Link href="#home">Attendence</Nav.Link>
                <Nav.Link href="#link">Marks</Nav.Link>
                <Nav.Link href="#link">Complain-box</Nav.Link>
                <Nav.Link href="#link">Notice</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='background-img'>

      </div>
   </>
  )
} 

export default Student