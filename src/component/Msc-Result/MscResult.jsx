import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col } from 'react-bootstrap'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './MscResult.css'

function MscResult() {
  return (
    <>
            <div className='msc-box'>
        <div className='msc'>
            <h1>M.SC</h1>
            <h1>(MASTER OF SCIENCE)</h1>
        </div>
        <div className='years'>
            <Container>
             <Row className='msc-boxes'>
                <Col className='msc-first-box' lg={3}>
                      <AutoStoriesIcon /> 
                     <h2> M.SC-I Year</h2>
                </Col>
                <Col className='msc-first-box' lg={2}>
                     
                </Col>
                
                <Col className='msc-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> M.SC-FINAL</h2>
                </Col>
               
                </Row> 
            </Container>
        </div>


      </div>
    </>
  
  )
}

export default MscResult