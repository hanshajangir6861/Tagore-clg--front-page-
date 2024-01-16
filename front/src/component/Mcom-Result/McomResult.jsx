import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col } from 'react-bootstrap'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './McomResult.css'

function McomResult() {
  return (
    <>
            <div className='mcom-box'>
        <div className='mcom'>
            <h1>M.COM</h1>
            <h1>(MASTER OF COMMERCE)</h1>
        </div>
        <div className='years'>
            <Container>
             <Row className='mcom-boxes'>
                <Col className='mcom-first-box' lg={3}>
                      <AutoStoriesIcon /> 
                     <h2> M.COM-I Year</h2>
                </Col>
                <Col className='mcom-first-box' lg={2}>
                     
                </Col>
                
                <Col className='mcom-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> M.COM-FINAL</h2>
                </Col>
               
                </Row> 
            </Container>
        </div>


      </div>
    </>
  
  )
}

export default McomResult