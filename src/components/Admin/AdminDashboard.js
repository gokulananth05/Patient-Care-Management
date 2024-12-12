import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [doctorData, setDoctorData] = useState({
    fullname: '',
    username: '',
    pass: '',
    pricehomevisit: '',
    pricehospitalvisit: '',
    specialty: ''
  });
  const [activeSection, setActiveSection] = useState('addDoctor');
  const [doctors, setDoctors] = useState([]);
  const [users, setUsers] = useState([]);
  
  const handleChange = (e) => {
    setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
  };

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8082/admin/doctors');
      setDoctors(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching doctors');
    }
  };

  const fetchPatient = async () => {
    try {
      const response = await axios.get('http://localhost:8082/users/all');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching patients');
    }
  };

  useEffect(() => {
    if (activeSection === 'allDoctors') {
      fetchDoctors();
    }
    if (activeSection === 'users') {
      fetchPatient();
    }
  }, [activeSection]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !doctorData.fullname ||
      !doctorData.username ||
      !doctorData.pass ||
      !doctorData.pricehomevisit ||
      !doctorData.pricehospitalvisit ||
      !doctorData.specialty
    ) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      await axios.post('http://localhost:8082/admin/createDoctor', doctorData);
      alert('Doctor added successfully');
      setActiveSection('allDoctors');
    } catch (error) {
      console.error(error);
      alert('Error adding doctor');
    }
  };

  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'addDoctor':
        return (
          <div className="form-container">
            <h2>Add New Doctor</h2>
            <form onSubmit={handleSubmit} className="doctor-form">
              <input
                type="text"
                name="fullname"
                onChange={handleChange}
                value={doctorData.fullname}
                placeholder="Full Name"
                className="input-field"
                required
              />
              <input
                type="text"
                name="username"
                onChange={handleChange}
                value={doctorData.username}
                placeholder="Username"
                className="input-field"
                required
              />
              <input
                type="password"
                name="pass"
                onChange={handleChange}
                value={doctorData.pass}
                placeholder="Password"
                className="input-field"
                required
              />
              <input
                type="number"
                name="pricehomevisit"
                onChange={handleChange}
                value={doctorData.pricehomevisit}
                placeholder="Price for Home Visit"
                className="input-field"
                required
                min="0"
                step="0.01"
              />
              <input
                type="number"
                name="pricehospitalvisit"
                onChange={handleChange}
                value={doctorData.pricehospitalvisit}
                placeholder="Price for Hospital Visit"
                className="input-field"
                required
                min="0"
                step="0.01"
              />
              <select
                name="specialty"
                onChange={handleChange}
                value={doctorData.specialty}
                className="input-field"
                required
              >
                <option value="">Select Specialty</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Pediatrics">Pediatrics</option>
              </select>
              <button type="submit" className="submit-button">Add Doctor</button>
            </form>
          </div>
        );
      case 'allDoctors':
        return (
          <div className="doctor-list">
            <h2>All Doctors</h2>
            <div className="scrollable-table">
              <table className="doctor-table">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Specialty</th>
                    <th>Home Visit Price</th>
                    <th>Hospital Visit Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.length > 0 ? (
                    doctors.map((doctor) => (
                      <tr key={doctor.id}>
                        <td>{doctor.fullname}</td>
                        <td>{doctor.username}</td>
                        <td>{doctor.specialty}</td>
                        <td>{doctor.pricehomevisit}</td>
                        <td>{doctor.pricehospitalvisit}</td>
                        <td className="status">{doctor.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr className="no-doctors">
                      <td colSpan="6">No doctors available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="user-list">
            <h2>Users</h2>
            <div className="scrollable-table">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                      </tr>
                    ))
                  ) : (
                    <tr className="no-users">
                      <td colSpan="4">No users available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="navbar-admin">
        <div className="navbar-content-admin">
          <h1>Admin Dashboard</h1>
          <nav className="nav-links-admin">
            <button onClick={() => setActiveSection('addDoctor')} className={activeSection === 'addDoctor' ? 'active' : ''}>Add Doctor</button>
            <button onClick={() => setActiveSection('allDoctors')} className={activeSection === 'allDoctors' ? 'active' : ''}>Doctors</button>
            <button onClick={() => setActiveSection('users')} className={activeSection === 'users' ? 'active' : ''}>Users</button>
            <button onClick={logout} className="logout-button">Logout</button>
          </nav>
        </div>
      </header>
      <main className="content">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
