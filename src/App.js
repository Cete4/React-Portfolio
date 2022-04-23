import React from "react";
import './App.css'
import {Col, Container, Row} from "react-bootstrap";
import Header from "./Components/Header/index.js";
import ProjectCard from "./Components/ProjectCard/index.js";

function App() {
    const projects = [
        {
            name: "HeyYouItsMeServer",
            gitLink: "https://github.com/Cete4/HeyYouItsMeServer",
            description: `A SpringBoot server that can be connected to a PostgreSQL database. 
            Written in Kotlin and currently running on my RaspberryPi to serve messages to the HeyYouItsMe React Native App.`,
            imageLink: "../../resources/images/heyyouitsme.png"
        },
    ]
    return (
        <div className="App">
            <Row className="outershell">
                <Container fluid>
                    <Row>
                        <Header/>
                    </Row>

                    <br/>
                    <br/>

                    <Row>
                        <Col/>
                        <Row xs={1} md={2} lg={3} xl={3} xxl={3}>
                            {
                                projects.map((project) => (
                                    <Col>
                                        <ProjectCard
                                            cardTitle={project.name}
                                            cardLink={project.gitLink}
                                            cardBody={project.description}
                                            cardImage={project.imageLink}
                                        />
                                    </Col>
                                ))
                            }
                        </Row>
                        <Col/>
                    </Row>
                </Container>
            </Row>
        </div>

    );
}

export default App;
