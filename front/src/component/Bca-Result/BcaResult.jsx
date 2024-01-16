import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col } from 'react-bootstrap'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './BcaResult.css'

function BcaResult() {
  return (
    <>
            <div className='bca-box'>
        <div className='bca'>
            <h1>B.C.A</h1>
            <h1>(BACHELOR OF COMPUTER APPLICATION)</h1>
        </div>
        <div className='years'>
            <Container>
             <Row className='bca-boxes'>
                <Col className='bca-first-box' lg={3}>
                      <AutoStoriesIcon /> 
                     <h2> B.C.A-I Year</h2>
                </Col>
                <Col className='bca-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> B.C.A-II Year</h2>
                </Col>
                <Col className='bca-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> B.C.A-III Year</h2>
                </Col>
                </Row> 
            </Container>
        </div>


      </div>
    </>
  
  )
}

export default BcaResult