import React from "react";
import anime from 'animejs';

function HeaderAnimation() {

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
        <div className="square1">
            <div className="square2">
                <div className="square3"/>
            </div>
        </div>
    );
}

export default HeaderAnimation;
