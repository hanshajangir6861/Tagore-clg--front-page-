import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Footer/Footer.css'
import EmailIcon from '@mui/icons-material/Email';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Container, Row , Col } from 'react-bootstrap'

function Footer() {
  return (
    <div className="main-footer">
<Container>
      <Row className='rows'>
        

        <Col className='cols' lg={4}>
          <h2>Tagore P.G College</h2>

          <p>Tagore PG College Gudha Gorji, <br />Jhunjhunu is a very popular college  <br />in the state of Rajasthan.It is one of  the <br /> leading colleges  in Arts,Humanities and <br /> Social Scieces,etc.</p>
          

        </Col>
       
        <Col className='cols' lg={4}>
         <h2>Contact Us</h2>
         <p>Tagore PG College Gudha Gorji-333022,Jhunjhunu,Rajasthan</p>
         <p>+919460066518</p>
         <p>+917597607102</p>
         <p>tagore@gmail.com</p>
        

        </Col>
        <Col className='cols' lg={4}>
         <h2>Social media</h2>
         <p> <EmailIcon/>tagore@gmail.com</p>
         <p> <WhatsAppIcon/>Whatsapp</p>
         <p> <FacebookIcon/>Facebook</p>
         <p><InstagramIcon/>Instagram</p>
         <p> <YouTubeIcon/>Youtube</p>
        

        </Col>
        
      </Row>
      
    </Container>
</div>
  )
}

export default Footer