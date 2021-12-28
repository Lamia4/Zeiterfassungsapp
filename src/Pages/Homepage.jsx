import React from 'react';
import Navbar from "../NavBar";
import "./Home.css"

function Homepage() {
    return (

        <>
        <Navbar/>

        <div>

            <h1  className="m-4">Welcome to our Zeiterfassung App</h1>
            <div className="homeImg">
            <img  src="http://img.picturequotes.com/2/587/586807/time-to-work-quote-1-picture-quote-1.jpg" alt="picture" />
            </div>
        </div>
        
        </>
    )
}

export default Homepage
