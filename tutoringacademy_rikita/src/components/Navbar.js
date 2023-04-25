import "./NavbarStyles.css"


import React, {useState} from "react"
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color,setColor]= useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100){
        setColor(true);
    }else{
        setColor(false);
    }
    };

window.addEventListener("scroll",changeColor)

  return (
    <div className={color ? "header header-bg": "header"}>
        <Link to="/">
            <img src="./TAlogo.png" alt="bug" height={75} /> 
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
              <Link to="/">Home</Link>
        </li>  
        <li>
              <Link to="/infotutor">Info Tutor</Link>
        </li>  
        <li>
              <Link to="/listtutors">List Tutors</Link>
        </li>  
        <li>
              <Link to="/myschedule">My Schedule</Link>
        </li>  
        <li>
              <Link to="/reservetutor">Reserve A Tutor</Link>
        </li>  
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}} /> ) : 
            (<FaBars size={20} style={{color: "#fff"}} />)}
            
           
        </div>
    </div>
  );
}

export default Navbar;