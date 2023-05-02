import React, {useState, useMemo, useEffect} from "react";
// import {ExpandedTutorCard} from "./ExpandedTutorCard.js"
// import ExpandedTutorCard from "./ExpandedTutorCard.js";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';

//"key" is an internal react variable that ideally shouldn't be accessed since it could be changed by the language developers
 function TutorCard({tutor_id, first_name, last_name, grade, subject}) {
    return (
        <div className="md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300"  >
            {/* <img
                style={{ maxWidth: "60px"}}
                className="rounded-full shadow-md border border-gray-300"
                src={image}
                alt="employee"
            /> */}
            <p className="font text-md" style={{ color: 'black', textAlign: "center"}}>{tutor_id}</p>
            <p className="font text-md" style={{ color: 'black', textAlign: "center"}}>{first_name}</p>
            <p className="font text-md" style={{ color: 'black', textAlign: "center" }}>{last_name}</p>
            <p style={{ color: 'black', textAlign: "center" }}>{grade}</p>
            <p style={{ color: 'black', textAlign: "center" }}>{subject}</p>
            <AlertDialogSlide tutorID = {tutor_id} firstName = {first_name} lastName = {last_name} grade = {grade} subject = {subject} />
        </div>
    )
}




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [tutorDetails, setTutorDetails] = useState([ ]);
  const [loading, setLoading] = useState(true);

      //UseEffect(), useMemo(), Async/Await, Promises, 'let' for global variable, IIFE, types of function declerations, class components (componentDidMount, componentWillMount)
      var alternativeSubjects = null;
    useEffect( () => {
    const retrieveData = async () => {
        const resp = await axios.get('https://x4g0ddpp1f.execute-api.us-east-2.amazonaws.com/prod/show/tutors/' + props.tutorID);
        console.log("Tutor Info Response: " + JSON.stringify(resp.data));
        console.log("AltSubjects: " + JSON.stringify(resp.data.subjects[0]));
        alternativeSubjects = resp.data.subjects;
        setTutorDetails(resp);
        setLoading(false);
    }

    retrieveData();
}, []);

if(loading) {
    return "loading...";
} else {
    return (
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            {'>'}
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            fullWidth = {true}
          >
            <DialogTitle>{props.firstName + " " + props.lastName}</DialogTitle>
            <DialogContent>
              <DialogContentText >
                <strong>Level: </strong> {props.grade} <br/>
                <strong>Subject(s): </strong> {props.subject} {(tutorDetails.data.subjects).map(sub => <div> , {JSON.stringify(sub.subject)} </div>)}
                {/* <strong>Alternative Subject: </strong> {JSON.stringify(tutorDetails.data.subjects[0].subject)} <br/> */}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}

}
export default TutorCard;

/*
1. TutorCard - Pop Up Window with Details
    > Profile Picture
2. Modify template to match homepage
3. Appointment email generation
*/