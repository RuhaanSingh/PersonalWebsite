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
  DiGithub,
  DiVisualstudio,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiTensorflow,
  SiJupyter,
  SiOpencv,
  SiRstudio,
} from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiBlender } from "react-icons/si";


function Others() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> Git
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub /> GitHub
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio/> RStudio
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < DiVisualstudio/> VS Code
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender/> Blender
      </Col>
      
    </Row>
  );
}

export default Others;
