import React from "react";
import './style.css'
import {Col, Row} from "react-bootstrap";


function Contact() {
    return (
        <Row className="centerContent Contact">
            <Col>
                <p className="leftAlignContent">
                    Location: Minnesota, USA
                </p>
            </Col>
            <Col>
                <p className="leftAlignContent">
                    Phone: 507-676-3929
                    <p>
                        E-mail: mbigeagle123@gmail.com
                    </p>
                </p>

            </Col>
        </Row>
    );
}

export default Contact;