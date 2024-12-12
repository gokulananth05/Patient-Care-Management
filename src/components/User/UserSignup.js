import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userSignup } from '../../services/bookingService';
import NavbarHome from '../../pages/Navbar/Navbar';
import './UserSignup.css';

function UserSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;
    const success = await userSignup(formData);
    if (success) {
      alert('Thank you for registering with us!');
      navigate('/user-login');
    } else {
      alert('Signup failed');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <NavbarHome />
      <div className="new-signup-page">
        <div className="new-signup-background">
          <div className="new-signup-content">
            <div className="new-signup-form-container">
              <h2 className="new-signup-heading">Create Your Account</h2>
              <p className="new-signup-subtext">
                Join us for seamless healthcare management. Register to start accessing exclusive features.
              </p>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                value={formData.name}
                className={`new-signup-input ${errors.name ? 'input-error' : ''}`}
              />
              {errors.name && <p className="new-error-message">{errors.name}</p>}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                value={formData.email}
                className={`new-signup-input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && <p className="new-error-message">{errors.email}</p>}

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                className={`new-signup-input ${errors.password ? 'input-error' : ''}`}
              />
              {errors.password && <p className="new-error-message">{errors.password}</p>}

              <textarea
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
                value={formData.address}
                className={`new-signup-input ${errors.address ? 'input-error' : ''}`}
              ></textarea>
              {errors.address && <p className="new-error-message">{errors.address}</p>}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (10 digits)"
                onChange={handleChange}
                value={formData.phone}
                className={`new-signup-input ${errors.phone ? 'input-error' : ''}`}
              />
              {errors.phone && <p className="new-error-message">{errors.phone}</p>}

              <button onClick={handleSignup} className="new-signup-button">
                Register
              </button>
              <p className="new-login-link">
                Already have an account? <Link to="/user-login" className="new-link-text">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSignup;
