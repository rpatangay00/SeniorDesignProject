import React from "react";
import TutorCard from "./TutorCard.js";


function TutorCardList ({ data }) { // another fancy destructuring to avoid typing props.data.map down below
    
    return (
        data.map(tutor => (
            <TutorCard
                key={tutor.tutor_id}
                tutor_id = {tutor.tutor_id}
                // image={tutor.image}
                first_name={tutor.first_name}
                last_name={tutor.last_name}
                grade={tutor.grade}
                subject={tutor.subject}
            />
            ))
    )
}

export default TutorCardList;