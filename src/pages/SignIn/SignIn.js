import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import './SignIn.css';
import {FaGoogle, FaGithub} from 'react-icons/fa';

const SignIn = () => {
    return (
        <div className='signin-form container rounded my-4'>
            <h2 className='text-center py-3 mb-3'>Sign In</h2>
        <div className=''>
            <Form className='form-content w-50 mx-auto rounded'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
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
                <div className='my-4'>
                    <ButtonGroup className='w-100 mx-auto' vertical>
                        <Button variant='outline-info'><FaGoogle></FaGoogle> Login with Google</Button>
                        <Button variant='outline-dark'><FaGithub></FaGithub> Login with Github</Button>
                    </ButtonGroup>
                </div>
            </Form>
        </div>

        </div>
    );
};

export default SignIn;