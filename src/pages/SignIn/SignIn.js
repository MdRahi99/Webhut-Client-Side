import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import './SignIn.css';
import img from '../../home-img.jpg'
import {FaGoogle, FaGithub} from 'react-icons/fa';

const SignIn = () => {
    return (
        <div className='signin-form container rounded my-4 shadow-lg p-4'>
            
        <div className='row'>
            <div className='d-none d-lg-flex col-lg-5'>
                <img className='signin-img rounded' src={img} alt="" />
            </div>
            <div className='col-12 col-lg-7'>
                <Form className='form-content rounded shadow-lg'>

                <h2 className='text-center py-2 mb-4 rounded'>Sign In</h2>

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

        </div>
    );
};

export default SignIn;