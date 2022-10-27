import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGem } from 'react-icons/fa';
import './PremiumCourse.css';

const PremiumCourse = () => {
    const [courseCategories, setCourseCategories] = useState([]);

    useEffect( () =>{
        fetch('https://webhut-server.vercel.app/course-categories')
        .then( res => res.json())
        .then(data => setCourseCategories(data));
    }, [])

    return (
        <div>
            <Container className='p-4 rounded shadow-lg'>
                <h4 className='text-center p-4 shadow-lg'>Get Full Course Access</h4> 
                <div className='p-4 rounded'>
                {
                    courseCategories.map(category => 
                        <div className='shadow-lg mx-4 rounded w-100 mx-auto mb-4 p-2' key={category.id}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h4 className='courses-name flex-6'>{category.name}</h4>
                                <Link className='enterBtn' to={`/premium/${category.id}`}>Enter<FaGem className='ms-1'></FaGem></Link>
                            </div>
                        </div>)
                }
                </div>
            </Container>
        </div>
    );
};

export default PremiumCourse;