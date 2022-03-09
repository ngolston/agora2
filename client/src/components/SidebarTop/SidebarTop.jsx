import React from "react";
import SidebarBottom from "../SidebarBottom/SidebarBottom";
import "./SidebarTop.css"
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import ListGroup from "react-bootstrap/ListGroup"
import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
export default function SidebarTop() {
    return (
        <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Agora's Top Communities</Card.Title>
                        <Card.Text>
                            Check out some of our favorite communities!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Sports </ListGroupItem>
                        <ListGroupItem>Technology </ListGroupItem>
                        <ListGroupItem>Movies</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Link to="/Communities">
                            <Button variant="primary">Explore More Communities</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Row>
                    <Stack>
                        <SidebarBottom />
                    </Stack>
                </Row>
            </div>
        </>


    )
}


