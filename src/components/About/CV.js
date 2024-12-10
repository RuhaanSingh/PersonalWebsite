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
  SiTensorflow,
  SiJupyter,
  SiOpencv,
} from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";


function CV() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> Python
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow /> TensorFlow
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter /> Jupyter
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv /> OpenCV
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        MATLAB
      </Col>
      
    </Row>
  );
}

export default CV;
