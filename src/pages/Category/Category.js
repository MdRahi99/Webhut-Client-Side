import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseList from '../shared/CourseList/CourseList';
import DetailsSummary from '../shared/DetailsSummary/DetailsSummary';

const Category = () => {
    const coursesCategory = useLoaderData();

    return (
        <div className='row'>
            <div className='col-4'>
                <CourseList></CourseList>
            </div>

            <div className='col-8'>
                {
                coursesCategory.map( courses => <DetailsSummary
                        key={courses._id}
                        course={courses}
                ></DetailsSummary>)
                }
            </div>
           <h3>Total Topic: {coursesCategory.length}</h3>
        </div>
    );
};

export default Category;