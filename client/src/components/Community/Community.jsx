import React from 'react'
import Post from "../Post/Post"
import Card from "react-bootstrap/Card"

export default function Community() {
    return (
        <div>

            <Card>
                <Card.Header as="h5" className="d-flex justify-content-end">


                    <Card.Title>Community title</Card.Title>

                </Card.Header>
                <Card.Body>
                    <Post />

                </Card.Body>
                <Card.Footer className="d-flex justify-content-end"> </Card.Footer>
            </Card>





        </div>
    )
}
