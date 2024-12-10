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
  SiKotlin,
  SiXaml,
  SiAndroidstudio,
} from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";


function Android() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava /> Java
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin /> Kotlin
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio /> Android Studio
      </Col>
    </Row>
  );
}

export default Android;
