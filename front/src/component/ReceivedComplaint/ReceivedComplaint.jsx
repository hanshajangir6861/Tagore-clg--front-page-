import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { context } from '../../App';
import axios from 'axios';
import '../ReceivedComplaint/ReceivedComplaint.css'

function ReceivedComplaint() {
  const { serverLink } = useContext(context)
  const [showComplain, setshowComplain] = useState([])

  useEffect(() => {
    ReceiveComplain()
  }, [])

  const ReceiveComplain = async () => {
    let result = await axios.get(`${serverLink}/Complaint/showComplain`)
    result = result.data
    console.log(result);
    setshowComplain(result)
  }




  return (
    <Container>
      {showComplain.map((Complain, index) => (
        <div key={index} className='ReciveComplain'>
          
            <p>Name : {Complain.Firstname}</p>
            <p>Fathers name : {Complain.Fathersname}</p>
            <p>Email : {Complain.Email}</p>
            <p>Mobile No : {Complain.MobileNo}</p>
            <p>Complain : {Complain.Complaint}</p>
         
        </div>
      ))}
    </Container>
  )
}

export default ReceivedComplaint