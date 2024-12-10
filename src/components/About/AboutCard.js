import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi i'm <span className="purple">Ruhaan Singh </span>
            <br />I am a junior at Thomas Jefferson High School for Science and Technology
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
