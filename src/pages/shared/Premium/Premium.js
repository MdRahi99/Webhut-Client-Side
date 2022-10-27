import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Premium = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='row my-4 shadow-lg rounded p-4'>

            <div className='col-12 col-lg-8 w-50 mx-auto'>
                <h3 className='shadow-lg p-4'>Thank You for choosing premium Subscription</h3>
                <Link className='btn btn-outline-info my-4 w-100' to={'/'}>Back to Home</Link>
            </div>

            <div className='col-12 col-lg-4'>

                {
                    user?.uid ? 
                    <div className='shadow-lg p-4'>
                        <Image src={user?.photoURL} />
                        <h3>Your Name: {user?.displayName}</h3>
                        <h5>Your Email: {user?.email}</h5>
                    </div>
                    :
                    <>
                    <h1>User haven't any Data</h1>
                    </>
                }
            </div>
        </div>
        );
    };

export default Premium;