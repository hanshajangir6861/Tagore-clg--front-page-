import Card from 'react-bootstrap/Card';
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Aboutus/Aboutus.css'
import {Container ,Row, Col} from 'react-bootstrap' 
import AOS from 'aos';
import 'aos/dist/aos.css';




function BasicExample() {
  useEffect(()=>{
    AOS.init({duration:2000});
  })



  return (
    <>
    <div className="image">
    <div className='heading'><h1>ABOUT US</h1></div>
      <Container>
      <Row>
<Col className ='cols' lg={2}></Col>
<Col className ='cols' lg={8} data-aos = "fade-left">
 
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui enim, tempora provident sunt iste molestias accusantium illum autem. Alias voluptas hic repudiandae libero perspiciatis odit eaque aperiam laboriosam eum officiis quo ad ipsum cupiditate provident aspernatur temporibus blanditiis, ab earum minus autem incidunt consequuntur ut dolor vitae? Iste, quos perferendis?</p>
</Col>
<Col className ='cols' lg={2}></Col>


</Row>
      </Container>

</div>
</>

  );
}

export default BasicExample;


    

 









   