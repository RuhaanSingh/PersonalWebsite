import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import EducationBanner from "./EducationBanner";
import ContactBanner from "./ContactBanner";
import ExtracurricularsBanner from "./ExtracurricularsBanner";



function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              
              <h1 className="heading-name">
                <strong className="main-name"> Ruhaan Singh</strong>
              </h1>

              <div style={{ textAlign: "center" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <EducationBanner />
      <ExtracurricularsBanner />
      <ContactBanner />

    </section>
  );
}

export default Home;
