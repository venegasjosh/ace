import React from "react";
import "./jumbo3.styles.scss";
import {Jumbotron, Container, Button} from 'react-bootstrap'

function Jumbo3() {
  return (
    <Jumbotron className="first" fluid>
      <Container >
      <h3>What makes Ace Coaching Unique?</h3>
      <br/>
     <ul>
     <li>
     Handpicked coaches experienced in teaching children.
     </li>
     <li>
     Based on innovative, hands-on material, students are evaluated at the end of each of our hand picked courses.
     </li>
     <li>
     Courses are focued on improving critical thinking and analytical skills with ease. 
     </li>
     <li>
     Centered on training for a competative market; courses are focused on building real-world, in demand skills.
     </li>
     <li>
     One-on-one oor group coaching availalbe. From beginner, trhough intermediate, to advanced courses available.
     </li>
     <li>
     Organized in virtual classrooms with up to 10 students of the same age and skill-level
     </li>

     </ul>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo3;
