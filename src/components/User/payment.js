import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';  // Assuming you will add custom styles

const PaymentPage = () => {
    const history = useNavigate();
    const [paymentData, setPaymentData] = useState({
        bookingId: null,
        amount: 0,
        paymentMethod: '',
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
        if (bookingDetails) {
            setPaymentData((prevData) => ({
                ...prevData,
                bookingId: bookingDetails.id,
                amount: bookingDetails.price,
            }));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePayment = async () => {
        const { paymentMethod, cardHolderName, cardNumber, expiryDate, cvv } = paymentData;

        // Validation
        if (paymentMethod !== 'Card') {
            setError('Please select Card as the payment method.');
            return;
        }
        if (!cardHolderName || !cardNumber || !expiryDate || !cvv) {
            setError('Please fill in all card details.');
            return;
        }
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            setError('Card number must be a 16-digit number.');
            return;
        }
        if (cvv.length !== 3 || isNaN(cvv)) {
            setError('CVV must be a 3-digit number.');
            return;
        }

        setError('');
        setLoading(true);

        try {
        
                history(`/booking-confirmation`);
            
        } catch (error) {
            console.error('Error initiating payment:', error);
            setError('An error occurred while processing the payment.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="payment-page" style={{marginTop:"10%"}}>
            <h1 className="payment-title">Payment Details</h1>
            <div className="payment-summary">
                <h3>Booking ID: {paymentData.bookingId}</h3>
                <h3>Amount: ${paymentData.amount}</h3>
            </div>

            <div className="payment-method">
                <label htmlFor="paymentMethod">Select Payment Method</label>
                <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={paymentData.paymentMethod}
                    onChange={handleInputChange}
                    className="payment-method-select"
                >
                    <option value="">--Select--</option>
                    <option value="Card">Card</option>
                </select>
            </div>

            {paymentData.paymentMethod === 'Card' && (
                <div className="card-details">
                    <label htmlFor="cardHolderName">Card Holder Name</label>
                    <input
                        type="text"
                        id="cardHolderName"
                        name="cardHolderName"
                        value={paymentData.cardHolderName}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handleInputChange}
                        maxLength="16"
                        required
                    />

                    <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
                    <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={paymentData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                    />

                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={paymentData.cvv}
                        onChange={handleInputChange}
                        maxLength="3"
                        required
                    />
                </div>
            )}

            {error && <p className="error-message">{error}</p>}

            <div className="payment-action">
                <button onClick={handlePayment} disabled={loading} className="payment-button">
                    {loading ? 'Processing...' : 'Proceed to Payment'}
                </button>
            </div>
        </div>
    );
};

export default PaymentPage;
