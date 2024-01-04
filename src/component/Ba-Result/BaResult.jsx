import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col } from 'react-bootstrap'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './BaResult.css'

function BaResult() {
  return (
    <>
      <div className='ba-box'>
        <div className='ba'>
            <h1>BA</h1>
            <h1>(BACHELOR OF ART)</h1>
        </div>
        <div className='years'>
            <Container>
             <Row className='ba-boxes'>
                <Col className='ba-first-box' lg={3}>
                      <AutoStoriesIcon /> 
                     <h2> BA-I Year</h2>
                </Col>
                <Col className='ba-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> BA-II Year</h2>
                </Col>
                <Col className='ba-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> BA-III Year</h2>
                </Col>
                </Row> 
            </Container>
        </div>


      </div>
    </>
  
  )
}

export default BaResult