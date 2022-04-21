import React from "react";
import './style.css'
import {Card} from "react-bootstrap";


function ProjectCard(props) {
    return (
        <Card className="ProjectCard">
            <Card.Img src="" alt={props.cardTitle}></Card.Img>
            <Card.Title>{props.cardTitle}</Card.Title>
            <Card.Body>{props.cardBody}</Card.Body>
            <a className="CardAnchor" href={props.cardLink} target="_blank">Check It Out</a>
        </Card>
    );
}

export default ProjectCard;
