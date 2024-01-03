import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import '../ContactUs/ContactUs.css'


const ContactUs = () => {
  return (
    <div className='contactback'>
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <Card className="bg-dark text-white">
              <Card.Body>
                <h1>Contact Us</h1> <hr />
                <h2>Tagore P.G College, Gudha Gorji (JJN...)</h2>
               <div className='Contactbox'>
               <ul>
                <li>Website: (tagorecollege.com)</li>

                <li>E-mail: (Your Exam Cell Contact Information)</li>
                  
                  <li>Exam E-mail: (Your Exam Cell Contact Information)</li>

                  <li>Exam Call: (Your Registrar Office Contact Information)</li>

                  <li>Registrar: (Your Research Section Contact Information)</li>

                  <li>General Administration: (Your Affiliation Office Contact Information)</li>

                  <li>Research section: (Your Affiliation Office Contact Information)</li>

                  <li>Affiliation Office: (Your Affiliation Office Contact Information)</li>
                </ul>

               </div>
               
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
