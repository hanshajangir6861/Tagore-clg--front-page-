import React, { useEffect } from 'react';
import '../MediaGallery/Mediagallary.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import college1 from '../Image/college1.webp'
import college2 from '../Image/college2.webp'
import college4 from '../Image/college4.jpg'
import college5 from '../Image/college5.jpg'
import college6 from '../Image/college6.jpg'
import college7 from '../Image/college7.jpg'
import college8 from '../Image/college8.jpg'
import college9 from '../Image/college9.jpg'




import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function ResponsiveExample() {



  return (
    <>
    <div className="Mediaheading">
        <h1>Media/Gallery</h1>
        </div>
        <hr />
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className='imagebox'> 
        <Col xs={12} md={8}>
        <Card.Img variant="top" src={college2} />

        </Col>
        <Col xs={6} md={4}>
        <Card.Img variant="top" src={college5} />
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row className='imagebox'>
        <Col xs={6} md={4} >
        <Card.Img variant="top" src={college4} />
        </Col>
        <Col xs={6} md={4}>
           <Card.Img variant="top" src={college1} />
        </Col>
        <Col xs={6} md={4}>
        <Card.Img variant="top" src={college4} />
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className='imagebox'>
        <Col xs={4}> <Card.Img variant="top" src={college1} /></Col>
        <Col xs={6}> <Card.Img variant="top" src={college2} /></Col>
      </Row>
    </Container>

    <div className="btn">
      <button><a href="">Add More</a></button>
    </div>
    </>
  );
}

export default ResponsiveExample;









