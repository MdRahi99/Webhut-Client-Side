import React from 'react';
import {Container} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import DetailsSummary from '../../shared/DetailsSummary/DetailsSummary';
import './Home.css';

const Home = () => {
    const allCourse = useLoaderData();
    
    return (
        <div>
            <Container className='my-4'>
            <h2 className='w-100 text-center shadow-lg p-4 rounded'>Topics: {allCourse.length}</h2>
                {
                    allCourse.map(course => <DetailsSummary
                        key={course._id}
                        course={course}
                    ></DetailsSummary>)
                }
            </Container>
        </div>
    );
};

export default Home;