import "./NavbarStyles.css"


import React, {useState, useEffect, useCallback, color} from "react";
import { Link } from "react-router-dom";


import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

//     const [color,setColor]= useState(false);
//     const changeColor = () =>{
//         const currentScrollPos = window.scrollY;
//         if(window.scrollY > ){
//         setVisible(false);
//     }else{
//         setColor(false);
//     }
//     };

// // window.addEventListener("scroll",changeColor)

//Description: This hides the navbar while scrolling down.
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
        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}} /> ) : 
            (<FaBars size={20} style={{color: "#fff"}} />)}
        
        
        </div>
    </div>
  );
}

export default Navbar;