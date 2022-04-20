import React from "react";
import './style.css'
import {Col, Container, Row} from "react-bootstrap";
import anime from 'animejs';

function Header() {

    const widthModifier = 2.5;
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
    })

    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 1000)
        window.addEventListener('resize', debouncedHandleResize)
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)

        }
    })

    React.useEffect(() => {
        //If the site loads for the first time the animation will be null
        if (animationRef.current !== null) {
            animationRef.current.restart()
        }
        animationRef.current = anime({
            targets: ["el", ".el1", ".el2"],
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
                    <p className="header">Full Stack Developer</p>
                    <hr className="horizontalLine noHover"/>
                </Col>
                <Col/>
            </Row>
            <br/>
            <Row>
                <Col/>
                <Col xs={10} id="animationCol">
                    <div className="el">
                        <div className="el1">
                            <div className="el2"/>
                        </div>
                    </div>
                </Col>
                <Col/>
            </Row>
        </div>
    );
}

export default Header;
