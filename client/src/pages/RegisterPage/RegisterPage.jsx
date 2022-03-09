import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SidebarTop from '../../components/SidebarTop/SidebarTop';
import Register from '../../components/Register/Register';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";



export default function RegisterPage() {
    return (
        <div>
            <div>
                <Navbar />
                <Container className="d-flex justify-content-around">
                    <Row>
                        <Col>
                            <SidebarTop />
                        </Col>
                        <Col>
                            <Register />
                        </Col>
                    </Row>

                </Container>
            </div>

        </div>
    );
}





