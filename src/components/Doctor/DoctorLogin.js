import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { doctorLogin } from '../../services/doctorService';
import './DoctorLogin.css';
import loginImage from './bgspec.jpg';
import NavbarHome from '../../pages/Navbar/Navbar';

function DoctorLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }
    const success = await doctorLogin(username, password);
    if (success) {
      navigate('/doctor-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <NavbarHome />
      <div className="doctor-login-container">
        <div className="doctor-login-content">
          <div className="doctor-login-image">
            <img src={loginImage} alt="Doctor Login Background" className="background-image" />
          </div>
          <div className="doctor-login-form-section">
            <h2 className="login-title">Doctor Login</h2>
            <p className="login-description">
              Welcome to the Doctor Portal. Please log in with your credentials to access the dashboard and manage your appointments, view patient records, and more.
            </p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button type="button" onClick={handleLogin} className="login-button">
              Login
            </button>
            <Link to="/" className="back-to-home-link">Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorLogin;
