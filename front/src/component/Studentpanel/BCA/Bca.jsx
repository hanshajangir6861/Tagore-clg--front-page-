import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import cap from '/src/component/Image/cap.png'

import '../BCA/Bca.css'
function FormExample() {
    const [validated, setValidated] = useState(false);

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

          
            <div className="imageBca">
                <h1>BACHLOR'S OF COMPUTER APPLICATION </h1>
                <h2>(BCA)</h2>
            </div>
            <div className="box">
                <h1>BCA</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt <br />autem porro expedita tempora id impedit animi at fugiat. <br /> Eaque odio odit facilis. In hic eveniet ex voluptate quidem dicta.</p>



            </div>
            <div className="box-2">
                <h1>Eligibility</h1>
                <p>A pass in 10+2 (Higher Secondary) with a minnimum aggregate of 50% <br /> (or) <br />  <h3>Mandatory Subjects </h3> <br /> Applicable for any subjects</p>
            </div>
            <div className="box-3">
                <h1>Future Career Prospects</h1>

                <Container>
                    <Row className='rows'>
                        <Col className='cols' lg={5}>
                            <h4>Web Developer</h4>
                        </Col>
                        <Col className='cols' lg={2}>
                        </Col>
                        <Col className='cols' lg={5}>
                            <h4>Database Administrator</h4>
                        </Col>
                    </Row>

                    <Row className='rows'>
                        <Col className='cols' lg={5}>
                            <h4>Software Developer</h4>
                        </Col>
                        <Col className='cols' lg={2}>
                        </Col>
                        <Col className='cols' lg={5}>
                            <h4>Computer Programmer</h4>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="box-4">
                <h1>Fees</h1>
                <Container>
                    <Row className='row'>
                        <Col className='cols' lg={4}>
                            <h4>BCA - 1st</h4>
                            <p>14785</p>
                        </Col>
                        <Col className='cols' lg={4}>
                        <h4>BCA - 2nd</h4>
                            <p>14785</p>
                        </Col>
                        <Col className='cols' lg={4}>
                        <h4>BCA - 3rd</h4>
                            <p>14785</p>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default FormExample;