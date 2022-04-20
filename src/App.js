import React from "react";
import './App.css'
import {Col, Container, Row} from "react-bootstrap";
import Header from "./Components/Header/index.js";

function App() {
    return (
        <div className="App">
            <Row className="outershell">
                <Container fluid>
                    <Header/>

                    <div>
                        <Row>

                        </Row>
                    </div>

                </Container>
            </Row>
        </div>

    );
}

export default App;
