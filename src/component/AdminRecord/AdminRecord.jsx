import React from 'react'
import '../AdminRecord/AdminRecord.css'
import Container from 'react-bootstrap/Container';
import Student from '../Image/cap.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState ,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { context } from '../../App';



function AdminRecord() {
    const {serverLink} = useContext(context)
    const [Firstname, setFirstname] = useState()
    const [Lastname, setLastname] = useState()
    const [Dob, setDob] = useState()
    const [Phoneno, setPhoneno] = useState()
    const [Fathername, setFathername] = useState()
    const [Mothername, setMothername] = useState()
    const [Email, setEmail] = useState()
    const [Qualification, setQualification] = useState()
    const [Subject, setSubject] = useState()
    const [Photo, setPhoto] = useState()
    const [Idproof, setIdproof] = useState()
    const [Signature, setSignature] = useState()
    const [Salary, setSalary] = useState()
    const [Designation, setDesignation] = useState()
    const [LocalAddress, setLocalAddress] = useState()
    const [PermanentAddress, setPermanentAddress] = useState()
    const [City, setCity] = useState()
    const [State, setState] = useState()
    const [PinCode, setPinCode] = useState()
    const [Time, setTime] = useState()
    const [validated, setValidated] = useState(false);




    const AdminDetails = async () => {

        const formData = new FormData();
        formData.append("Firstname", Firstname);
        formData.append("Lastname", Lastname);
        formData.append("Dob", Dob);
        formData.append("Phoneno", Phoneno);
        formData.append("Fathername",Fathername);
        formData.append("Mothername", Mothername);
        formData.append("Email",Email );
        formData.append("Qualification", Qualification);
        formData.append("Subject", Subject);
        formData.append("Photo", Photo);
        formData.append("Idproof", Idproof);
        formData.append("Signature", Signature);
        formData.append("Salary", Salary);
        formData.append("Designation", Designation);
        formData.append("LocalAddress", LocalAddress);
        formData.append("PermanentAddress", PermanentAddress);
        formData.append("City", City);
        formData.append("State", State);
        formData.append("PinCode", PinCode);
        formData.append("Time", Time);


        let result = await axios.post(`${serverLink}/EmployeeRecord/EmployeeRecordadd`, formData,{
            headers:{
                'Content-Type' : 'multipart/form-data'
            }
        })
        if(!Firstname ||!Lastname || !Dob || !Fathername ||!Phoneno || !Email || !Mothername || !Qualification ||!Subject ||!Photo ||!Idproof ||!Signature ||!Salary ||!Designation ||!LocalAddress ||!PermanentAddress ||!City || !State ||!PinCode ||!Time){
            alert("Please fill in all the fields")
            return;
        }
        else{
            alert("Your data has been added")
            
        }
    }




    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <>
            <div className="student-form">
                <h2>EMPLOYEE FORM</h2>
                <Container>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}  encType='multipart/form-data'>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label className='emplo'>First name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    value={Firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                // defaultValue="Mark"
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Last name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    value={Lastname}
                                    onChange={(e) => setLastname(e.target.value)} />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>D.O.B :</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Date of Birth"
                                    value={Dob}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Father's name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Father's name"
                                    value={Fathername}
                                    onChange={(e) => setFathername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Mother's name :</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Mother's name"
                                    value={Mothername}
                                    onChange={(e) => setMothername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Phone No.</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Phone no."
                                    value={Phoneno}
                                    onChange={(e) => setPhoneno(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Email .</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Email"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Qualification</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your qualification"
                                    value={Qualification}
                                    onChange={(e) => setQualification(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Subjects:</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Subject you can teach (Enter , seperated value)"
                                    value={Subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4" >
                                <Form.Label className='emplo'> Photo</Form.Label>
                                <Form.Control
                                    required
                                    type="File"
                                    onChange={(e) => setPhoto(e.target.files[0])}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className='emplo'>Aadhar Card</Form.Label>
                                <Form.Control
                                    required
                                    type="File"
                                    onChange={(e) => setIdproof(e.target.files[0])}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className='emplo'>Signature</Form.Label>
                                <Form.Control
                                    required
                                    type="File"
                                    onChange={(e) => setSignature(e.target.files[0])}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Salary:</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last drown salary"
                                    value={Salary}
                                    onChange={(e) => setSalary(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Designation (Post):</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="your post"
                                    value={Designation}
                                    onChange={(e) => setDesignation(e.target.value)}
                                />
                            </Form.Group>



                            <Form.Group as={Col} md="4">
                                <Form.Label htmlFor="" className='emplo'>Time</Form.Label>
                                <Form.Select md="4" aria-label="Default select example" value={Time} onChange={(e) => setTime(e.target.value)}>
                                    <option>Time</option>
                                    <option value="Half time">Half time</option>
                                    <option value="Full time">Full time</option>
                                    {/* <option value="3"></option> */}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className='emplo'>Local address.</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="local addres"
                                    value={LocalAddress}
                                    onChange={(e) => setLocalAddress(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Permanent address.</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Permanent address"
                                    value={PermanentAddress}
                                    onChange={(e) => setPermanentAddress(e.target.value)}
                                />
                            </Form.Group>

                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" value={City}
                                    onChange={(e) => setCity(e.target.value)} required />
                                <Form.Control.Feedback type="invalid">

                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State"
                                    value={State}
                                    onChange={(e) => setState(e.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">

                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label>Pin-Code</Form.Label>
                                <Form.Control type="text" placeholder="Pin-Code"
                                    value={PinCode}
                                    onChange={(e) => setPinCode(e.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">

                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Button type="submit"
                            onClick={(e) => {
                                e.preventDefault()
                                AdminDetails()
                            }}
                        >Submit form</Button>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default AdminRecord