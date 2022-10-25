import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const coursesInfo = useLoaderData();

    return (
        <div>
            <h1>Total Course: {coursesInfo.length}</h1>
            <div className=''>
                {
                    coursesInfo.map(courses => <p key={courses.id}>
                        <Link to={`/courses/${courses.id}`}>{courses.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Courses;