import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import Navbar from '../../components/Navbar/Navbar'
import SidebarTop from '../../components/SidebarTop/SidebarTop'
import Container from "react-bootstrap/Container"
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row"

export default function CreatePost() {
    return (

        <div>
            <Navbar />
            <Container className="d-flex justify-content-around">
                <Row>
                    <Col>
                        <SidebarTop />
                    </Col>
                    <Col>
                        <Dashboard />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
