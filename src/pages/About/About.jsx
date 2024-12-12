import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../Utils/Images/about-us-section-img.jpeg';
import Person1 from '../../Utils/Images/person1.jpeg';
import Person2 from '../../Utils/Images/person2.jpeg';
import Person3 from '../../Utils/Images/person3.jpeg';
import Person4 from '../../Utils/Images/person4.jpeg';
import Person5 from '../../Utils/Images/person5.jpeg';
import Person6 from '../../Utils/Images/person6.jpeg';
import Person7 from '../../Utils/Images/person7.jpeg';
import Person8 from '../../Utils/Images/person8.jpeg';
import Person9 from '../../Utils/Images/person9.jpeg';
import NavbarHome from '../Navbar/Navbar';

const persons = [
  { id: 1, img: [Person1] },
  { id: 2, img: [Person2] },
  { id: 3, img: [Person3] },
  { id: 4, img: [Person4] },
  { id: 5, img: [Person5] },
  { id: 6, img: [Person6] },
  { id: 7, img: [Person7] },
  { id: 8, img: [Person8] },
  { id: 9, img: [Person9] },
];

function About() {
  return (
    <div className='about-page'>
        <NavbarHome />
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold' style={{marginRight: "300px"}}>About Us</h1>
                <p className='text-center w-75 mb-5'>At our healthcare center, we are dedicated to providing exceptional patient care through compassionate service, clinical excellence, and a commitment to holistic well-being. Our mission is to support each patient’s journey toward optimal health and wellness by offering comprehensive care, personalized treatment plans, and supportive resources in a warm, inclusive environment.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Care with Us</h2>
                    <p>We offer a wide range of services, from routine check-ups to specialized treatments and recovery programs, all designed to support the unique needs of each patient. Our team is committed to staying at the forefront of medical advancements, utilizing the latest in research and technology to provide the best possible care. With access to modern facilities, laboratories, and diagnostic centers, we ensure that every patient receives the highest standard of care.</p>
                    <p className='mb-4 mb-lg-5'>Join a supportive healthcare community where patients are valued and respected. Our team is here to guide you through each step of your care journey with compassion, expertise, and personalized support services, including counseling, health education, and wellness programs. We prioritize your overall well-being and are committed to providing resources that support physical, mental, and emotional health. Our commitment to excellence in patient care has been recognized with awards for Compassionate Care and Outstanding Patient Support.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="About Us" />
                </div>
            </div>
        </div>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Our Healthcare Heroes</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="Healthcare Hero" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;
