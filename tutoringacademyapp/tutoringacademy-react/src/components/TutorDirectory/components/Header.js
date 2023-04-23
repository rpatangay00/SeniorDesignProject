import React from "react";
import  Navbar  from '/Users/rahulsree/SeniorDesignProject/tutoringacademyapp/tutoringacademy-react/src/components/Navbar.js'
import logo from "../assets/images/ucf-logo.png";

function Header() {
    return (
        <div className="bg-white shadow text-gray-800">
            <header className="container max-w-6xl px-10 py-3 mx-auto flex justify-between items-center">
            <div className="flex items-center">
            
            <Navbar/>
        {/* <img className="mr-3" src={logo} alt="UCF School Logo"/> */}
        <h1 className="font-bold">Tutor Directory</h1>
    </div>
                {/* <a href="https://github.com/yarocruz/react-employee-directory" className="hover:text-yellow-500">Code</a> */}
            </header>
        </div>
    )
}

export default Header;