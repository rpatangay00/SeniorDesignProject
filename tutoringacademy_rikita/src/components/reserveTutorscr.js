import "./reserveTutorscr.css"


import React, { useState } from 'react';

function ReserveTutorPage() {
  const [formData, setFormData] = useState({
    tutor_id: '',
    student_id: '',
    date: '',
    subject_id: '',
    time: '',
    duration: '',
    status: 'Incomplete'
  });

  const [errorMessage, setErrorMessage] = useState('');

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Send reservation data to API endpoint
    fetch('https://x4g0ddpp1f.execute-api.us-east-2.amazonaws.com/prod/Create/reservations', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ body: formData }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create reservation');
        }
        // Reservation created successfully
        alert('Reservation created!');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }

  return (
    <div className="form-container">
      <h2>Reserve a Tutor</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="tutor_id">Tutor ID:</label>
        <input type="number" id="tutor_id" name="tutor_id" value={formData.tutor_id} onChange={handleInputChange} required />

        <label htmlFor="student_id">Student ID:</label>
        <input type="number" id="student_id" name="student_id" value={formData.student_id} onChange={handleInputChange} required />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required />

        <label htmlFor="subject_id">Subject ID:</label>
        <input type="number" id="subject_id" name="subject_id" value={formData.subject_id} onChange={handleInputChange} required />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} required />

        <label htmlFor="duration">Duration (hours):</label>
        <input type="number" id="duration" name="duration" value={formData.duration} onChange={handleInputChange} required />

        <button type="submit">Reserve Tutor</button>
      </form>
    </div>
  );
}

export default ReserveTutorPage;


