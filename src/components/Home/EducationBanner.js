import React, { useState } from "react";
import { Container, Row, Col, Button, Collapse } from "react-bootstrap";
import educationImg from "../../Assets/education.jpg";
import club1Img from "../../Assets/club1.png"; // Replace with actual image paths
import club2Img from "../../Assets/extracurricular2.png";
import club3Img from "../../Assets/extracurricular3.jpg";

function EducationBanner() {
  const [showClubs, setShowClubs] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  return (
    <Container fluid className="banner-section">
      <Container className="education-banner">
        <Row>
          <Col md={3} className="avatar-container">
            <img src={educationImg} className="avatar-circle" alt="education" />
          </Col>
          <Col md={9}>
            <h1 className="purple">Education</h1>
            <Row>
              {/* Redesigned Clubs Section */}
              <Col md={6} className="education-box">
                <h3>Clubs</h3>
                <p>Leadership and Involvement in Clubs</p>
                <Button
                  variant="primary"
                  onClick={() => setShowClubs(!showClubs)}
                  aria-expanded={showClubs}
                >
                  {showClubs ? "Show Less" : "Read More"}
                </Button>
                <Collapse in={showClubs}>
                  <div className="clubs-content">
                    {/* Club 1 */}
                    <Row className="club-item">
                      <Col md={8}>
                        <h4 className="purple">TJ Namaste - Activities Coordinator</h4>
                        <p>
                          I am an officer for TJ Namaste, TJHSST’s indian culture and dance club, where I organize weekly meetings and teach Indian dance, as well as help build a community of peace through understanding culture. I help organize INite, and event TJ Namaste runs in which we invite every cultural club at TJ to put on a dance performance showcasing their culture in front of a crowd of over 1000 people. Through Namaste, I also earned the 2024 FCPS Peace Award from my school.
                        </p>
                      </Col>
                      <Col md={4}>
                        <img
                          src={club1Img}
                          alt="Club 1"
                          className="club-image"
                        />
                      </Col>
                    </Row>

                    {/* Club 2 */}
                    <Row className="club-item">
                      <Col md={8}>
                        <h4 className="purple">TJ Mobile Apps Development Club - VP of Technology</h4>
                        <p>
                        As VP of Technology, I am be responsible for working with other officers and leading the planning of a big hackathon event which we held. I am in charge of making the merchandise for our club, as well as the design and code for the club's website.

                        </p>
                      </Col>
                      <Col md={4}>
                        <img
                          src={club2Img}
                          alt="Club 2"
                          className="club-image"
                        />
                      </Col>
                    </Row>

                    {/* Club 3 */}
                    <Row className="club-item">
                      <Col md={8}>
                        <h4 className="purple">TJ Model United Nations</h4>
                        <p>
                          I am an award winning Model UN delegate and judge, having judged at TECHMUN 2023 & 2024 as well as won awards at ILMUNC,WMHSMUN, NAIMUN, VIMUNC, MCMUNC, CHMUN.
                        </p>
                      </Col>
                      <Col md={4}>
                        <img
                          src={club3Img}
                          alt="Club 3"
                          className="club-image"
                        />
                      </Col>
                    </Row>
                  </div>
                </Collapse>
              </Col>

              {/* Courses Section */}
              <Col md={6} className="education-box">
                <h3>Courses</h3>
                <p>TJHSST’s advanced coursework paired with the passion to learn</p>
                <Button
                  variant="primary"
                  onClick={() => setShowCourses(!showCourses)}
                  aria-expanded={showCourses}
                >
                  {showCourses ? "Show Less" : "Read More"}
                </Button>
                <Collapse in={showCourses}>
                  <div>
                    <ul>
                      <li>AP Computer Science A</li>
                      <li>Artificial Intelligence 1&2 AV</li>
                      <li>Mobile App Dev AV</li>
                      <li>Web App Dev AV</li>
                      <li>Computer Vision 1&2 AV</li>
                      <li>AP Statistics</li>
                      <li>AP Macro & Micro Economics</li>
                      <li>AP Calculus AB</li>
                      <li>AP Calculus BC</li>
                      <li>AP US History</li>
                    </ul>
                  </div>
                </Collapse>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default EducationBanner;
