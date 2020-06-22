import React from "react";

import {Jumbotron, Container, Button} from 'react-bootstrap'
import "./jumbo.component.scss";




function Jumbo() {
  return (
    
    <Jumbotron  className="jumbotron1" fluid>
      <Container >
      <h1 className="text1">Live, Dynamic</h1>
      <h1 className="text2">Online Classes</h1>
      <br/>
      <p>
        <Button variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSc1YWYiRbSIcqoDsPwulG9GpR1a7Ah98TSIPv2o8EMYxB6izg/viewform">Sign Up</Button>
      </p>
      <p>
        <Button variant="primary"  href="#programs">Our Programs</Button>
      </p>
      <br/>
      <br/>
      <p className="text3">
        Classes are running now and will continue through summer and beyond.
      </p>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo;
