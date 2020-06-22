import React from "react";
import "./jumbo4.styles.scss"
import {Jumbotron, Container, Button} from 'react-bootstrap'

function Jumbo4() {
  return (
    <Jumbotron className="first" id="contactus" fluid>
      <Container >
      <h3>Have any questions? CONTACT US!</h3>
      <br/>
      
      <p >
        Please email any enquiries at: ACECOACHINGUS.2020@GMAIL.COM
      </p>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo4;
