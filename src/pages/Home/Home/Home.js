import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const coursesInfo = useLoaderData();

    return (
        <div>
            <Container className='mb-4'>
                <Row className='home-info-row rounded shadow-sm'>
                    <Col lg='7' sm='12' className='mx-auto'>
                        <div className='home-info w-75 mx-auto'>
                            <h2>Learn from the Expert</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                            <button className='rounded px-4 py-2 mt-3 btn btn-outline-info fw-semibold'>Explore</button>
                        </div>
                    </Col>

                    <Col className='form-info p-4 rounded'>
                        <h2 className='text-center'>Sign Up</h2>
                        <Form className='form-content'>
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

                            <Button variant="outline-info fw-semibold" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Container className='p-4 course-container rounded'>
                <h4 className='text-center p-4'>Total Courses: {coursesInfo.length}</h4> 
                <div className='row row-cols-1 row-cols-lg-4 justify-content-center gx-3 gy-4'>
                    {
                        coursesInfo.map(courses => 
                        <div className='course-items col shadow-sm mx-4 rounded text-center' key={courses.id}>
                            <img src={courses.img} alt="" rounded/>
                            <h3 className='courses-name'>{courses.name}</h3>
                            <Link className='course rounded-bottom p-2' to={`/courses/${courses.id}`}>Enter</Link>
                            <p className='mt-2'>Total Chapter: <span className='fw-bold'>{courses.topics}</span></p>
                        </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;