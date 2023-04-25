import React from 'react';
import "./index.css";
import Home from './routes/Home'
import ListTutors from './routes/ListTutors'
import InfoTutor from './routes/InfoTutor'
import MySchedule from './routes/MySchedule'
import ReserveTutor from './routes/ReserveTutor'

import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/listtutors" element={<ListTutors/>}/>
      <Route path="/infotutor" element={<InfoTutor/>}/>
      <Route path="/myschedule" element={<MySchedule/>}/>
      <Route path="/reservetutor" element={<ReserveTutor/>}/>
    </Routes>
    </>
  );
}

export default App;
