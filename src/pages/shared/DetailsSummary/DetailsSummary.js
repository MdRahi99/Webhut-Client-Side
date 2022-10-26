import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const DetailsSummary = ({course}) => {
    const {_id, details, title, img} = course;

    return (
        <div>
            <Card className='mb-5'>
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title className='shadow-lg p-4 rounded mb-3'>{title}</Card.Title>
                    <div className='row justify-content-center'>
                    <Card.Img className='col-4 w-25 d-none d-lg-flex shadow-lg p-4' variant='top' src={img}></Card.Img>
                    <Card.Text className='col-8 shadow-lg p-4 mx-2'>
                    {
                        details.length > 200 ? 
                        <>{details.slice(0,250) + '...'} 
                        <Link to={`/courses/${_id}`}>Read More</Link></>
                        :
                        details
                    }
                    </Card.Text>
                    </div>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
        </div>
    );
};

export default DetailsSummary;