import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookingConfirmation() {
  const navigate = useNavigate();

  const handleReturnToDashboard = () => {
    navigate('/user-dashboard');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f8f7',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '40px',
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%',
      }}>
        <img 
          src="https://img.icons8.com/ios-glyphs/90/26e07f/checkmark--v1.png" 
          alt="Booking Successful"
          style={{ width: '70px', marginBottom: '20px' }}
        />
        <h2 style={{ color: '#4CAF50', fontSize: '28px', marginBottom: '15px' }}>
          Booking Confirmed!
        </h2>
        <p style={{
          color: '#555',
          fontSize: '18px',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Thank you for booking with us. Your appointment has been successfully scheduled.
        </p>
        <button 
          onClick={handleReturnToDashboard}
          style={{
            padding: '12px 25px',
            backgroundColor: '#4CAF50',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease'
          }}
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}

export default BookingConfirmation;
