import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from '../../home-img.jpg';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='row signup-form container rounded my-4 shadow-lg'>
        <div className='d-none d-lg-flex col-lg-5'>
            <img className='signup-img rounded' src={img} alt="" />
        </div>
            
        <div className='col-12 col-lg-7'>
            <Form className='form-content rounded shadow-lg'>
                <h2 className='text-center py-3 mb-3'>Sign Up</h2>
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
        </div>
    );
};

export default SignUp;