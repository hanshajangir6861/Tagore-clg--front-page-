import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Director from '../Image/director.png'
import Library from '../Image/library.jpg'
import Computer from '../Image/computer-lab.jpg'
import Class from '../Image/smart-classroom.jpg'
import Staff from '../Image/staff-room.jpg'
import Faculty from '../Image/best-faculty.jpg'
import Auditorium from '../Image/auditorium.jpg'
import bca from '../Image/bca.jpeg'
import Bba from '../Image/bba.jpg'
import Bcom from '../Image/bcom.jpg'
import '../Home/Home.css'
// import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Home() {
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });

  })

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  {/* ................<slider>................. */ }

  return (
    <>
      <div className="slider">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={Computer}
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={Class}
              alt="Second slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={Library}
              alt="Third slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      {/* {..........About college................  } */}


      <div className="about-college" >

        <h2>ABOUT-COLLEGE</h2>

        <div className='college-box'>
          <Container>
            <Row className='rows'>
              <Col className='cols' lg={6} data-aos="zoom-in">
                <Card style={{}}>
                  <Card.Img variant="top" src={Director} />
                  <Card.Body>
                    <Card.Title>Director</Card.Title>
                    <Card.Text>
                      <h3>Dr.Veerpal Singh Shekhawat</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel, sed molestiae illum accusantium facilis.</p>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col className='cols' lg={6} data-aos="zoom-in">
                <Card style={{}}>
                  <Card.Img variant="top" src={Director} />
                  <Card.Body>
                    <Card.Title>Principle</Card.Title>
                    <Card.Text>
                      <h3>Dr.Surender Soni</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat maiores incidunt voluptatibus sit.</p>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Container>
        </div>
      </div>


      {/* ...............<Our-facilities>............... */}




      <div className="our-faci">
        <h2> OUR-FACILITIES</h2>

        <div className='fac-box-one'>
          <Container>
            <Row className='rows' >
              <Col className='cols' lg={4}>
                <Card style={{}} data-aos="zoom-in-down">
                  <Card.Img variant="top" src={Library} />
                  <Card.Body>
                    <Card.Title>Library</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col className='cols' lg={4}>
                <Card style={{}} data-aos="zoom-in-down">
                  <Card.Img variant="top" src={Computer} />
                  <Card.Body>
                    <Card.Title>Computer lab</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col className='cols' lg={4}>
                <Card style={{}} data-aos="zoom-in-down">
                  <Card.Img variant="top" src={Class} />
                  <Card.Body>
                    <Card.Title> Smart-Classrooms</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div className='fac-box-two'>
          <Container>
            <Row className='rows'>
              <Col className='cols' lg={4}>
                <Card style={{}} data-aos="zoom-in-down" >
                  <Card.Img variant="top" src={Staff} />
                  <Card.Body>
                    <Card.Title>Staff-Room</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col className='cols' lg={4}>
                <Card style={{}} data-aos="zoom-in-down">
                  <Card.Img variant="top" src={Faculty} />
                  <Card.Body>
                    <Card.Title>Best-Faculty</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col className='cols' lg={4}>
                <Card style={{}} data-aos="zoom-in-down">
                  <Card.Img variant="top" src={Auditorium} />
                  <Card.Body>
                    <Card.Title>Auditorium</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>



      </div>


      {/* ................courses................. */}

      <div className="our-cour">
        <h2>OUR-COURSES </h2>
        <div className='course-box'>
          <Container>
            <Row className='rows'>
              <Col className='cols' lg={4}>
                <Card style={{}} data-aos="zoom-in-right">
                  <Card.Img variant="top" src={bca} />
                  <Card.Body>
                    <Card.Title>BCA</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary"><Link to='/bca'>View Details</Link></Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='cols' lg={4}>
                <Card style={{}} data-aos="zoom-in-right">
                  <Card.Img variant="top" src={Bba} />
                  <Card.Body>
                    <Card.Title>BBA</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary"><Link to='/bba'>View Details</Link></Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='cols' lg={4}>
                <Card style={{}} data-aos="zoom-in-right">
                  <Card.Img variant="top" src={Bcom} />
                  <Card.Body>
                    <Card.Title>B.Com</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary"><Link to='/bcom'>View Details</Link></Button>


                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <a href="">
          <button><Link to='/viewall'>View All</Link></button>
        </a>
      </div>
      {/* ................FORM..................... */}

      <Container>
        <div className="form-main">
          <Row className='rows mt-5 mb-5'>
            <Col className='cols lg-6' >
              <div className='formname'>
                <h3>Registeration-Form</h3>
              </div>
              <div className='formbox'>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"

                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"

                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="City" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="State" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>

                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Button type="submit">Submit form</Button>
                </Form>
              </div>

            </Col>
            <Col className='cols' lg={6}>
              <div className='mapname'>
                <h3>Live-Location</h3>
              </div>
              <div className='mapbox'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.528965756721!2d75.5213261752605!3d27.88573637608087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ccd5bd01662eb%3A0x43d184498d282d59!2sTagore%20College%20Campus!5e0!3m2!1sen!2sin!4v1702703900588!5m2!1sen!2sin"

                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </Col>
          </Row>



        </div>
      </Container>


    </>

  )


}
export default Home