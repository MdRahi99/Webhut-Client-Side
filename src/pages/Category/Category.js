import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsSummary from '../shared/DetailsSummary/DetailsSummary';

const Category = () => {
    const coursesCategory = useLoaderData();

    return (
        <div>
           <h3>Total Topic: {coursesCategory.length}</h3>
           {
                coursesCategory.map( courses => <DetailsSummary
                        key={courses._id}
                        course={courses}
                ></DetailsSummary>)
           }
        </div>
    );
};

export default Category;