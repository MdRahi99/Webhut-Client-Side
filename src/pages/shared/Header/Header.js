import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FaUser } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <Navbar className='mb-4 sticky-top' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Image src='https://img.icons8.com/fluency/48/000000/web.png'></Image>
                <Link to="/" className='head-title link'>Web Hut</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='link' to='/course'>Courses</Link>
                        <Link className='link' to='/faq'>Faq</Link>
                        <Link className='link' to='/blogs'>Blogs</Link>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ? 
                                <>
                                    <Button variant='light' onClick={handleLogOut}>Log Out</Button>
                                    <span>{user?.displayName}</span>
                                </>
                                :
                                <>
                                    <Link className='link btn btn-outline-info mb-2 mb-lg-0 me-lg-2' to={'/signin'}>Sign In</Link>
                                    <Link className='link btn btn-outline-info' to="/signup">Sign Up</Link>
                                </>
                            }
                        </>
                        
                        <Link className='ms-3'>
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : 
                                <FaUser></FaUser>
                            }
                        </Link>

                        <div class=" ms-3">
                            <Form>
                                <Form.Check 
                                    type="switch"
                                    id="custom-switch" />
                            </Form>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;