import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nss from '/src/component/Image/Nss-logo.jpeg'
import '../NSS/Nss.css'
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

            <div className="imageNss">
                <h1>NATIONAL Service Scheme </h1>
                <h2>(NSS)</h2>
            </div>
            <div className="box">
                <h1>NSS</h1>
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
                <h1>About National Service Scheme (NSS)</h1><p>The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of 11th & 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate & Post Graduate at colleges and University level of India to take part in various Government led community service activities & programmes. The primary objective of developing the personality and character of the student youth through voluntary community service. ‘Education through Service’ is the purpose of the NSS. NSS was launched in 1969 in 37 Universities involving about 40,000 volunteers which has now spread over 657 Universities and 51 +2 Councils/Directorates, covering 20,669 Colleges/ Technical Institutions and 11,988 Senior Secondary School. Since inception , over 7.4 crore students have benefitted from NSS.</p>

                   
                </Container>
            </div>
            

           

        </>
    );
}

export default FormExample;