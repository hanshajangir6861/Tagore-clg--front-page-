import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Header/header.css'
import Bgfirst from '../Image/bg-3.jpg'
import Logo from '../Image/logo.jpeg'
import Bgsecond from '../Image/bg-1.jpg'
import Ncc from '../Image/ncc-img.jpg'
import Nss from '../Image/nss-img.jpg'
import Scout from '../Image/scout-img.jpg'

import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import {Container, Row , Col } from 'react-bootstrap'
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import { Link } from 'react-router-dom';

function Header() {
  const [show, setShow] = useState(false);

 

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
                <button><Link to='/adminlog'>Login</Link></button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


      {/* ...............< Second-navbar >.................. */}


      <div className="wapper-sec">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#home"><Link to='/home'>Home</Link></Nav.Link>
                <Nav.Link href="#link"><Link to='/about'>About</Link> </Nav.Link>
                <Nav.Link href="#link"><Link to='/contactus'>Contact</Link></Nav.Link>
                <Nav.Link href="#link"><Link to='/mediagallery'>Media</Link></Nav.Link>


                <NavDropdown title="Student panel" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">B.Sc</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">B.A</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">B.Com</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">BCA</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">BBA</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">M.Sc</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">M.A</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">M.Com</NavDropdown.Item>
                  <NavDropdown.Divider />

                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
