import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/me.png";

function Home2() {
  return (
    <Container fluid className="banner-section">
      <Container className="about-banner">
        <Row>
          <Col md={3} className="avatar-container">
            <Tilt>
              <img src={myImg} className="avatar-circle" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={9} className="text-container">
            <h1 style={{ color: "white" }}>
              Hi, I'm <span className="purple">Ruhaan.</span>
            </h1>
            <p style={{ color: "white" }}>
              I am a junior studying at <span className="purple">Thomas Jefferson High School for Science and Technology</span>.
              <br />
              Scroll down to learn more about my experience, life, and hobbies.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
