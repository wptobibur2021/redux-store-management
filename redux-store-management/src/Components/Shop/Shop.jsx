import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Col, Row, Tab, Tabs } from 'react-bootstrap'
import Single from '../Products/Single'
import moment from 'moment';
const Shop = () => {
    const products = useSelector((state) => state.products.products[0])
    //const lastDay = moment(launch_date_local).subtract(1, 'weeks').endOf('week').format('dddd')
    // const LastMonth = { moment(launch_date_local).subtract(1, 'months').endOf('month').format('MMMM') }
    // const LastYear = { moment(launch_date_local).subtract(1, 'year').endOf('year').format('YYYY') }

    const launchSuccess = products?.filter((product) => product.launch_success === true)
    const launchFailure = products?.filter((product) => product.launch_success === false)
    const upcoming = products?.filter((product) => product.upcoming === true)

    console.log('Products: ', products)
    console.log('launchSuccess: ', launchSuccess)
    console.log('launchFailure: ', launchFailure)
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col md={12} sm={12} lg={12}>
                        <h1>Mission Filter Page</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={12} lg={12}>
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-5">
                            <Tab eventKey="home" title="All">
                                <Row>
                                    {
                                        products?.map((item, i) => <Single key={i} item={item}></Single>)
                                    }
                                </Row>
                                <h1>First Item</h1>
                            </Tab>
                            <Tab eventKey="lastDays" title="Last Days">
                                <Row>
                                    {
                                        products?.map((item, i) => <Single key={i} item={item}></Single>)
                                    }
                                </Row>
                            </Tab>
                            <Tab eventKey="failure" title="Launch Failure">
                                <h4 >Launch Failure Mission: {launchFailure.length}</h4>
                                <Row className="mt-2">
                                    {
                                        launchFailure?.map((item, i) => <Single key={i} item={item}></Single>)
                                    }
                                </Row>
                            </Tab>
                            <Tab eventKey="success" title="Launch Success">
                                <Row>
                                    <h4>Launch Success Mission: {launchSuccess.length}</h4>
                                    {
                                        launchSuccess?.map((item, i) => <Single key={i} item={item}></Single>)
                                    }
                                </Row>
                            </Tab>
                            <Tab eventKey="upcoming" title="Upcoming">
                                <Row>
                                    <h4>Upcoming Mission: {upcoming.length}</h4>
                                    {
                                        upcoming?.map((item, i) => <Single key={i} item={item}></Single>)
                                    }
                                </Row>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Shop