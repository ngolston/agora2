import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SidebarTop from '../../components/SidebarTop/SidebarTop'
import Community from '../../components/Community/Community'
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"


export default function Communities() {
    return (

        <div>
            <Navbar />
            <Container>
                <Row className="d-flex justify-content-around">
                    <Col>
                        <SidebarTop />
                    </Col>
                    <Col>
                        <Community />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
