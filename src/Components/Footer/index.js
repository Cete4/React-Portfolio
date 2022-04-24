import React from "react";
import './style.css'
import {Col, Row} from "react-bootstrap";
import githubIcon from "../../resources/images/github.png";
import linkedInIcon from "../../resources/images/linkedin.png";
import resume from "../../resources/images/pdf-file.png";

function Footer() {
    return (
        <Row className="Footer">
            <Col className="centerContent">
                <a href="https://www.linkedin.com/in/micah-bigeagle-ba5b3b1ba/" target="_blank">
                    <img className="buttonIcon" src={linkedInIcon} alt="LinkedIn Icon"/>
                </a>
            </Col>
            <Col className="centerContent">
                <a href="https://github.com/Cete4" target="_blank">
                    <img className="buttonIcon" src={githubIcon} alt="Github Icon"/>
                </a>
            </Col>
            <Col className="centerContent">
                <a href="../../resources/files/Micah-BigEagle-Resume.pdf" target="_blank">
                    <img className="buttonIcon" src={resume} alt="Resume Icon"/>
                </a>
            </Col>
        </Row>
    );
}

export default Footer;
