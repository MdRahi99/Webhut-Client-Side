import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const {title, img, details, category_id} = course;

    return (
        <div>
            <Card.Body>
                    <Card.Title className='shadow-lg p-4 rounded mb-3'>{title}</Card.Title>
                    <div className='row justify-content-center'>
                    <Card.Img className='col-4 w-25 d-none d-lg-flex shadow-lg p-4' variant='top' src={img}></Card.Img>
                    <Card.Text className='col-8 shadow-lg p-4 mx-2'>
                        <p>{details}</p>
                        <Link to={`/category/${category_id}`} className='btn btn-outline-info text-dark fw-bold'>Back</Link>
                    </Card.Text>
                    </div>
                </Card.Body>
            
        </div>
    );
};

export default CourseDetails;