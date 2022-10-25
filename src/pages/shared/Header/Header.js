import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import './Header.css';

const Header = () => {
    return (
        <Navbar className='mb-4 sticky-top' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Image src='https://img.icons8.com/fluency/48/000000/web.png'></Image>
                <Navbar.Brand href="/" className='head-title'>Web Hut</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/faq">Faq</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/signin">Sign In</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;