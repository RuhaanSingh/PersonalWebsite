import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Android from "./Android";
import CV from "./CV";
import Others from "./Others";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="blue">SKILLS</strong>
            </h1>
            <b>Here are some skills which I have learned over the years:</b>
          </Col>
        </Row>
        <h1 className="project-heading">
          CV/Machine Learning
        </h1>
        <CV/>

        <h1 className="project-heading">
          Frontend
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Backend
        </h1>
        <Toolstack />
        <h1 className="project-heading">
          Android
        </h1>
        <Android/>
        <h1 className="project-heading">
          Others
        </h1>
        <Others/>



      </Container>
    </Container>
  );
}

export default About;
