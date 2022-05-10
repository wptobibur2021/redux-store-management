import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAPI from '../../useAPI/useAPI.js'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Single from './Single.jsx'
const Products = () => {
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products[0])
    const { getProducts } = useAPI();
    const searchHandle = (e) => {
        setSearchText(e.target.value)
    }
    const searchProduct = products?.filter((product) => product.rocket.rocket_name.toLowerCase() === searchText.toLowerCase())
    useEffect(() => {
        getProducts(dispatch)
    }, [])

    console.log('newproducts:', products)
    console.log('search Value: ', searchText)
    return (
        <div className="missionArea">
            <Container >
                <Row style={{ marginBottom: "30px" }}>
                    <Col md={6} sm={12} lg={6}>
                        <h1>Mission Items Below</h1>
                    </Col>
                    <Col md={6} sm={12} lg={6}>
                        <Form.Label htmlFor="inputPassword5">Search</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            onChange={searchHandle}
                        />
                    </Col>
                </Row>
                <Row>
                    {
                        searchText.length > 0 ? searchProduct?.map((item, i) => <Single key={i} item={item}></Single>) : (
                            products?.map((item, i) => <Single key={i} item={item}></Single>)
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Products