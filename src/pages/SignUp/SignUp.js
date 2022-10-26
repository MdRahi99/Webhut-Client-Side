import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import img from '../../home-img.jpg';
import './SignUp.css';

const SignUp = () => {

    const [error, setError] = useState('');

    const {createUser} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        });
    }
    return (
        <div className='row signup-form container rounded my-4 shadow-lg'>
        <div className='d-none d-lg-flex col-lg-5'>
            <img className='signup-img rounded' src={img} alt="" />
        </div>
            
        <div className='col-12 col-lg-7'>
            <Form onSubmit={handleSubmit} className='form-content rounded shadow-lg'>
                <h2 className='text-center py-3 mb-3'>Sign Up</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>

                <Button variant="outline-info fw-semibold" type="submit">
                    Sign Up
                </Button>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
        </div>
    );
};

export default SignUp;