import "./FooterStyles.css"

import React from 'react'

import {FaSchool} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
       <div className="footer-container">
           <div className="left">
               <div className = "location">
                   <FaSchool size={20} style={{color:"white",marginRight:"2rem"}}/>
                   <div>
                       <p>With the click of a button,</p>
                       <p>reserve a lesson with a tutor.</p>   
                   </div>
               </div>
           </div>
           <div className="right">
               <h4>About the company</h4>
               <p>blah blah blah blah blah blah blah blah blah blah</p>
           </div>
        </div> 
    </div>
  );
}

export default Footer