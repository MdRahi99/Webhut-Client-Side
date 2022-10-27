import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import './CourseList.css';

const CourseList = () => {
    const [courseCategories, setCourseCategories] = useState([]);

    useEffect( () =>{
        fetch('https://webhut-server.vercel.app/course-categories')
        .then( res => res.json())
        .then(data => setCourseCategories(data));
    }, [])

    return (
        <div>
            <Container className='p-4 rounded my-4 shadow-lg'>
                <h4 className='text-center p-4 shadow-lg'>Total Courses: {courseCategories.length}</h4> 
                <div className='p-4 rounded'>
                {
                    courseCategories.map(category => 
                        <div className='shadow-lg mx-4 rounded w-100 mx-auto mb-4 p-2' key={category.id}>
                            <div className='d-flex justify-content-between align-items-center list-info'>
                                <h4 className='courses-name flex-6'>{category.name}</h4>
                                <Link className='flex-3 btn-link' to={`/category/${category.id}`}><FaArrowCircleRight></FaArrowCircleRight></Link>
                            </div>
                        </div>)
                }
                </div>
            </Container>
        </div>
    );
};

export default CourseList;