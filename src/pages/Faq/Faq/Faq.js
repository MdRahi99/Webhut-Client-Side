import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
    return (
        <div className="fs-4 fw-bold text-center my-4 shadow-lg w-75 mx-auto p-4">
            <h1>Please provide a valid URL!!!</h1>
            <Link className='btn btn-outline-info' to={'/'}>Back</Link>
        </div>
    );
};

export default Faq;