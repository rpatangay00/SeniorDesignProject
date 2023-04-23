import React from "react";

 function TutorCard({ first_name, last_name, grade, subject}) { // it's probably easier to not destructure for an example like this, but it's just for practice
    return (
        <div className="md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300" >
            {/* <img
                style={{ maxWidth: "60px"}}
                className="rounded-full shadow-md border border-gray-300"
                src={image}
                alt="employee"
            /> */}
            <p className="font text-md" style={{ color: 'black', textAlign: "center"}}>{first_name}</p>
            <p className="font text-md" style={{ color: 'black', textAlign: "center" }}>{last_name}</p>
            <p style={{ color: 'black', textAlign: "center" }}>{grade}</p>
            <p style={{ color: 'black', textAlign: "center" }}>{subject}</p>
        </div>
    )
}

export default TutorCard;