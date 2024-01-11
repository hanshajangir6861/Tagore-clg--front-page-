import React, { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import '../AllStdRecord/AllStdRecord.css'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { context } from '../../App';




function AllStdRecord() {
    const{ serverLink} = useContext(context)
    const [AllStudents, setAllStudents] = useState([])
    const [SelectedClass, setSelectedClass] = useState()

    useEffect(() => {
        AllData()
    }, [])

    const AllData = async () => {
        try {
            let result = await axios.get(`${serverLink}/StdRecord/ShowStudentRecord/`)
            result = result.data
            // result = JSON.parse(result)
            // console.log(result);
            setAllStudents(result)
        } catch (error) {
            console.log(error);

        }
    }

    const handleChange = (e) => {
        setSelectedClass(e.target.value)
    };
    const filteredStudents =
        SelectedClass? AllStudents?.filter((student) => student.Course === SelectedClass ? student : null)
            : AllStudents;




    return (
        <>
            <div className="Alldetails">
                <Container>
                    <Row>
                        <Col className='cols' lg={2}></Col>
                        <Col className='cols' lg={8}>
                            <Form.Group md="4" >
                                <Form.Label>Select Class</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={handleChange}>
                                    <option >Course</option>
                                    <option value="B.A-1st">B.A-1st</option>
                                    <option value="B.A-2nd">B.A-2nd</option>
                                    <option value="B.A-3rd">B.A-3rd</option>

                                    <option value="B.SC-1st">B.SC-1st</option>
                                    <option value="B.SC-2nd">B.SC-2nd</option>
                                    <option value="B.SC-3rd">B.SC-3rd</option>

                                    <option value="BCA-1st">BCA-1st</option>
                                    <option value="BCA-2nd">BCA-2nd</option>
                                    <option value="BCA-3rd">BCA-3rd</option>

                                    <option value="BBA-1st">BBA-1st</option>
                                    <option value="BBA-2nd">BBA-2nd</option>
                                    <option value="BBA-3rd">BBA-3rd</option>

                                    <option value="M.Sc-1st">M.Sc-1st</option>
                                    <option value="M.Sc-2nd">M.Sc-2nd</option>
                                    <option value="M.Sc-3rd">M.Sc-3rd</option>

                                    <option value="M.A-1st">M.A-1st</option>
                                    <option value="M.A-2nd">M.A-2nd</option>
                                    <option value="M.A-3rd">M.A-3rd</option>

                                    <option value="M.Com-1st">M.Com-1st</option>
                                    <option value="M.Com-2nd">M.Com-2nd</option>
                                    <option value="M.Com-3rd">M.Com-3rd</option>


                                </Form.Select>

                                {SelectedClass ? (
                                    filteredStudents.length > 0 ? (
                                        <Table striped bordered hover className='StdClass'>
                                            <thead>
                                                <tr>
                                                    <th>S.no</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Phone no</th>
                                                    <th>Class</th>
                                                    <th>Details</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredStudents.map((student, index) => (
                                                    <tr key={student._id}>
                                                        <td>{index + 1}</td>
                                                        <td>{student.Firstname}</td>
                                                        <td>{student.Lastname}</td>
                                                        <td>{student.Phone}</td>
                                                        <td>{student.Course}</td>
                                                        <td className='MoreDetails'>
                                                            <Link to={`/ShowStdDetail/${student._id}`}>Show Details</Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    ) : (
                                        <p className='noData'>No students available for the selected class</p>
                                    )
                                ) : (
                                    <p className='noData'>Please select a class</p>
                                )}

                            </Form.Group>
                        </Col>
                        <Col className='cols' lg={2}></Col>

                    </Row>
                </Container>
            </div>

        </>
    )
}

export default AllStdRecord






