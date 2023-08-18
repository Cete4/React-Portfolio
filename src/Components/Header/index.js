import React from "react";
import {Col, Row} from "react-bootstrap";
import anime from 'animejs';
import HeaderAnimation from "../HeaderAnimation/index.js";

function Header() {

    const widthModifier = 2.5;
    const checkResizeMS = 500;
    const animationRef = React.useRef(null);

    function debounce(fn, ms) {
        let timer
        return _ => {
            clearTimeout(timer)
            timer = setTimeout(_ => {
                timer = null
                fn.apply(this, arguments)
            }, ms)
        };
    }

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, checkResizeMS)
        window.addEventListener('resize', debouncedHandleResize)
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)

        }
    });

    React.useEffect(() => {
        //If the site loads for the first time the animation will be null
        if (animationRef.current !== null) {
            animationRef.current.restart()
        }
        animationRef.current = anime({
            targets: ["square1", ".square2", ".square3"],
            translateX: dimensions.width / widthModifier,
            loop: true,
            //Duration in ms
            duration: 5000,
            direction: "alternate",
            easing: "easeInOutSine"
        });
    }, [dimensions]);


    return (
        <div> {/* Header and animation */}
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
                    <p className="header">Full Stack Web Developer</p>
                    <hr className="horizontalLine noHover"/>
                </Col>
                <Col/>
            </Row>
            <br/>
            <Row>
                <Col/>
                <Col xs={10} id="animationCol">
                    <HeaderAnimation/>
                </Col>
                <Col/>
            </Row>
        </div>
    );
}

export default Header;
