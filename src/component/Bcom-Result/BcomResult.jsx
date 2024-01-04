import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col } from 'react-bootstrap'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './BcomResult.css'

function BcomResult() {
  return (
    <>
            <div className='bcom-box'>
        <div className='bcom'>
            <h1>B.COM</h1>
            <h1>(BACHELOR OF COMMERCE)</h1>
        </div>
        <div className='years'>
            <Container>
             <Row className='bcom-boxes'>
                <Col className='bcom-first-box' lg={3}>
                      <AutoStoriesIcon /> 
                     <h2> B.Com-I Year</h2>
                </Col>
                <Col className='bcom-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> B.Com-II Year</h2>
                </Col>
                <Col className='bcom-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> B.Com-III Year</h2>
                </Col>
                </Row> 
            </Container>
        </div>


      </div>
    </>
  
  )
}

export default BcomResult