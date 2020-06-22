import React from "react";
import "./jumbo2.styles.scss";
import { Jumbotron, Container, Button } from "react-bootstrap";

function Jumbo2() {
  return (
    <Jumbotron className="jumbotron2" id="aboutus" fluid>
      <Container >
        <h1>ABOUT US</h1>
        <p>AMBITION IS THE FIRST STEP TOWARDS SUCCESS</p>
        <br />
        <p>
          ACE COACHING is an educational platform to connect coaches with
          students online or in person. We provide excellent world class service
          by a certified coaches we also have wide variety of options where
          anyone any age student/adult can start learning new skills from any
          level that suits them. Our Programs includes Education K-12, STEM,
          Arts, Sports, Music, Dance and latest IT Technologies. We want to make
          your search easy and available in one spot through our program.
        </p>
        <br/>
        <p>
          <Button variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSc1YWYiRbSIcqoDsPwulG9GpR1a7Ah98TSIPv2o8EMYxB6izg/viewform">Sign Up</Button>
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo2;
