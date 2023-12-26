import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Row , Col } from 'react-bootstrap'
import Logo from '../Image/logo.jpeg'
// import Tagore from '../Image/Staff.jpg'
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Link } from 'react-router-dom';
import React from 'react'
import '../AdminPage/AdminPage.css'

 function Admin() {
  return (
    <>
      <div className='second-navbar'>
<Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            
            <div className="name">
              <div className="hin">
                <h1>Hii!!!</h1>
              </div>
              <div className="eng">
                <h3>Name of Employee</h3>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
           <button className='logout'>  <Link to="/"  id="log" onClick={() => { localStorage.clear() }}>Logout</Link></button>
              
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
                <Nav.Link href="#home"><Link to='/AdminRecord'>Admin-Record</Link></Nav.Link>
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
export default Admin;