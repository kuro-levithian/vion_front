import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Order from '../component/OrderHistory'

import '../App.css';

import styled from 'styled-components'


const Container = styled.div`
background: #eff7fa;
color: #888;
`

const OrderHistory = () => {
    return (
        <Container>
        <Header/>
        <div>
            <Order/>
        </div>
        <Footer/>
        </Container>
    )
}

export default OrderHistory
