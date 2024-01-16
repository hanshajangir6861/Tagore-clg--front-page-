import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Courses/view-all.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Container, Row , Col } from 'react-bootstrap'
import Bca from '../Image/bca.jpeg'
import Bba from '../Image/bba.jpg'
import Bcom from '../Image/bcom.jpg'
import Ncc from '../Image/ncc-img.jpg'
import Nss from '../Image/nss-img.jpg'
import Scout from '../Image/scout-img.jpg'
import { Link } from 'react-router-dom';

 function View() {
  return (
    <>
       <div className='courses'>
        <h2>OUR-COURSES</h2>


        <div className='all-courses-one'>
            <Container>
                <Row className='rows'>
                    <Col className='cols'lg={4}>
                    <Card style={{ }}>
      <Card.Img variant="top" src={Bca} />
      <Card.Body>
        <Card.Title>BCA</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to='/bca'>Details</Link></Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col className='cols'lg={4}>
                    <Card style={{ }}>
      <Card.Img variant="top" src={Bba}/>
      <Card.Body>
        <Card.Title>BBA</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to='/bba'>Details</Link></Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col className='cols'lg={4}>
                    <Card style={{ }}>
      <Card.Img variant="top" src={Bcom} />
      <Card.Body>
        <Card.Title>B.Com</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to='/bcom'>Details</Link></Button>
      </Card.Body>
    </Card>
                    </Col>
                   
                </Row>
            </Container>
        </div>
        <div className='all-courses-two'>
            <Container>
                <Row className='rows'>
                    <Col className='cols'lg={4}>
                    <Card style={{ }}>
      <Card.Img variant="top" src={Bcom} />
      <Card.Body>
        <Card.Title>BA</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to='/ba'>Details</Link></Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col className='cols'lg={4}>
                    <Card style={{ }}>
      <Card.Img variant="top" src={Bca} />
      <Card.Body>
        <Card.Title>B.SC</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to='/bsc'>Details</Link></Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col className='cols'lg={4}>
                    <Card style={{ }}>
      <Card.Img variant="top" src={Bba} />
      <Card.Body>
        <Card.Title>MA</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to='/ma'>Details</Link></Button>
      </Card.Body>
    </Card>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='all-courses-four'>
            <Container>
                <Row className='rows'>
                    <Col className='cols'lg={4}>
                    <Card style={{  }}>
      <Card.Img variant="top" src={Bba} />
      <Card.Body>
        <Card.Title>M.Com</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to='/mcom'>Details</Link></Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col className='cols'lg={4}>
                    <Card style={{  }}>
      <Card.Img variant="top" src={Bca} />
      <Card.Body>
        <Card.Title>M.Sc</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to='/msc'>Details</Link></Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col className='cols'lg={4}>
                    <Card style={{  }}>
      <Card.Img variant="top" src={Ncc} />
      <Card.Body>
        <Card.Title>NCC</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to='/ncc'>Details</Link></Button>
      </Card.Body>
    </Card>
                    </Col>
                   
                </Row>
            </Container>
        </div>
        <div className='all-courses-three'>
            <Container>
                <Row className='rows'>
                   

<Col className='cols' lg={2}>

</Col>

                    <Col className='cols'lg={4}>
                    <Card style={{  }}>
      <Card.Img variant="top" src={Nss} />
      <Card.Body>
        <Card.Title>NSS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to='/nss'>Details</Link></Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col className='cols'lg={4}>
                    <Card style={{  }}>
      <Card.Img variant="top" src={Scout} />
      <Card.Body>
        <Card.Title>SCOUT</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to='/scout'>Details</Link></Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col className='cols' lg={2}>
                    </Col>
                </Row>
            </Container>
        </div>
       </div>
    </>
  )
}
export default View;
