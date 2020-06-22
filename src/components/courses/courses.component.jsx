import React from "react";
import { Button, Card, CardColumns } from "react-bootstrap";

function Courses() {
  return (
    <CardColumns id="programs" >
      <Card bg="primary" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            CHESS<br/> (GRADES K-8)<br/><br/><br/><br/><Button variant="warning"  href="https://docs.google.com/forms/d/e/1FAIpQLSc1YWYiRbSIcqoDsPwulG9GpR1a7Ah98TSIPv2o8EMYxB6izg/viewform">Add Course</Button>
          </p>
        </blockquote>
      </Card>
      <Card bg="primary" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            SCRATCH  <br/>PROGRAMMING <br/>(GRADES K-8)<br/><br/><Button variant="warning" href="https://docs.google.com/forms/d/e/1FAIpQLSc1YWYiRbSIcqoDsPwulG9GpR1a7Ah98TSIPv2o8EMYxB6izg/viewform">Add Course</Button>
          </p>
        </blockquote>
      </Card>
      <Card bg="primary" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            PYTHON <br/>(GRADES 5-8)<br/><br/><br/><br/><Button variant="warning" href="https://docs.google.com/forms/d/e/1FAIpQLSc1YWYiRbSIcqoDsPwulG9GpR1a7Ah98TSIPv2o8EMYxB6izg/viewform">Add Course</Button>
          </p>
        </blockquote>
      </Card>
      <Card bg="primary" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            SNAP CIRCUTS<br/> (GRADES 1-5)<br/><br/><br/><Button variant="warning" href="https://docs.google.com/forms/d/e/1FAIpQLSc1YWYiRbSIcqoDsPwulG9GpR1a7Ah98TSIPv2o8EMYxB6izg/viewform">Add Course</Button>
          </p>
        </blockquote>
      </Card>
      <Card bg="primary" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            WEB <br/>DESIGN<br/>(GRADES 5-8) <br/><br/><br/><Button variant="warning" href="https://docs.google.com/forms/d/e/1FAIpQLSc1YWYiRbSIcqoDsPwulG9GpR1a7Ah98TSIPv2o8EMYxB6izg/viewform">Add Course</Button>
          </p>
        </blockquote>
      </Card>
      <Card bg="primary" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
           AP MATH +<br/> LANGUAGE ARTS<br/>(GRADES 5-8)<br/><br/><Button variant="warning" href="https://docs.google.com/forms/d/e/1FAIpQLSc1YWYiRbSIcqoDsPwulG9GpR1a7Ah98TSIPv2o8EMYxB6izg/viewform">Add Course</Button>
          </p>
        </blockquote>
      </Card>
    </CardColumns>
  );
}
export default Courses;
