import React, { useState, useMemo, useEffect } from 'react';
import Layout from "../components/TutorDirectory/components/Layout";
import Header from "../components/TutorDirectory/components/Header";
import Navigation from "../components/TutorDirectory/components/Navigation";
import TutorCardList from "../components/TutorDirectory/components/TutorCardList.js";
import Footer from "../components/TutorDirectory/components/Footer";
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function TutorDirectory() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sorted, setSorted] = useState(false);

    const [ data, setTutors ] = useState([]);

    //UseEffect(), useMemo(), Async/Await, Promises, 'let' for global variable, IIFE, types of function declerations, class components (componentDidMount, componentWillMount)
    useMemo( () => {
        const retrieveData = async () => {
            const resp = await axios.get('https://x4g0ddpp1f.execute-api.us-east-2.amazonaws.com/prod/show/tutors');
            // console.log("Response: " + JSON.stringify(resp.data.body));
            setTutors(resp.data.body);
            // console.log("Data.length: " + data.length);
        }

        retrieveData();
    }, []);

    

    function handleSearchTerm(event)  {
        setSearchTerm(event.target.value)
    }

    function handleSortByFirstName() {
        if (!sorted) {
            setTutors(data.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1));
            setSorted(true);
        } else {
            setTutors(data.sort((a, b) => (a.first_name > b.first_name) ? -1 : 1));
            setSorted(false);
        }
    }

    function handleSortByLastName() {
        if (!sorted) {
            setTutors(data.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1));
            setSorted(true);
        } else {
            setTutors(data.sort((a, b) => (a.last_name > b.last_name) ? -1 : 1));
            setSorted(false);
        }
    }

    function handleSortBySubject() {
        if (!sorted) {
            setTutors(data.sort((a, b) => (a.subject > b.subject) ? 1 : -1));
            setSorted(true);
        } else {
            setTutors(data.sort((a, b) => (a.subject > b.subject) ? -1 : 1));
            setSorted(false);
        }
    }

    const filteredTutors = data.filter(tutor => 
        (tutor.first_name.toLowerCase().startsWith(searchTerm.toLowerCase()) || 
        tutor.last_name.toLowerCase().startsWith(searchTerm.toLowerCase()) || 
        (tutor.first_name.concat(" ").concat(tutor.last_name)).toLowerCase().startsWith(searchTerm.toLowerCase()) ||
        tutor.subject.toLowerCase().startsWith(searchTerm.toLowerCase()))
        );

    return (
        <div>
            <Header/>
            <Layout>
                <h1 className="title text-5xl text-gray-800 mt-16">Tutor Directory</h1>
                {/* <MultipleSelect/> */}
                <p style={{ color: 'black' }}>Sort by name or subject, search for specific tutors, and view detailed information.</p>
                <Navigation
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                    handleSortByFirstName={handleSortByFirstName}
                    handleSortByLastName={handleSortByLastName}
                    handleSortBySubject={handleSortBySubject}
                />

                <TutorCardList data={filteredTutors}/>

                <Footer/>
            </Layout>
        </div>
    )
}



// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };


// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// function MultipleSelect() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   const [tutorNames, setTutorNames] = useState([ ]);
//   const [loading, setLoading] = useState(true);

//       //UseEffect(), useMemo(), Async/Await, Promises, 'let' for global variable, IIFE, types of function declerations, class components (componentDidMount, componentWillMount)
//       var alternativeSubjects = null;
//     useEffect( () => {
//     const retrieveData = async () => {
//         const resp = await axios.get('https://x4g0ddpp1f.execute-api.us-east-2.amazonaws.com/prod/show/tutors/');
//         console.log("Tutor Info (dropdown): " + JSON.stringify(resp.data.body[0]));
//         alternativeSubjects = resp.data.subjects;
//         setTutorNames(resp);
//         setLoading(false);
//     }

//     retrieveData();
// }, []);
//     let tutorNames_list = [];
//     if(loading == false) {
        
//         for(var i = 0; i < tutorNames.data.body.length; i++) {
//             tutorNames_list[i] = tutorNames.data.body[i].first_name + " " + tutorNames.data.body[i].last_name;
//         }

//         console.log(tutorNames_list.toString());
//     }
//     let uniqueTutorList = [...new Set(tutorNames_list)];


//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-name-label">Name</InputLabel>
//         <Select
//           labelId="demo-multiple-name-label"
//           id="demo-multiple-name"
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Name" />}
//           MenuProps={MenuProps}
//         >
//           {uniqueTutorList.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

export default TutorDirectory;