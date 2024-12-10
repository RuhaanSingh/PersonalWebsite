import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDjango,
} from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiFlask } from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> Node Js
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> Python
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> MongoDB
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> MySQL
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask /> Flask
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango /> Django
      </Col>
 


    </Row>
  );
}

export default Toolstack;
