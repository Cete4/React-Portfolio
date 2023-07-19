import React, {useEffect} from "react";
import './App.css'
import {Container, Row} from "react-bootstrap";
import Header from "./Components/Header/index.js";
import ProjectCard from "./Components/ProjectCard/index.js";
import Footer from "./Components/Footer";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-B6KTLNTBQH"; // OUR_TRACKING_ID


function App() {

    // Initialize Google Analytics
    ReactGA.initialize(TRACKING_ID);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const projects = [
        {
            name: "Hey You Its Me Server",
            gitLink: "https://github.com/Cete4/HeyYouItsMeServer",
            description: `A SpringBoot server that can be connected to a PostgreSQL database. 
            Written in Kotlin and currently running on my RaspberryPi to serve messages to the HeyYouItsMe React Native App.`,
            imageLink: "../../resources/images/heyyouitsme.png"
        },
        {
            name: "Hey You Its Me",
            gitLink: "https://github.com/Cete4/HeyYouItsMe",
            description: `A mobile app written with React-Native. While still in production the end goal is to be able to send push notification to a  significant other.`,
            imageLink: "../../resources/images/heyyouitsme.png"
        },
        {
            name: "React Portfolio",
            gitLink: "https://github.com/Cete4/React-Portfolio",
            description: `The website that you are currently viewing was written utilizing the React web framework with custom CSS styling. As well as utilizing a PostgreSQL database to track analytics and being designed with mobile friendliness in mind.`,
            imageLink: "../../resources/images/heyyouitsme.png"
        },
        {
            name: "Novel Films",
            gitLink: "https://github.com/Cete4/NovelFilms",
            description: `A place to find books and movies of similar titles. Utilizing several API calls to display information. This was a collaborative project during the University of Minnesota Full Stack Developer Bootcamp. `,
            imageLink: "../../resources/images/heyyouitsme.png"
        }
    ]
    return (
        <div className="App outershell">
            <Row className="outershell">
                <Container fluid className="outershell">
                    <Row>
                        <Header/>
                    </Row>

                    <br/>
                    <br/>
                    <Row xs={2} md={2} lg={3} xl={3} xxl={3} className="cardRow">

                        {
                            projects.map((project) => (

                                <ProjectCard
                                    cardTitle={project.name}
                                    cardLink={project.gitLink}
                                    cardBody={project.description}
                                    cardImage={project.imageLink}
                                />

                            ))
                        }
                    </Row>
                    <br/>
                    <br/>
                    <Footer/>
                </Container>
            </Row>
        </div>
    );
}

export default App;
