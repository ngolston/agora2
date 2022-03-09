import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SidebarTop from '../../components/SidebarTop/SidebarTop'
import RightBar from '../../components/RightBar/RightBar'
import Post from '../../components/Post/Post'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Dashboard from '../../components/Dashboard/Dashboard'
import Stack from 'react-bootstrap/Stack'


import Container from "react-bootstrap/Container"


export default function Profile() {
    return (
        <div>
            <Navbar />
            <Container className="d-flex justify-content-around">
                <Row>
                    <Col>
                        <SidebarTop />
                    </Col>
                    <Stack style={{ width: '18rem' }} md={1}>
                        <Col>
                            <Dashboard />
                            <Post />
                        </Col>
                    </Stack>
                    <Col>
                        <RightBar />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
