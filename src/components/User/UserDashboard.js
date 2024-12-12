import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllDoctors, bookAppointment } from '../../services/bookingService';
import './UserDashboard.css'; // Make sure to import the new CSS file

function UserDashboard() {
  const [doctors, setDoctors] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const data = await fetchAllDoctors();
        const filteredDoctors = data.filter(doctor => doctor.status === "active" && doctor.booked === "no");
        setDoctors(filteredDoctors);
      } catch (error) {
        console.error("Failed to load doctors:", error);
      }
    };
    getDoctors();
  }, []);

  const handleBooking = async (appointmentType, doctorId, price) => {
    if (user) {
      try {
        const selectedDoctor = doctors.find(doctor => doctor.id === doctorId);
        const bookingData = {
          patientId: user.id,
          patientName: user.name,
          patientAddress: user.address,  
          patientEmail: user.email,      
          appointmentType: appointmentType,
          doctorId: doctorId,
          doctorName: selectedDoctor ? selectedDoctor.fullname : '', 
          specialty: selectedDoctor ? selectedDoctor.specialty : '',  
          price: price
        };

        const bookingResponse = await bookAppointment(bookingData);
        const bookingId = bookingResponse.id; 
        const bookingDetails = {
          id: bookingId,
          price: price
        };
        localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
        navigate("/payment");
      } catch (error) {
        console.error("Failed to book appointment:", error);
        alert("Error booking appointment.");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/user-login");
  };

  return (
    <div className="user-dashboard-container">
      <header className="user-dashboard-header">
        <h2>Welcome, {user ? user.name : 'Loading...'}</h2>
        <div className="user-dashboard-actions">
          <button 
            onClick={() => navigate("/user-appointments")}
            className="user-dashboard-btn"
          >
            View My Appointments
          </button>
          <button 
            onClick={handleLogout}
            className="user-dashboard-btn logout-btn"
          >
            Logout
          </button>
        </div>
      </header>

      <section className="user-dashboard-intro">
        <div className="intro-text">
          <h3>Your Health, Our Priority</h3>
          <p>Book appointments with top doctors for either home visits or hospital visits at your convenience.</p>
        </div>
        <img src="./doctor.jpg" alt="Doctor" className="intro-img" />
      </section>

      <section className="available-doctors">
        <h3>Available Doctors for Appointment</h3>
        <div className="doctors-list">
          {doctors.length === 0 ? (
            <p>No doctors available for booking.</p>
          ) : (
            doctors.map((doctor) => (
              <div key={doctor.id} className="doctor-card">
                <img src={doctor.image || "./136-1364507_we-do-electronic-rx-doctor-avatar-icon.png"} alt={doctor.fullname} className="doctor-img" />
                <h4>Dr. {doctor.fullname}</h4>
                <p><strong>Specialty:</strong> {doctor.specialty}</p>
                <p><strong>Price (Home Visit):</strong> Rs. {doctor.pricehomevisit}</p>
                <p><strong>Price (Hospital Visit):</strong> Rs. {doctor.pricehospitalvisit}</p>
                <p className="availability-status"><strong>Available</strong></p>

                <button
                  className="book-btn"
                  onClick={() => handleBooking("home", doctor.id, doctor.pricehomevisit)}
                >
                  Book Home Visit
                </button>
                <button
                  className="book-btn"
                  onClick={() => handleBooking("hospital", doctor.id, doctor.pricehospitalvisit)}
                >
                  Book Hospital Visit
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default UserDashboard;
