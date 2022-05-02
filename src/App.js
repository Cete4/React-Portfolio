import React, {useEffect} from "react";
import './App.css'
import ReactGA from 'react-ga';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'dotenv/config';
import Home from "./Components/Home";

dotenv.config();
const TRACKING_ID = process.env.GOOGLE_ANALYTICS_KEY; // OUR_TRACKING_ID


function App() {

    // Initialize Google Analytics
    ReactGA.initialize(TRACKING_ID);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="React-Portfolio" element={<Home/>}/>
                <Route path="React-Portfolio/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
