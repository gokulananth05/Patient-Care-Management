import axios from 'axios';

const API_URL = 'http://localhost:8082';
export const doctorLogin = async (username, pass) => {
  try {
    const response = await axios.post('http://localhost:8082/doctors/login', { username, pass });
    localStorage.setItem('doctor', JSON.stringify(response.data));
    return response.data; 
  } catch (error) {
    console.error('Login failed:', error);
    return null; 
  }
};
  
export const getBookingsForDoctor = async (doctorId) => {
  try {
    const response = await axios.get(`${API_URL}/booking/doctor/${doctorId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch bookings:', error);
    return [];
  }
};

export const toggleDoctorStatus = async (doctorId, status) => {
  try {
    const response = await axios.post(`${API_URL}/doctors/${doctorId}/status`, { status });
    return response.data.status;
  } catch (error) {
    console.error('Failed to update status:', error);
    throw error;
  }
};
export const toggleDoctorBooked = async (doctorId, booked) => {
  try {
    const response = await axios.post(`${API_URL}/doctors/${doctorId}/booked`, { booked });
    return response.data.status;
  } catch (error) {
    console.error('Failed to update status:', error);
    throw error;
  }
};



export const completeBooking = async (bookingId) => {
  try {
    const response = await axios.post(`${API_URL}/booking/${bookingId}/complete`);
    return response;
  } catch (error) {
    console.error('Error marking booking as complete:', error);
    throw error;
  }
};
  