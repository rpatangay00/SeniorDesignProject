//current reference: https://stackblitz.com/edit/react-http-get-request-examples-axios?file=App%2FGetRequestHooks.jsx,App%2FApp.jsx 
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// function GetRequestHooks() {
//     const [totalReactPackages, setTotalReactPackages] = useState(null);
//     useEffect(() => {
//         // GET request using axios inside useEffect React hook
//         axios.get('https://x4g0ddpp1f.execute-api.us-east-2.amazonaws.com/prod/show/tutors')
//             .then(response => {
//                 const json = response.data;
//                 console.log(JSON.stringify(json))
//                 setTotalReactPackages(JSON.stringify(json))});
//     // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []);

//     return (
//         <div className="card text-center m-3">
//             <h5 className="card-header">GET Request with React Hooks</h5>
//             <div className="card-body">
//                 Total react packages: {totalReactPackages}
//             </div>
//         </div>
//     );
// }

// export { GetRequestHooks };

// const axios = require('axios');

export async function getAllTutors() {
    try{
        const response = await axios.get('https://x4g0ddpp1f.execute-api.us-east-2.amazonaws.com/prod/show/tutors');
        console.log("getAllTutors(): " + JSON.stringify(response.data.body));
        return response;
    }catch(error) {
        return [];
    }
    
}
/*
    1. What is asynchronous code — await, promise functionalities?
    2. What does .then() do?
*/