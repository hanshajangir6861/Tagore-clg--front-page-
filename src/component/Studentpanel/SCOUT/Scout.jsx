import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nss from '/src/component/Image/Nss-logo.jpeg'
import '../SCOUT/Scout.css'
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

           
            <div className="imageScout">
                <h1>SCOUT </h1>
                
            </div>
            <div className="box">
                <h1>SCOUT</h1>
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
              <h3>Scout Oath: </h3><p>On my honor I will do my best to do my duty to God and my country and to obey the Scout Law; to help other people at all times; to keep myself physically strong, mentally awake, and morally straight.</p>

<h3>Scout Law: </h3> <p>A Scout is trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, and reverent.</p>

<h3>Scout Mission:</h3> <p>The mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Scout Law.</p>

                   
                </Container>
            </div>
            

           

        </>
    );
}

export default FormExample;