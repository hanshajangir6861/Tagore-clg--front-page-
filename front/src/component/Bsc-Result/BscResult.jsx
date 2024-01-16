import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col } from 'react-bootstrap'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './BscResult.css'

function BscResult() {
  return (
    <>
        <div className='bsc-box'>
        <div className='bsc'>
            <h1>B.Sc</h1>
            <h1>(BACHELOR OF SCIENCE)</h1>
        </div>
        <div className='years'>
            <Container>
             <Row className='bsc-boxes'>
                <Col className='bsc-first-box' lg={3}>
                      <AutoStoriesIcon /> 
                     <h2> B.Sc-I Year</h2>
                </Col>
                <Col className='bsc-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> B.Sc-II Year</h2>
                </Col>
                <Col className='bsc-first-box' lg={3}>
                <AutoStoriesIcon /> 
                <h2> B.Sc-III Year</h2>
                </Col>
                </Row> 
            </Container>
        </div>


      </div>
    </>
 
  )
}

export default BscResult