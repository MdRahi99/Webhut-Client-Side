import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer/Footer';
import Header from '../pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='12'><Outlet></Outlet></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;