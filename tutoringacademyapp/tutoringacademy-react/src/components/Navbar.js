import "/Users/rahulsree/SeniorDesignProject/tutoringacademyapp/tutoringacademy-react/src/components/NavbarStyles.css"

import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


//Description: This hides the navbar while scrolling down.
var fn = "Joe", ln = "Swan";
const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 20) {
      setShow(true);
    } else {
      setShow(false);
    }
  };  

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show}`}>

        {/* <Link to="/">
            <img src="./TAlogo.png" alt="React Logo" height={25} /> 
        </Link> */}


        <ul className={click ? "nav-menu active" : "nav-menu"}>
          
        <div>
         <img style={{ width: 40, height: 40 }} src={"./TAlogo.png"} alt="React Logo" />
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
              <Link to="/">Home</Link>
        </li>  
        <li>
              <Link to="/infotutor">Info Tutor</Link>
        </li>  
        <li>
              <Link to="/tutor-directory">Tutor Directory</Link>
        </li>  
        <li>
              <Link to="/myschedule">My Schedule</Link>
        </li>  
        <li>
              <Link to="/reservetutor">Reserve A Tutor</Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li>
              <Link to="/">User: {fn} {ln}</Link>
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