import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MdPerson, MdEmail, MdPhoneInTalk } from "react-icons/md";
const Footer = () => {
    return (
        <Container fluid style={{ backgroundColor: '#000', color: '#fff' }}>
            <Row>
                <Col md={12} sm={12} lg={12} style={{ display: 'flex', justifyContent: 'center', padding: "30px" }}>
                    <p><MdPerson /> Md Tobibur Rohman,  <MdEmail /> wdtobibur96@gmail.com, <MdPhoneInTalk /> 01722527364</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer