import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Shop from '../Components/Shop/Shop'
import Home from '../Pages/Home/Home'

const RouterNav = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/shop" element={<Shop></Shop>} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default RouterNav