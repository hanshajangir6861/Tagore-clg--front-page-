import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import Ncc from '/src/component/Image/Ncc-logo.jpeg'
import '../NCC/Ncc.css'
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

            <div className="imageNcc">
                <h1>NATIONAL CADET CORPS </h1>
                <h2>(NCC)</h2>
            </div>
            <div className="box">
                <h1>NCC</h1>
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
                            <h4>Join Indian Army</h4>
                        </Col>
                        <Col className='cols' lg={2}>
                        </Col>
                        <Col className='cols' lg={5}>
                            <h4>Join Civil Services</h4>
                        </Col>
                    </Row>

                    <Row className='rows'>
                        <Col className='cols' lg={5}>
                            <h4>Join Indian Air Force</h4>
                        </Col>
                        <Col className='cols' lg={2}>
                        </Col>
                        <Col className='cols' lg={5}>
                            <h4>Join BSF</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="box-4">
                <Container>
                <h1>AIM OF NCC </h1><p>The ‘Aims’ of the NCC laid out in 1988 have stood the test of time and continue to meet the requirements expected of it in the current socio–economic scenario of the country. The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens. Further, it aims at creating a pool of organized, trained and motivated youth with leadership qualities in all walks of life, who will serve the Nation regardless of which career they choose. Needless to say, the NCC also provides an environment conducive to motivating young Indians to join the armed forces.</p>

                   
                </Container>
            </div>

           

        </>
    );
}

export default FormExample;