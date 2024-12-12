import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBookingsForDoctor, toggleDoctorStatus, completeBooking, toggleDoctorBooked } from '../../services/doctorService';
import { FaCalendarAlt, FaCheckCircle, FaClock, FaUserCheck, FaSignOutAlt } from 'react-icons/fa'; // Importing relevant icons
import './DoctorDashboard.css';

function DoctorDashboard() {
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState(null);
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [completedAppointments, setCompletedAppointments] = useState(0);
  const [activeAppointments, setActiveAppointments] = useState(0);
  const navigate = useNavigate();
  const doctor = JSON.parse(localStorage.getItem('doctor'));

  useEffect(() => {
    fetchBookings(doctor.id);
    setStatus(doctor.status);
  }, []);

  const fetchBookings = async (doctorId) => {
    try {
      const doctorBookings = await getBookingsForDoctor(doctorId);
      setBookings(doctorBookings);
      setTotalAppointments(doctorBookings.length);
      setCompletedAppointments(doctorBookings.filter(booking => booking.status === 'completed').length);
      setActiveAppointments(doctorBookings.filter(booking => booking.status === 'active').length);
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('doctor');
    navigate('/doctor-login');
  };

  const handleToggleStatus = async () => {
    try {
      const newStatus = status === 'active' ? 'inactive' : 'active';
      const updatedStatus = await toggleDoctorStatus(doctor.id, newStatus);
      setStatus(newStatus);
      doctor.status = newStatus;
      localStorage.setItem('doctor', JSON.stringify(doctor));
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleMarkComplete = async () => {
    try {
      const updatedStatus = await toggleDoctorBooked(doctor.id, 'no');
      doctor.booked = 'no';
      localStorage.setItem('doctor', JSON.stringify(doctor));
      setCompletedAppointments(completedAppointments + 1);
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const markBookingComplete = async (bookingId) => {
    try {
      const response = await completeBooking(bookingId);
      if (response.status === 200) {
        handleMarkComplete();
        setBookings(prevBookings =>
          prevBookings.map(booking =>
            booking.id === bookingId ? { ...booking, status: 'completed' } : booking
          )
        );
      } else {
        console.error('Failed to mark booking as complete:', response);
      }
    } catch (error) {
      console.error('Failed to mark booking as complete:', error);
    }
  };

  return (
    <div className="doctor-dashboard-container">
      <div className="doctor-dashboard-header">
        <div className="doctor-dashboard-title">
          <h2>Welcome, Dr. {doctor.fullname}</h2>
          <p>Status: <span className={`status-${status}`}>{status}</span></p>
        </div>
        <div className="doctor-dashboard-buttons">
          <button className="status-toggle-button" onClick={handleToggleStatus}>
            {status === 'active' ? 'Mark as Absent' : 'Mark as Active'}
          </button>
          <button className="logout-button" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      <div className="doctor-dashboard-summary">
        <div className="summary-item">
          <FaCalendarAlt className="summary-icon" />
          <h4>Total Appointments - {totalAppointments}</h4>
          
        </div>
        <div className="summary-item">
          <FaCheckCircle className="summary-icon" />
          <h4>Completed Appointments - {completedAppointments}</h4>
         
        </div>
        
        <div className="summary-item">
          <FaUserCheck className="summary-icon" />
          <h4>Doctor Availability <p className={status === 'active' ? 'available' : 'unavailable'}>{status === 'active' ? 'Available' : 'Not Available'}</p></h4>
          
        </div>
      </div>

      <div className="appointments-section">
        <h3>Upcoming Appointments</h3>
        <div className="appointments-container">
          {bookings.length === 0 ? (
            <p>No appointments available.</p>
          ) : (
            <div className="appointments-scrollable">
              {bookings.map((booking) => (
                <div className="appointment-card" key={booking.id}>
                  <h4>{booking.patientName || "Unknown Patient"}</h4>
                  <p>Appointment Type: {booking.appointmentType}</p>
                  <p>Price: {booking.price ? `$${booking.price}` : "N/A"}</p>
                  <p>Address: {booking.patientAddress || "No Address Provided"}</p>
                  <p>Email: {booking.patientEmail || "No Email Provided"}</p>
                  {booking.status !== 'completed' ? (
                    <button
                      className="appointment-complete-button"
                      onClick={() => markBookingComplete(booking.id)}
                    >
                      Mark as Complete
                    </button>
                  ) : <button
                  className="appointment-complete-button"
                >
                  Completed
                </button>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
