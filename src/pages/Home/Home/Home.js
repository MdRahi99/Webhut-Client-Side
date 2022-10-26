import React from 'react';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';
import img from '../../../home-img.jpg';
import DetailsSummary from '../../shared/DetailsSummary/DetailsSummary';
import './Home.css';

const Home = () => {
    const allCourse = useLoaderData();
    
    return (
        <div>
            <Container className='my-4 row shadow-lg p-4'>
                <div className='d-none d-lg-flex col-lg-5'>
                    <img className='home-img rounded' src={img} alt="" />
                </div>
                <div className='col-12 col-lg-7'>
                    <Form className='form-content shadow-lg'>
                            <h2 className='text-center mb-4'>Sign Up</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="outline-info fw-semibold" type="submit">
                                Submit
                            </Button>
                    </Form>
                </div>
            </Container>

            <Container>
            <h2 className='w-100 text-center shadow-lg p-4 rounded'>Topics: {allCourse.length}</h2>
                {
                    allCourse.map(course => <DetailsSummary
                        key={course._id}
                        course={course}
                    ></DetailsSummary>)
                }
            </Container>
        </div>
    );
};

export default Home;