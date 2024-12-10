import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaAngular /> Angular Js
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> JavaScript
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 /> HTML
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> React Js
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 /> CSS
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs /> Next Js
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiFlutterFill /> Flutter
      </Col>
    </Row>
  );
}

export default Techstack;
