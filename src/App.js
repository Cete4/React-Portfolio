import React from "react";
import './App.css'
import {Col, Container, Row} from "react-bootstrap";
import anime from 'animejs';

function App() {

    const animationRef = React.useRef(null);
    React.useEffect(() => {
        animationRef.current = anime({
            targets: ".el",
            translateX: 1000,
            loop: true,
            //Duration in ms
            duration: 10000,
            direction: "alternate",
            easing: "easeInOutSine"
        });
    }, []);

    return (
        <div className="App">
            <Row className="outershell">
                <Container fluid>
                    <Row className="definedRowHeight">
                        <Col/>
                        <Col xs={10}>
                            <p className="header">Micah BigEagle</p>
                            <hr className="horizontalLine noHover"/>
                        </Col>
                        <Col/>
                    </Row>
                    <Row className="definedRowHeight">
                        <Col/>
                        <Col xs={10}>
                            <p className="header">Full Stack Developer</p>
                            <hr className="horizontalLine noHover"/>
                        </Col>
                        <Col/>
                    </Row>
                    <Row className="definedRowHeight">
                        <Col/>
                        <Col xs={10}>
                            <div className="el noHover"/>
                        </Col>
                        <Col/>
                    </Row>
                </Container>
            </Row>
        </div>

    );
}

export default App;
