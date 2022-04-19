import React from "react";
import './App.css'
import {Col, Container, Navbar, Row} from "react-bootstrap";
import anime from 'animejs';

function App() {

    const animationRef = React.useRef(null);
    React.useEffect(() => {
        animationRef.current = anime({
            targets: ".el",
            translateX: 250,
            delay: function (el, i) {
                return i * 100;
            },
            loop: true,
            direction: "alternate",
            easing: "easeInOutSine"
        });
    }, []);

    return (
        <div className="App">
            <Row className="outershell">
                <Container fluid>
                    <Row>
                        <Col xs>

                        </Col>
                        <Col xs={10}>
                            <p>Micah BigEagle</p>
                            <hr></hr>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </Row>
        </div>

    );
}

export default App;
