import React from "react";
import './style.css'
import {Col, Row} from "react-bootstrap";
import githubIcon from "../../resources/images/github.png";
import linkedInIcon from "../../resources/images/linkedin.png";
import resume from "../../resources/images/pdf-file.png";

function Footer() {
    return (
        <Row className="fixed-bottom">
            <Row className="Footer centerContent">
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
                    <a href="https://drive.google.com/file/d/1OZ2gvvpgMA-lumMEmFxM7bNscVS4vNmV/view" target="_blank">
                        <img className="buttonIcon" src={resume} alt="Resume Icon"/>
                    </a>
                </Col>
            </Row>
        </Row>
    );
}

export default Footer;
