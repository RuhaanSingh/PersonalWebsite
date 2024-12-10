import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import extracurricularImage1 from "../../Assets/extracurricular1.jpg"; // Replace with actual image paths
import awardimg from "../../Assets/awardimg.png";

function ExtracurricularsBanner() {
  return (
    <Container fluid className="banner-section extracurriculars-banner">
      <Container>
        <h1 className="purple">Extracurriculars & Notable Awards</h1>
        {/* EC 1 */}
        <Row className="extracurricular-item">
          <Col md={8} className="extracurricular-text">
            <h2 className="purple">Competitive Bhangra Dancer</h2>
            <p style={{ color: "white" }}>
              As a competitive bhangra dancer for Virginia School of Bhangra, I have been dancing for over 8 years and have won awards at many international bhangra competitions such as 3rd Place at Flower City Bhangra in Canada. I find bhangra as a way to stay rooted to my culture and find it to be one of my greatest passions. I also play the dhol, a traditional Punjabi drum usually used for bhangra dancing.
            </p>
          </Col>
          <Col md={4} className="extracurricular-image">
            <img
              src={extracurricularImage1}
              alt="Extra 1"
              className="extra-image"
            />
          </Col>
        </Row>
        {/* EC 2 */}
        <Row className="extracurricular-item">
          <Col md={8} className="extracurricular-text">
            <h2 className="purple">FCPS Peace Award Recipient</h2>
            <p style={{ color: "white" }}>
              I was recognized by Fairfax County Public Schools as the 2024 peace award recipient from my school for promoting peace and cross-cultural understanding at my school through leadership in club activities. I was awarded this due to my keyrole in organizing events that fostered inclusivity and cultural awareness. 
            </p>
          </Col>
          <Col md={4} className="extracurricular-image">
            <img
              src={awardimg}
              alt="Extra 1"
              className="extra-image"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default ExtracurricularsBanner;
