import React from 'react';
import {Container} from 'react-bootstrap';
import SignIn from '../../SignIn/SignIn';
import Blog from '../../Blog/Blog/Blog';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <div className='row'>
            <Container className='my-4 col-12 col-lg-8'>
                <Carousel variant="light">
                    <Carousel.Item>
                        <img style={{height: '480px'}} className="d-block w-100 opacity-75" src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80' alt="First slide"/>
                        <Carousel.Caption className='text-white h-50'>
                            <h2 className='home-h2'>Web Lovers Hut</h2>
                            <p className='home-p'>Learn Web Technologies in one Place</p>
                            <Link to='/course' className='w-75 mx-auto my-3 btn btn-outline-info' >Explore Courses</Link>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img style={{height: '480px'}} className="d-block w-100 opacity-75" src="https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Second slide"/>
                        <Carousel.Caption className='text-white h-50'>
                            <h2 className='home-h2'>Web Lovers Hut</h2>
                            <p className='home-p'>Learn Web Technologies in one Place</p>
                            <Link to='/course' className='w-75 mx-auto my-3 btn btn-outline-info' >Explore Courses</Link>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img style={{height: '480px'}} className="d-block w-100 opacity-75" src="https://images.unsplash.com/photo-1610438250910-01cb769c1334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='Third slide'/>
                        <Carousel.Caption className='text-white h-50'>
                            <h2 className='home-h2'>Web Lovers Hut</h2>
                            <p className='home-p'>Learn Web Technologies in one Place</p>
                            <Link to='/course' className='w-75 mx-auto my-3 btn btn-outline-info' >Explore Courses</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className='my-4'>
                    <h3 className='w-100 mx-auto text-center shadow-lg p-4 rounded'>Blogs</h3>
                    <Blog></Blog>
                </div>
            </Container>

            <Container className='d-none d-lg-block col-lg-4'>
                <SignIn></SignIn>
            </Container>
            </div>
        </div>
        
    );
};

export default Home;