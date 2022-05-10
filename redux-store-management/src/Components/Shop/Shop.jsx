/* Import Necessary File Below */
import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Col, Row, Tab, Tabs } from 'react-bootstrap'
import Single from '../Products/Single'
const Shop = () => {
    /* Get Products Below*/
    const products = useSelector((state) => state.products.products[0])
    /* Filter Items Mission Success Below */
    const launchSuccess = products?.filter((product) => product.launch_success === true)
    /* Filter Items Failure Below */
    const launchFailure = products?.filter((product) => product.launch_success === false)
    /* Filter Upcomming Items Below */
    const upcoming = products?.filter((product) => product.upcoming === true)
    return (
        /* Shop page content start */
        <Container fluid>
            <Container>
                {/* Page title section below */}
                <Row>
                    <Col md={12} sm={12} lg={12}>
                        <h1>Mission Filter Page</h1>
                    </Col>
                </Row>
                {/* Filter Tab Section Start */}
                <Row>
                    <Col md={12} sm={12} lg={12}>
                        {/* Filter Tab Item Start */}
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-5">
                            {/* All Tab Below */}
                            <Tab eventKey="home" title="All">
                                <Row>
                                    {
                                        products?.map((item, i) => <Single key={i} item={item}></Single>)
                                    }
                                </Row>
                                <h1>First Item</h1>
                            </Tab>
                            {/* Launch Failure Tab Below */}
                            <Tab eventKey="failure" title="Launch Failure">
                                <h4 >Launch Failure Mission: {launchFailure?.length}</h4>
                                <Row className="mt-2">
                                    {
                                        launchFailure?.map((item, i) => <Single key={i} item={item}></Single>)
                                    }
                                </Row>
                            </Tab>
                            {/* Launch Success Tab Below */}
                            <Tab eventKey="success" title="Launch Success">
                                <Row>
                                    <h4>Launch Success Mission: {launchSuccess?.length}</h4>
                                    {
                                        launchSuccess?.map((item, i) => <Single key={i} item={item}></Single>)
                                    }
                                </Row>
                            </Tab>
                            {/* Upcoming Tab Below */}
                            <Tab eventKey="upcoming" title="Upcoming">
                                <Row>
                                    <h4>Upcoming Mission: {upcoming?.length}</h4>
                                    {
                                        upcoming?.map((item, i) => <Single key={i} item={item}></Single>)
                                    }
                                </Row>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
                {/* Filter Tab Section Start */}
            </Container>
        </Container>
        /* Shop page content end */
    )
}
export default Shop