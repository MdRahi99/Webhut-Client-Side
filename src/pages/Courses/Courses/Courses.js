import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    const coursesInfo = useLoaderData();

    return (
        <div className='container my-4'>
            <div className='row justify-content-between'>
                <div className='col-12 col-lg-3 shadow-lg rounded p-4'>
                    <h2>Course Names: </h2>
                    <div className='mt-4'>
                        {
                        coursesInfo.map(courses => <p className='courses rounded' key={courses.id}>
                            <Link className='courses-list text-decoration-none' to={`/courses/${courses.id}`}>{courses.name}</Link>
                        </p>)
                        }
                    </div>
                </div>

                <div className='col-12 col-lg-8 shadow-lg rounded p-4'>
                    <h2>Details:</h2>
                </div>
            </div>
        </div>
    );
};

export default Courses;