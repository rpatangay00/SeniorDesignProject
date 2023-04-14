import "./HeroImgStyles.css"

import React from 'react'

import IntroImg from "../assets/introimg_2.webp"

import {Link} from "react-router-dom"

const heroImg = () => {
  return (
  <div className="hero">
      <div className="mask">
        <img className="intro-img"
        src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
         <p>Welcome to Tutoring Academy</p> 
         <h1>Reserve a tutor now.</h1>
         <div>
            <Link to ="/reservetutor" className="btn btn-light">Book Now</Link> 
         </div>
      </div>
  </div>
  );
};

export default heroImg