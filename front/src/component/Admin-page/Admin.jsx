import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Row , Col } from 'react-bootstrap'
import Logo from '../Image/logo.jpeg'
import Tagore from '../Image/tagore.jpg'
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import React from 'react'
import './admin.css'

 function Admin() {
  return (
    <>
    <div className="wapper">
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
      </div>

      {/* ...................second-navbar................................ */}
      <div className="wapper-sec">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#home">Admin-Record</Nav.Link>
                <Nav.Link href="#link">Complain-Corner</Nav.Link>
                <Nav.Link href="#link">Student-Record</Nav.Link>
                <Nav.Link href="#link">Notice</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='background'>

      </div>
    </>
    
  )
}
export default Admin;
