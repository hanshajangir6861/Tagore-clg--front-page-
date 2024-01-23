import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import cap from '../Image/cap.png'
import '../EmployeeLogin/Employeelogin.css'
import { Link, } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { context } from '../../App';
import {EyeInvisibleOutlined , EyeOutlined} from "@ant-design/icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";



function FormExample() {
    const { serverLink, setAdminLoggedIn } = useContext(context);
    // const serverLink = useContext(context)
    // const History = useHistory();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [userName, setUsername] = useState()
    const [password, setPassword] = useState()
const [visible , setVisible] = useState(true)
const [agreeTerms, setAgreeTerms] = useState(false);


    const AdminLogin = async () => {
        // console.log(userName, password)
        let result = await axios.post(`${serverLink}/admindata/AdminsLogin`, {
            UserName: userName,
            Password: password
        })
        result = result.data
        // console.log(result)
        // console.log(result._id)

        if (result.UserName) {
            alert("Successful login")

            const setAdminData = () => {
                localStorage.setItem("adminData", JSON.stringify(result))
            }
            setAdminData()

            setAdminLoggedIn(true);

            // console.log(localStorage.getItem("adminData"));


            navigate(`/AdminPage/${result._id}`)

        }
        else {
            // console.log(result)

            alert("Please Enter Correct Details")
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


            <div className='main'>
                <div className="container">
                    <div className="Adminreg">
                    {/* <div className="back-arrow" onClick={() => History.goBack()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    </div> */}
                        <h1>EMPLOYEE LOGIN FORM</h1>
                        <h6>Enter your login information below</h6>
                        <button><Link to='/adminreg'>New Registration</Link></button>
                    </div>
                </div>


                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="container">
                        <Row className="mb-3">



                            <Form.Group as={Col} md="7" controlId="validationCustom01">
                                <Form.Label>UserName </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your usrername"
                                    value={userName}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>

                        </Row>
                        <Row className="mb-3">



                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type={visible ? "text" : "password"}
                                 placeholder="Enter your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                    <div className="eyeicon1" onClick={()=>{setVisible(!visible)}}>
                                        {visible ? <EyeOutlined/>:<EyeInvisibleOutlined/> }
                          </div>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a vaild password
                                </Form.Control.Feedback>
                            </Form.Group>



                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                checked={agreeTerms}
                 onChange={() => setAgreeTerms(!agreeTerms)}
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <div className='employloginbutton'>
                            <Button type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (agreeTerms) {
                                        AdminLogin();
        
                                    } else {
                                        alert("Please agree to terms and conditions.");
                                    }
                                }}
                                disabled={!agreeTerms}
                                >Submit</Button>
                        </div>

                    </div>
                </Form>
            </div >
        </>
    );
}

export default FormExample;