import React, { useEffect, useState, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ShowStudentDetails/ShowStudentDetails.css'
import axios from 'axios';
import { context } from '../../App';



function ShowStudentDetails() {
    const { serverLink } = useContext(context)
    // const { studentId } = useParams()
    const studentId = location.pathname.split("/")[2]
    // console.log(studentId,"-------------------------------------");
    const [ShowStudentDetail, setShowStudentDetail] = useState('')


    useEffect(() => {
        ShowData()
    }, [])

    const ShowData = async () => {
        let result = await axios.get(`${serverLink}/StdRecord/ShowStudentRecord/${studentId}`)
        result = result.data
        // console.log(result);
        setShowStudentDetail(result)
    }


    return (
        <>
            <Container>

                <Form >
                    <Row className="mb-3">

                        <Form.Group as={Col} md="4" className='images' >
                            <Form.Label className='stdshow'>Photo</Form.Label>
                            {ShowStudentDetail.Photo && ShowStudentDetail.Photo ? (
                                <img src={`http://localhost:8000/uploads/${ShowStudentDetail.Photo[0].filename}`} alt="Student Photo" />
                            ) : (
                                <span>No photo available</span>
                            )}
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='stdshow'>First name :</Form.Label>
                            <Form.Control

                                value={ShowStudentDetail.Firstname} />

                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Last name :</Form.Label>
                            <Form.Control

                                value={ShowStudentDetail.Lastname} />
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Father's name :</Form.Label>
                            <Form.Control

                                value={ShowStudentDetail.Fathername} />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Mother's name :</Form.Label>
                            <Form.Control

                                value={ShowStudentDetail.Mothername} />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Phone No.</Form.Label>
                            <Form.Control

                                value={ShowStudentDetail.Phone} />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Parents No.</Form.Label>
                            <Form.Control
                                value={ShowStudentDetail.ParentNo} />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>D.O.B :</Form.Label>
                            <Form.Control
                                value={ShowStudentDetail.Dob} />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label className='stdshow'>Course</Form.Label>

                            <Form.Control value={ShowStudentDetail.Course} />
                        </Form.Group>


                        <Form.Group as={Col} md="4">
                            <Form.Label className='stdshow'>Gender</Form.Label>
                            <Form.Control value={ShowStudentDetail.Gender} />


                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Local address.</Form.Label>
                            <Form.Control

                                value={ShowStudentDetail.LocalAddress} />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Permanent address.</Form.Label>
                            <Form.Control

                                value={ShowStudentDetail.PermanentAddress} />
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Email</Form.Label>
                            <Form.Control

                                value={ShowStudentDetail.Email} />
                        </Form.Group>



                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='stdshow'>Registration Date :</Form.Label>
                            <Form.Control

                                value={ShowStudentDetail.RegistrationDate} />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label className='stdshow'>City</Form.Label>
                            <Form.Control
                                value={ShowStudentDetail.City} />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label className='stdshow'>State</Form.Label>
                            <Form.Control
                                value={ShowStudentDetail.State} />
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">



                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label className='stdshow'>Pin-Code</Form.Label>
                            <Form.Control
                                value={ShowStudentDetail.PinCode} />

                        </Form.Group>
                    </Row>
                </Form>


            </Container>

        </>
    )
}

export default ShowStudentDetails