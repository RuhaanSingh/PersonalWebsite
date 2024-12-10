import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AACHOO.AI"
              description="Developed a web-based AI platform to analyze air quality data and predict potential allergic reactions for travelers based on pollutant levels. The system leveraged geolocation data and real-time air quality metrics to deliver personalized health insights, enhancing user safety during travel. Our algorithm processed various environmental pollutants, mapping them to known allergy triggers, providing users with actionable information for their well-being."
              ghLink="https://github.com/RuhaanSingh/AACHOO.AI"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Parkinson’s Disease Early Detection via Handwriting & Spiral Test Analysis"
              description="Developed a computer vision-based tool for the early detection of Parkinson’s disease using pre-existing digital datasets of handwriting and spiral test images. Implemented machine learning algorithms, including CNNs, to identify early markers of the disease. Achieved high accuracy in classifying PD-positive and control samples, offering a non-invasive alternative for early diagnosis."
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
