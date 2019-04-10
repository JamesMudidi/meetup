import React, { Component } from 'react'
import HeaderMain from './headMain'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Landing extends Component{
render(){
    return(
        <div>
            <HeaderMain />
            <Container>
                <Row className="pt-2 pb-4 mb-4 mt-4">
                    <Col sm={8}>
                        <Card border="light" style={{ width: '45rem' }}>
                            <Card.Body>
                                <Card.Title className="text-primary" as="h1">Card Title</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="bg-dark text-light" sm={4}>Image goes here</Col>
                </Row>

                <Row className="pt-2 pb-4 mb-4 mt-4">
                <Col className="bg-dark text-light" sm={4}>Image goes here</Col>
                    <Col sm={8}>
                        <Card border="light" style={{ width: '45rem' }}>
                            <Card.Body>
                                <Card.Title className="text-primary" as="h1">Card Title</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Card border="light" className="text-center">
                    <Card.Body>
                    <Button variant="primary">Get Started</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
)
}
}

export default Landing