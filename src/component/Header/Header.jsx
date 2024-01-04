

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../Header/header.css'

import Logo from '../Image/logo.jpeg'




import { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col } from 'react-bootstrap'
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import { Link } from 'react-router-dom';

function Header() {
  const [show, setShow] = useState(false);


  // change navbar on scroll//
  // const [isSticky , setIsSticky] =useState(false)



  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;

  //     // Adjust the value (e.g., 100) based on when you want the navbar to stick
  //     setIsSticky(offset > 60);
  //   };

  //   // Attach the event listener when the component mounts
  //   window.addEventListener('scroll', handleScroll);

  //   // Detach the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);






  return (
    <>
     
      <div className="mainnav">
        <div className="wapper sticky-navbar">
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
                  <span> <EmailIcon color='dark' /> <a href="">tagore@gmail.com</a> </span>
                  <span> <AddIcCallIcon /> <a href="">0988776665</a></span>
                  <button><Link to='/adminlog'>Login</Link></button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

      </div>

            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
             {/* <span> <EmailIcon color='dark'/><a href="mailto:tagorecollege@gmail.com">tagorecollege@gmail.com</a></span> */}
             <span><EmailIcon color='dark' /><a href="mailto:tagore@gmail.com">tagore@gmail.com</a></span>

                <span> <AddIcCallIcon/> <a href="">+91-1234567890</a></span>
                <button><Link to='/adminlog'>Login</Link></button>
              </Nav>
            </Navbar.Collapse>
          
       

      {/* ...............< Second-navbar >.................. */}


      <div className="wapper-sec ">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#link"><Link to='/home'>Home</Link></Nav.Link>
                <Nav.Link href="#link"><Link to='/about'>About</Link> </Nav.Link>
                <Nav.Link href="#link"><Link to='/contactus'>Contact</Link></Nav.Link>
                <Nav.Link href="#link"><Link to='/mediagallery'>Media</Link></Nav.Link>
                <Nav.Link href="#link"> <Link to='/stdlogin'> Student Login</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

    </>
  );
}

export default Header;




