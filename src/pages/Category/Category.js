import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DetailsSummary from '../shared/DetailsSummary/DetailsSummary';

const Category = () => {
    const coursesCategory = useLoaderData();

    return (
        <div className='row'>

            <div className='col-12'>
                {
                coursesCategory.map( courses => <DetailsSummary
                        key={courses._id}
                        course={courses}
                ></DetailsSummary>)
                }
                <div className='w-50 mx-auto my-4'>
                <Link className='btn btn-dark w-100 mx-auto my-4 p-2 fs-3' to={'/course'}>Back</Link>
                </div>
            </div>
        </div>
    );
};

export default Category;