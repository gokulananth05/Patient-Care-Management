import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function NavbarHome() {
    const navigate=useNavigate();
    const handleLogout=()=>{
        alert('Are you sure you want to log out?')
        navigate('/')
    }
  return (
    
    <div>
        <Navbar expand="lg" className='homenav position-absolute w-100 fw-semibold'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center'>
          
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='baisc-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/home' className='text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About Us</Nav.Link>
              <Nav.Link href='/blog' className='text-uppercase'>Blog</Nav.Link>
             
              <Nav.Link href='/contact' className='text-uppercase'>Get In Touch</Nav.Link>
              <Nav.Link href='/admin-login' className='text-uppercase'>Admin</Nav.Link>
              <Nav.Link href='/user-login' className='text-uppercase'>Patient</Nav.Link>
              <Nav.Link href='/doctor-login' className='text-uppercase'>Doctor</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarHome;