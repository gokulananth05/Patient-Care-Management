import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../Utils/Images/blog1-img.jpeg';
import Blog2Img from '../../Utils/Images/blog2-img.jpeg';
import Blog3Img from '../../Utils/Images/blog3-img.jpg';
import Blog4Img from '../../Utils/Images/blog4-img.jpeg';
import Blog5Img from '../../Utils/Images/blog5-img.jpg';
import Blog6Img from '../../Utils/Images/blog6-img.jpg';
import Blog7Img from '../../Utils/Images/blog7-img.jpg';
import Blog8Img from '../../Utils/Images/blog8-img.jpg';
import Blog9Img from '../../Utils/Images/blog9-img.jpeg';
import NavbarHome from '../Navbar/Navbar';

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
  },
  {
      id: 4,
      img: [Blog4Img],
      title: 'Patient Success Stories',
      description: 'We are proud of the resilience and determination of our patients. In this blog, we share inspiring success stories of individuals who have overcome significant health challenges with the support of our expert healthcare teams and advanced treatment options.'
  },
  {
      id: 5,
      img: [Blog5Img],
      title: 'Innovative Research in Healthcare',
      description: 'Our center is committed to research that pushes the boundaries of healthcare and medicine. This blog covers groundbreaking research projects led by our medical experts, aimed at discovering new treatments and improving patient care protocols.'
  },
  {
      id: 6,
      img: [Blog6Img],
      title: 'Spotlight on Our Healthcare Team',
      description: 'Our healthcare team consists of dedicated professionals who are passionate about delivering top-notch patient care. In this blog, we feature some of our outstanding healthcare providers, highlighting their expertise, compassion, and commitment to patient well-being.'
  },
  {
      id: 7,
      img: [Blog7Img],
      title: 'Wellness Programs and Resources',
      description: 'We believe that wellness goes beyond treatment. Our wellness programs focus on preventive care, mental health support, and overall well-being. Learn about the various programs and resources we offer to support our patients and their families on the path to health.'
  },
  {
      id: 8,
      img: [Blog8Img],
      title: 'Support Groups and Activities',
      description: 'We provide a wide range of support groups and activities designed to foster community, provide support, and enhance well-being. Explore the different groups available, including those for chronic conditions, recovery, mental health, and more.'
  },
  {
      id: 9,
      img: [Blog9Img],
      title: 'Starting Your Care Journey with Us',
      description: 'Beginning treatment can be overwhelming, especially for first-time patients. This blog offers guidance on navigating your care journey, from initial consultations to ongoing support, ensuring a smooth and comforting experience at our healthcare center.'
  },
];

function Blog() {
  return (
    <div className='blog-page'>
        <NavbarHome />
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold' style={{marginRight: "300px"}}>Blog</h1>
                <p className='text-center w-75 mb-5'>Our healthcare blogs provide insights, updates, and stories about patient care, medical advancements, and wellness resources. Here, you’ll find valuable information on a variety of topics that support and guide our patients and their families throughout their health journey.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;
