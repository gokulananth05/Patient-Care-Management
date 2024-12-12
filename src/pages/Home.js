import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="navbar">
        <h1 className="logo">Patient Care Management</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/user-login">Patient</Link>
          <Link to="/doctor-login">Doctor</Link>
          <Link to="/admin-login">Admin</Link>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to the Patient Care Management</h2>
        <p>Your one-stop platform for healthcare access, whether you’re an Admin, Doctor, or User.</p>
        <div className="cta-buttons">
          <Link to="/user-signup" className="btn primary">Patient</Link>
          <Link to="/admin-login" className="btn secondary">Admin</Link>
        </div>
      </section>

      <section className="services">
        <h3>Our Services</h3>
        <div className="service-cards">
          <div className="card">
            <h4>For Admins</h4>
            <p>Manage doctor profiles, user data, and monitor system health seamlessly.</p>
            <Link to="/admin-login" className="btn">Admin Panel</Link>
          </div>
          <div className="card">
            <h4>For Doctors</h4>
            <p>View patient information, set your availability, and manage your appointments.</p>
            <Link to="/doctor-login" className="btn">Doctor Dashboard</Link>
          </div>
          <div className="card">
            <h4>For Users</h4>
            <p>Sign up to book appointments, access healthcare information, and more.</p>
            <Link to="/user-login" className="btn">User Portal</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Patient Care Management. All rights reserved.</p>
        <div className="footer-links">
          {/* <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link> */}
        </div>
      </footer>
    </div>
  );
}

export default Home;
