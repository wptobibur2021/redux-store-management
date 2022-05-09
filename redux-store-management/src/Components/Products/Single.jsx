import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { MdVideoLibrary, MdLink } from "react-icons/md";
import moment from 'moment';
const Single = ({ item }) => {
    const { mission_name, details, links, launch_year, launch_date_local, rocket } = item
    return (
        <Col md={4} sm={12} lg={3} style={{ marginBottom: '20px' }}>
            <Card>
                <Card.Img variant="top" src={links.mission_patch} />
                <Card.Body>
                    <Card.Title>{mission_name}</Card.Title>
                    <h6>Launch Year: {launch_year}</h6>
                    <h6>Launch Date: {moment(launch_date_local).format('MMMM Do YYYY')}</h6>
                    <p>Last Week: {moment(launch_date_local).subtract(1, 'weeks').endOf('week').format('dddd')}</p>
                    <p>Last Month: {moment(launch_date_local).subtract(1, 'months').endOf('month').format('MMMM')}</p>
                    <p>Last Year: {moment(launch_date_local).subtract(1, 'year').endOf('year').format('YYYY')}</p>
                    <p>Rocket Name: {rocket.rocket_name} </p>
                    <Card.Text>
                        {details?.slice(0, 30)}
                    </Card.Text>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <a href={links.video_link} target='_blank'><MdVideoLibrary /></a>
                        <a href={links.wikipedia} target='_blank'><MdLink /></a>
                    </div>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default Single