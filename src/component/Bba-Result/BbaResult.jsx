import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col } from 'react-bootstrap'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './BbaResult.css'

function BbaResult() {
  return (
    <>
      <div className='bba-box'>
        <div className='bba'>
            <h1>BBA</h1>
            <h1>(BACHELOR OF BUSINESS ADMINISTRATION )</h1>
        </div>
        <div className='years'>
            <Container>
             <Row className='bba-boxes'>
                <Col className='bba-first-box' lg={3}>
                      <AutoStoriesIcon /> 
                     <h2> BBA-I Year</h2>
                </Col>
                <Col className='bba-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> BBA-II Year</h2>
                </Col>
                <Col className='bba-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> BBA-III Year</h2>
                </Col>
                </Row> 
            </Container>
        </div>


      </div>
    </>
  
  )
}

export default BbaResult