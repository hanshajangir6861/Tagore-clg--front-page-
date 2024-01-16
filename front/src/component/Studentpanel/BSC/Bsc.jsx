import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import cap from '/src/component/Image/cap.png'
import '../BSC/Bsc.css'
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

            <div className="imageBsc">
                <h1>BACHLOR'S OF SCIENCE</h1>
                <h2>(B.SC)</h2>
            </div>
            <div className="box">
                <h1>B.SC</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt <br />autem porro expedita tempora id impedit animi at fugiat. <br /> Eaque odio odit facilis. In hic eveniet ex voluptate quidem dicta.</p>



            </div>
            <div className="box-2">
                <h1>Eligibility</h1>
                <p>A pass in 10+2 (Higher Secondary) with a minnimum aggregate of 50% <br /> (or) <br />  <h3>Mandatory Subjects </h3> <br /> SCience</p>
            </div>
            <div className="box-3">
                <h1>Future Career Prospects</h1>

                <Container>
                    <Row className='rows'>
                        <Col className='cols' lg={5}>
                            <h4>Government Sector</h4>
                        </Col>
                        <Col className='cols' lg={2}>
                        </Col>
                        <Col className='cols' lg={5}>
                            <h4>Private Sector</h4>
                        </Col>
                    </Row>

                    <Row className='rows'>
                        <Col className='cols' lg={5}>
                            <h4>ISRO</h4>
                        </Col>
                        <Col className='cols' lg={2}>
                        </Col>
                        <Col className='cols' lg={5}>
                            <h4>Teaching</h4>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="box-4">
                <h1>Fees</h1>
                <Container>
                    <Row className='row'>
                        <Col className='cols' lg={4}>
                            <h4>B.SC - 1st</h4>
                            <p>14785</p>
                        </Col>
                        <Col className='cols' lg={4}>
                            <h4>B.SC - 2nd</h4>
                            <p>14785</p>
                        </Col>
                        
                        <Col className='cols' lg={4}>
                        <h4>B.SC - final</h4>
                            <p>14785</p>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default FormExample;