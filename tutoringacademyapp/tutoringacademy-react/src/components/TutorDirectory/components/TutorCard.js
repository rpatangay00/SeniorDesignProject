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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
            {/* <p className="font text-md" style={{ color: 'black', textAlign: "center"}}>{tutor_id}</p> */}
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
        alternativeSubjects = resp.data.subjects;
        console.log("Tutor Info: " + JSON.stringify(resp.data));
        setTutorDetails(resp);
        setLoading(false);
    }

    retrieveData();
}, []);

if(loading) {
    return "loading...";
} else {
  var subjectsList = props.subject;
  for(var i = 0; i < tutorDetails.data.subjects.length; i++) {
    subjectsList = subjectsList + ", " + tutorDetails.data.subjects[i].subject;
  }

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
                <strong>Subject(s): </strong> {subjectsList}

                <p> </p>
                <strong>Availability: </strong> &nbsp; <DenseTable tutorDetails={tutorDetails}/>
                <strong>Ratings: </strong> &nbsp; <RatingsTable tutorDetails={tutorDetails}/>
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


function createData(day, from, to) {
  return { day, from, to };
}

function DenseTable(props) {
  let rows = [
  ];
  // console.log("Table TutorID: " + props.tutorDetails.data.tutor_id);

  for(var i = 0; i < props.tutorDetails.data.TutorAvailability.length; i++) {
      rows[i] = createData(props.tutorDetails.data.TutorAvailability[i].day, props.tutorDetails.data.TutorAvailability[i].from_time, props.tutorDetails.data.TutorAvailability[i].to_time);
        // console.log("availability: " + props.tutorDetails.data.TutorAvailability[i].day + ", " + props.tutorDetails.data.TutorAvailability[i].from_time + ", " + props.tutorDetails.data.TutorAvailability[i].to_time);
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left"><strong>Day</strong></TableCell>
            <TableCell align="left"><strong>From</strong>&nbsp;</TableCell>
            <TableCell align="left"><strong>To</strong>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="left">{row.from}</TableCell>
              <TableCell align="left">{row.to}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

function createRatingData(rating, review) {
  return { rating, review };
}

function RatingsTable(props) {
  let rows = [
  ];
  // console.log("Table TutorID: " + props.tutorDetails.data.tutor_id);

  for(var i = 0; i < props.tutorDetails.data.ratings.length; i++) {
      rows[i] = createRatingData(props.tutorDetails.data.ratings[i].rating, props.tutorDetails.data.ratings[i].review);
        // console.log("availability: " + props.tutorDetails.data.TutorAvailability[i].day + ", " + props.tutorDetails.data.TutorAvailability[i].from_time + ", " + props.tutorDetails.data.TutorAvailability[i].to_time);
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left"><strong>Score</strong></TableCell>
            <TableCell align="left"><strong>Review</strong>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rating}
              </TableCell>
              <TableCell align="left">"{row.review}"</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}


export default TutorCard;