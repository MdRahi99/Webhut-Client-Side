import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import PremiumCourse from '../../PremiumCourse/PremiumCourse';
import DetailsSummary from '../../shared/DetailsSummary/DetailsSummary';
import './Courses.css';

const Courses = () => {
    const allCourse = useLoaderData();

    return (
        <div className='container my-4 row'>
            <Container className='col-12 col-lg-7'>
                <h2 className='w-100 text-center shadow-lg p-4 rounded'>Topics: {allCourse.length}</h2>
                {
                    allCourse.map(course => <DetailsSummary
                        key={course._id}
                        course={course}
                    ></DetailsSummary>)
                }
            </Container>
            <Container className='col-12 col-lg-5'>
                <PremiumCourse></PremiumCourse>
            </Container>
        </div>
    );
};

export default Courses;