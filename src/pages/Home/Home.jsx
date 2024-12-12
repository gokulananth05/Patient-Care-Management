import React from 'react';
import './Home.css';
import { Link} from 'react-router-dom';
import StartCoursesImg from '../../Utils/Images/start-courses-img.jpg';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog1Img from '../../Utils/Images/blog1-img.jpeg';
import Blog2Img from '../../Utils/Images/blog2-img.jpeg';
import Blog3Img from '../../Utils/Images/blog3-img.jpg';
import NavbarHome from '../Navbar/Navbar';
import Count from '../Count/Count';

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: 'Advancements in Patient Care',
    description: 'Our healthcare center is dedicated to innovation and excellence in patient care. In this blog, we explore some of the latest advancements in medical treatments, technologies, and practices that are transforming patient outcomes and enhancing quality of life.'
},
{
    id: 2,
    img: [Blog2Img],
    title: 'A Day in the Life of a Patient',
    description: 'A typical day in patient care can be both challenging and inspiring. Here, we walk through the day of a patient, highlighting their journey through our healthcare services, and showcasing the personalized care and support they receive from our dedicated staff.'
},
{
    id: 3,
    img: [Blog3Img],
    title: 'Health Events and Announcements',
    description: 'Stay informed about upcoming health workshops, wellness seminars, and community outreach events organized by our healthcare center. This blog provides you with the latest updates and announcements to help you stay engaged and informed.'
}
];

function Home() {
  const year = new Date();
  return (
    <div className='home-page'>
      <NavbarHome />
      <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
        <div className='container d-flex flex-column align-items-center'>
          <h2>Welcome To</h2>
          <h1 className='text-center fw-semibold'>Lifecare Medical Center</h1>
          <p>We are dedicated to providing exceptional patient care, support, and resources. Our team is committed to ensuring quality, efficiency, and compassion in every interaction, empowering patients and their families for better health outcomes.</p>
          <div className='d-flex flex-column flex-sm-row align-items-center'>
            {/* <Link to="/services"> */}
              {/* <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Services</button> */}
            {/* </Link> */}
            <Link to="/contact">
              <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
            </Link>
          </div>
        </div>
      </header>

      {/* <div className="py-5">
        <ChooseSection />
      </div> */}
      <div className="py-5">
        <Count />
      </div>

      <div className='py-5 bg-light'>
        <div className="container">
          <div className='row d-flex align-items-center justify-content-around'>
            <div className='col-lg-5'>
              <h2 className='text-capitalize'>Our 2024 Care Programs</h2>
              <p>At Lifecare Management Center, we offer comprehensive programs tailored to meet the diverse health needs of patients and their families. From preventative care to ongoing treatment, our dedicated team is here to support you every step of the way.</p>
              <Link to="/services">
                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
              </Link>
            </div>
            <div className='col-lg-5 mt-5 mt-lg-0'>
              <img src={StartCoursesImg} className='img-fluid' alt="Care Programs" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-5">
        <FaqAccordion />
      </div> */}

      <div className='blog-section text-light py-5'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
          <div className='row g-4'>
            {blogs.map((blog) => (
              <div key={blog.id} className='col-md-6 col-lg-4'>
                <Link to="/blog" className='text-decoration-none'>
                  <Card className='h-100 shadow scale-hover-effect'>
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className='p-md-5'>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
          </Link>
        </div>
      </div>

      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <Link to="/contact">
                <button type='button' style={{color:"#ff3131"}} className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Get In Touch</button>
              </Link>
              <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
                {/* Social media links */}
              </ul>
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='d-row d-md-flex justify-content-between align-items-center'>
                <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
                  <ul className='footer-navigation list-unstyled mb-0'>
                    <Link to="/" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Home</li>
                    </Link>
                    <Link to="/services" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Our Services</li>
                    </Link>
                    <Link to="/about" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>About Us</li>
                    </Link>
                    <Link to="/blog" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Blog</li>
                    </Link>
                    <Link to="/contact" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Contact</li>
                    </Link>
                  </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-7'>
                  <ul className='list-unstyled mb-0'>
                    <li><p>Main Office - 123 CareConnect St, London, UK</p></li>
                    <li><p>Phone - 0800-123-4567</p></li>
                    <li><p>Email - support@careconnect.com</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-body-tertiary'>
          <div className='container'>
            <p className='p-3 m-0 text-center'>© {year.getFullYear()} Lifecare Management Center</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;