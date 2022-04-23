import React from "react";
import './style.css'
import {Card} from "react-bootstrap";

function ProjectCard(props) {
    return (
        <Card className="ProjectCard">
            {/*<Card.Img src={props.cardImage} alt={props.cardTitle}></Card.Img>*/}

            <text className="cardHeader">{props.cardTitle}</text>
            <Card.Body>{props.cardBody}</Card.Body>
            <a className="CardAnchor" href={props.cardLink} target="_blank">Check It Out</a>
        </Card>
    );
}

export default ProjectCard;
