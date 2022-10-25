import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='mb-4 sticky-top' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Image src='https://img.icons8.com/fluency/48/000000/web.png'></Image>
                <Link to="/" className='head-title link'>Web Hut</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='link' to='/home'>Home</Link>
                        <Link className='link' to='/courses'>Courses</Link>
                        <Link className='link' to='/faq'>Faq</Link>
                        <Link className='link' to='/blogs'>Blogs</Link>
                    </Nav>
                    <Nav className='d-flex '>
                        <Link className='link btn btn-outline-info mb-2 mb-lg-0 me-lg-2' to="/signin">Sign In</Link>
                        <Link className='link btn btn-outline-info' to="/signup">Sign Up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;