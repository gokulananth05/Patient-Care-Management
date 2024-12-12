import React from 'react';
import './Contact.css';
import LondonLocationImg from '../../Utils/Images/London-location.jpg';
import ManchesterLocationImg from '../../Utils/Images/Manchester-location.jpg';
import LiverpoolLocationImg from '../../Utils/Images/Liverpool-location.jpg';
import NavbarHome from '../Navbar/Navbar';

function Contact() {
    return (
        <div className='contact-page'>
            <NavbarHome />
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold' style={{marginRight: "300px"}}>Contact Us</h1>
                    <p className='text-center w-75 mb-5'>
                        Reach out to us for any inquiries or support
                    </p>
                </div>
            </header>

            {/* Contact Details */}
            <div className='container my-5'>
                <div className='contact-details'>
                    <h2 className='text-center mb-4'>Our Contact Information</h2>
                    <p className='text-center'>You can reach us at:</p>
                    <ul className='list-unstyled text-center'>
                        <li><strong>Phone:</strong> +44 123 456 7890</li>
                        <li><strong>Email:</strong> contact@ourcompany.com</li>
                        <li><strong>Address:</strong> 123 Business Street, London, UK</li>
                    </ul>
                </div>
            </div>

            {/* Locations */}
            <div className='bg-dark text-light p-5'>
                <div className='container'>
                    <h2 className='text-center mb-5'>Our Locations</h2>
                    <div className='row g-4'>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={LondonLocationImg} className='img-fluid' alt="London location" />
                            <h3 className='text-center mt-3'>London</h3>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={ManchesterLocationImg} className='img-fluid' alt="Manchester location" />
                            <h3 className='text-center mt-3'>Manchester</h3>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={LiverpoolLocationImg} className='img-fluid' alt="Liverpool location" />
                            <h3 className='text-center mt-3'>Liverpool</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
