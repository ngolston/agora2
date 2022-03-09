import React from 'react'
import "./Dashboard.css"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


export default function Dashboard() {

    return (
        <Card body style={{ width: '40rem' }}>
            <Form.Select aria-label="Default select example">
                <option>Community Options</option>
                <option value="1">Plants</option>
                <option value="2">Dogs</option>
                <option value="3">Dev</option>
            </Form.Select>
            <Card>
                <Card.Header as="h5" className="d-flex justify-content-end">

                    <Button variant="primary">Add An Image</Button>

                </Card.Header>
                <Card.Body>
                    <Card.Title>Post Title</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Start adding to your community</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end"> <Button variant="primary">Post</Button></Card.Footer>
            </Card>
        </Card>








    )
}
