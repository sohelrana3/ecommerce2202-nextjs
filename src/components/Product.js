"use client"
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Product = () => {
  return (
    <Container>
        <Row>
            <Col xs={3}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="http://localhost:8000/uploads/images-1710737297389-20479307-4.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Add To Card</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
  )
}

export default Product