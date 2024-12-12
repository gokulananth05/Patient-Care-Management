import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls
import './UserAppointments.css'; // Include the CSS for styling

function UserAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      fetchAppointments(user.id);
    }
  }, []);

  const fetchAppointments = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8082/booking/user/${userId}`);
      setAppointments(response.data);
    } catch (err) {
      setError('Error fetching appointments');
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="appointments-container">
      <button className="back-button" onClick={handleBack}>
        &lt; Back
      </button>
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="appointments-list">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <h3>Appointment with Dr. {appointment.doctorName}</h3>
              <p><strong>Specialty:</strong> {appointment.specialty}</p>
              <p><strong>Appointment Type:</strong> {appointment.appointmentType}</p>
              <p><strong>Price:</strong> Rs. {appointment.price}</p>
              <p><strong>Status:</strong> {appointment.status || 'Pending'}</p>
              <p><strong>Patient:</strong> {appointment.patientName}</p>
              <p><strong>Patient Address:</strong> {appointment.patientAddress}</p>
              <p><strong>Patient Email:</strong> {appointment.patientEmail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserAppointments;
