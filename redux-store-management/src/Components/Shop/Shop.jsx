import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Col, Row, Tab, Tabs } from 'react-bootstrap'

const Shop = () => {
    const products = useSelector((state) => state.products.products[0])
    console.log('Products: ', products)
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col md={12} sm={12} lg={12}>
                        <h1>Mission Filter Page</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="All">
                                <h1>First Item</h1>
                            </Tab>
                            <Tab eventKey="profile" title="Last Days">
                                <h1>Second Item</h1>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Shop