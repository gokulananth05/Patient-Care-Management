// src/services/bookingService.js

import axios from 'axios';

const API_URL = 'http://localhost:8082'; // replace with your actual backend URL

export const userLogin = async (credential) => {
  return axios.post(`${API_URL}/users/login`, credential);
};

export const userSignup = async (userData) => {
  return axios.post(`${API_URL}/users/signup`, userData);
};

// New function to fetch available doctors
export const fetchAllDoctors = async () => {
  try {
    const response = await axios.get(`${API_URL}/doctors/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching available doctors:", error);
    throw error;
  }
};

// bookingService.js
export const bookAppointment = async (appointmentData) => {
  try {
    const response = await fetch(`${API_URL}/booking/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });
    if (!response.ok) {
      throw new Error("Failed to book appointment");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};



