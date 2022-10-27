import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import './SignIn.css';
import {FaGoogle, FaGithub} from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [error, setError] = useState('');
    const { providerLogin } = useContext(AuthContext);
    const {signIn} = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        });
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(googleProvider, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='signIn-form container rounded my-4 shadow-lg p-4'>
            
        <div className='row'>
            <div className='col-12 col-lg-12 mx-auto'>
                <Form onSubmit={handleSubmit} className='form-content rounded shadow-lg p-4 w-75 mx-auto'>

                <h2 className='text-center py-2 mb-4 rounded'>Sign In</h2>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>

                <Button variant="outline-info fw-semibold" type="submit">
                    Login
                </Button>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <div className='my-4'>
                    <ButtonGroup className='w-100 mx-auto' vertical>
                        <Button onClick={handleGoogleSignIn} variant='outline-info'><FaGoogle></FaGoogle> Login with Google</Button>
                        <Button onClick={handleGithubSignIn} variant='outline-dark'><FaGithub></FaGithub> Login with Github</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <span>Create an Account <Link className='ms-2' to={'/signup'}>SignUp</Link></span>
                </div>
                </Form>
            </div>
        </div>

        </div>
    );
};

export default SignIn;