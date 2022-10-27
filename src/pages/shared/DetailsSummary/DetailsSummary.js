import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";
import { Link } from 'react-router-dom';
import './DetailsSummary.css';

const ref = React.createRef();

const DetailsSummary = ({course}) => {
    const {_id, details, title, img} = course;

    return (
        <div>
            <Card className='mb-5'>
                <Card.Body>
                    <Card.Title className='shadow-lg p-4 rounded mb-3 d-flex justify-content-between'>
                        <div ref={ref}>
                            <h3>{title}</h3>
                        </div>
                        <div>
                        <Pdf targetRef={ref} filename="courses.pdf">
                            {({ toPdf }) => <button className='btn btn-outline-info' onClick={toPdf}>Download Pdf <FaDownload></FaDownload></button>}
                        </Pdf>
                        </div>
                    </Card.Title>

                    <div className='row justify-content-center'>
                    <Card.Img className='col-4 w-25 d-none d-lg-flex shadow-lg p-4' variant='top' src={img}></Card.Img>
                    <Card.Text ref={ref} className='col-8 shadow-lg p-4 mx-2'>
                    {
                        details.length > 200 ? 
                        <>{details.slice(0,250) + '...'} 
                            <Link className='readBtn ms-2 p-2 text-muted' to={`/courses/${_id}`}>Read More</Link>
                        </>
                        :
                        details
                    }
                    </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DetailsSummary;