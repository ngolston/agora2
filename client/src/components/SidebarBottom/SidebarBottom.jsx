import React from 'react'
import "./SidebarBottom.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
export default function SidebarBottom() {
    return (
        <div className="sidebarBottom">
            <Card className="text-center mt-5" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Like What You See?</Card.Title>

                    <Button variant="primary">Buy A Dev Coffee <i class="fas fa-coffee"></i></Button>
                </Card.Body>

            </Card>
        </div>

    )
}
