import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import { FaUserShield } from 'react-icons/fa';
import NavbarHome from '../../pages/Navbar/Navbar';
function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validUsername = 'admin';
  const validPassword = 'admin123';

  const handleLogin = () => {
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      if (username === validUsername && password === validPassword) {
        alert("Login successful! Redirecting to the admin dashboard...");
        navigate('/admin-dashboard');
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className='home-page'>
      <NavbarHome />
    <div className="admin-login-page">
      <form className="admin-login-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-header">
          <FaUserShield className="admin-icon" />
          <h2 className="admin-login-title">Admin Login</h2>
        </div>
        <p className="admin-info-text">
          Please enter your credentials to access the admin dashboard.
        </p>

        <section className="input-group">
          <input
            type="text"
            className="admin-input"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="username" className="admin-label">
            Username
          </label>
        </section>

        <section className="input-group">
          <input
            type="password"
            className="admin-input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password" className="admin-label">
            Password
          </label>
        </section>

        {error && <p className="error-message">{error}</p>}

        <button type="button" className="admin-btn" onClick={handleLogin} disabled={isLoading}>
          {isLoading ? <span className="spinner"></span> : 'Login'}
        </button>

        <a href="/" className="back-home-link">
          Back to Home
        </a>
      </form>
    </div>
    </div>
  );
}

export default AdminLogin;
