import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userLogin } from '../../services/bookingService';
import NavbarHome from '../../pages/Navbar/Navbar';
import './UserLogin.css';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return false;
    }
    setError('');
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    const response = await userLogin({ email, password });
    const userDetails = response.data;
    if (userDetails && userDetails !== 'invalid') {
      localStorage.setItem("user", JSON.stringify(userDetails));
      navigate('/user-dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <NavbarHome />
      <div className="new-login-page">
        <div className="new-login-container">
          <div className="new-login-image-section">
            <img
              src="./istockphoto-1129704406-612x612.jpg"
              alt="Healthcare Login"
              className="new-login-image"
            />
          </div>
          <div className="new-login-form-section">
            <h2 className="new-login-heading">Welcome Back!</h2>
            <p className="new-login-subtext">
              Access your account to manage your bookings, view medical records, and more.
            </p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="new-login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="new-login-input"
            />
            {error && <p className="new-error-message">{error}</p>}
            <button onClick={handleLogin} className="new-login-button">
              Login
            </button>
            <p className="new-signup-prompt">
              Don’t have an account? <Link to="/user-signup" className="new-signup-link">Sign Up</Link>
            </p>
          </div>
        </div>

        <div className="new-benefits-section">
          <h3 className="new-benefits-heading">Why Choose Us?</h3>
          <div className="new-benefit-cards">
            <div className="new-benefit-card">
              <h4 className="new-benefit-title">24/7 Access</h4>
              <p className="new-benefit-description">
                Access your medical records and manage your appointments anytime, anywhere.
              </p>
            </div>
            <div className="new-benefit-card">
              <h4 className="new-benefit-title">Personalized Care</h4>
              <p className="new-benefit-description">
                Get personalized recommendations and tailored care plans based on your health data.
              </p>
            </div>
            <div className="new-benefit-card">
              <h4 className="new-benefit-title">Secure Data</h4>
              <p className="new-benefit-description">
                Your data is protected with advanced security measures, ensuring privacy and confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
