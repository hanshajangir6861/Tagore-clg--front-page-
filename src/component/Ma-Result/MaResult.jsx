import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col } from 'react-bootstrap'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './MaResult.css'

function MaResult() {
  return (
    <>
            <div className='ma-box'>
        <div className='ma'>
            <h1>MA</h1>
            <h1>(MASTER OF ARTS)</h1>
        </div>
        <div className='years'>
            <Container>
             <Row className='ma-boxes'>
                <Col className='ma-first-box' lg={3}>
                      <AutoStoriesIcon /> 
                     <h2> M.A-I Year</h2>
                </Col>
                <Col className='ma-first-box' lg={2}>
                     
                </Col>
                
                <Col className='ma-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> M.A-FINAL</h2>
                </Col>
               
                </Row> 
            </Container>
        </div>


      </div>
    </>
  
  )
}

export default MaResult