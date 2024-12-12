import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';
import Card from './Card2.json';
import Successfull from './Successfull.json';
import Lottie from 'lottie-react';
import axios from 'axios'; // Import axios

const PaymentPage = () => {
    const [paymentData, setPaymentData] = useState({
        nameOnCard: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        upiId: '', // Added UPI ID to the state
        amount: '',
        paymentMethod: 'card', // Default payment method
        upi:''
    });

    
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


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({ ...paymentData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
           
            setIsSubmitting(false);
            setShowSuccess(true);
    
            setTimeout(() => {
                navigate('/receipt', {
                    state: { cardHolderName: paymentData.nameOnCard, amount: paymentData.amount },
                });
            }, 1350);
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className={`pay-container ${showSuccess ? 'dim-background' : ''}`}>
            <div>
                <Lottie animationData={Card} loop={true} style={{ width: '600px', height: '600px' }} />
            </div>
            <div className="payment-container">
                <h1 className="text-center my-3 h1-ubuntu">Payment Page</h1>
                <div className="payment-box">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Name on Card</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOnCard"
                                name="nameOnCard"
                                value={paymentData.nameOnCard}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label">Amount</label>
                            <input
                                type="text"
                                className="form-control"
                                id="amount"
                                name="amount"
                                disabled
                                value={paymentData.amount}
                                onChange={handleChange}
                                placeholder="0.00"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block">Payment Method</label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="paymentMethod"
                                    id="paymentMethodCard"
                                    value="card"
                                    checked={paymentData.paymentMethod === 'card'}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="paymentMethodCard">
                                    Card Payment
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="paymentMethod"
                                    id="paymentMethodUPI"
                                    value="upi"
                                    checked={paymentData.paymentMethod === 'upi'}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="paymentMethodUPI">
                                    UPI
                                </label>
                            </div>
                        </div>
                        {paymentData.paymentMethod === 'card' && (
                            <>
                                <div className="mb-3">
                                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cardNumber"
                                        name="cardNumber"
                                        value={paymentData.cardNumber}
                                        onChange={handleChange}
                                        maxLength={16}
                                        placeholder="1234 5678 9123 4567"
                                        required
                                    />
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="expiryDate"
                                            name="expiryDate"
                                            value={paymentData.expiryDate}
                                            onChange={handleChange}
                                            placeholder="MM/YY"
                                            pattern="\d{2}/\d{2}"
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="cvv" className="form-label">CVV</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cvv"
                                            name="cvv"
                                            value={paymentData.cvv}
                                            onChange={handleChange}
                                            maxLength={3}
                                            placeholder="123"
                                            required
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                        {paymentData.paymentMethod === 'upi' && (
                            <div className="mb-3">
                                <label htmlFor="upiId" className="form-label">UPI ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="upi"
                                    name="upi"
                                    value={paymentData.upi}
                                    onChange={handleChange}
                                    placeholder="example@upi"
                                    required
                                />
                            </div>
                        )}
                        <center>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                Proceed to Pay
                            </button>
                        </center>
                    </form>
                </div>
            </div>
            {showSuccess && (
                <div className="success-overlay">
                    <Lottie animationData={Successfull} style={{ width: '800px', height: '800px' }} />
                </div>
            )}
        </div>
    );
};

export default PaymentPage;