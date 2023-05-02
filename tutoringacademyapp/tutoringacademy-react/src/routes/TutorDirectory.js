// import React from 'react'

// const ListTutors = () => {
//   return (
//     <div>All Tutors</div>
//   )
// }

// export default ListTutors

import React, { useState, useMemo } from 'react';
import Layout from "../components/TutorDirectory/components/Layout";
import Header from "../components/TutorDirectory/components/Header";
import Navigation from "../components/TutorDirectory/components/Navigation";
import TutorCardList from "../components/TutorDirectory/components/TutorCardList.js";
import Footer from "../components/TutorDirectory/components/Footer";
import axios from 'axios';

function TutorDirectory() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sorted, setSorted] = useState(false);

    const [ data, setTutors ] = useState([]);

    //UseEffect(), useMemo(), Async/Await, Promises, 'let' for global variable, IIFE, types of function declerations, class components (componentDidMount, componentWillMount)
    useMemo( () => {
        const retrieveData = async () => {
            const resp = await axios.get('https://x4g0ddpp1f.execute-api.us-east-2.amazonaws.com/prod/show/tutors');
            console.log("Response: " + JSON.stringify(resp.data.body));
            setTutors(resp.data.body);
            // console.log("Data.length: " + data.length);
        }

        retrieveData();
    }, []);

    

    function handleSearchTerm(event)  {
        setSearchTerm(event.target.value)
    }

    function handleSortByFirstName() {
        // sort array ascending or descending by first name
        if (!sorted) {
            setTutors(data.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1));
            setSorted(true);
        } else {
            setTutors(data.sort((a, b) => (a.first_name > b.first_name) ? -1 : 1));
            setSorted(false);
        }
    }

    function handleSortByLastName() {
        // sort array ascending or descending by first name
        if (!sorted) {
            setTutors(data.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1));
            setSorted(true);
        } else {
            setTutors(data.sort((a, b) => (a.last_name > b.last_name) ? -1 : 1));
            setSorted(false);
        }
    }

    function handleSortBySubject() {
        // sort array ascending or descending by dept name
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
                <p className="mb-16 text-md" style={{ color: 'black' }}>Search for an tutor or sort by Name or Category.</p>
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

export default TutorDirectory;