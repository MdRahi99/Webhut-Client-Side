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
                <Row className='row rounded shadow-sm'>
                    <Col lg='7' sm='12' className='mx-auto'>
                        <div className='home-info w-75 mx-auto'>
                            <h2>Learn from the Expert</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                            <button className='rounded px-4 py-2 mt-3'>Explore</button>
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

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Container>
                <h4>Courses: {coursesInfo.length}</h4> 
                <div>
                    {
                        coursesInfo.map(courses => <p key={courses.id}>
                            <Link to={`/courses/${courses.id}`}>{courses.name}</Link>
                        </p>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;