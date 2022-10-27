import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowCircleRight } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PremiumCourse from '../../PremiumCourse/PremiumCourse';
import './Courses.css';

const Courses = () => {

    const [courseCategories, setCourseCategories] = useState([]);

    useEffect( () =>{
        fetch('https://webhut-server.vercel.app/course-categories')
        .then( res => res.json())
        .then(data => setCourseCategories(data));
    }, [])

    return (
        <div className='container my-4 row'>

            <Container className='p-4 rounded shadow-lg col-12 col-lg-9'>
                <h4 className='text-center p-4 shadow-lg'>Web Based Courses</h4> 
                <div className='p-3 rounded row row-cols-1 row-cols-lg-3'>
                {
                    courseCategories.map(category => 
                        <div className='shadow-lg p-4' key={category.id}>
                            <Card style={{ width: '16rem', height: '280px'}}>
                                <Card.Img variant="top" style={{height: '160px'}} src={category.img} />
                                <Card.Body>
                                    <Card.Title>{category.name}</Card.Title>
                                </Card.Body>
                                <Link className='btnEnter btn btn-dark' to={`/category/${category.id}`}>Enter<FaArrowCircleRight className='ms-1'></FaArrowCircleRight></Link>
                            </Card>
                        </div>
                        )
                }
                </div>
            </Container>

            <Container className='col-12 col-lg-3'>
                <PremiumCourse></PremiumCourse>
            </Container>
        </div>
    );
};

export default Courses;