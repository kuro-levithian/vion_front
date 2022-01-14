import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import CheckoutForm from './CheckoutForm/CheckoutForm'

import '../App.css';

import styled from 'styled-components'


const Container = styled.div`
background: #eff7fa;
color: #888;
`

const Checkout = () => {
    return (
        <Container>
        <Header/>
        <div>
            <CheckoutForm/>
        </div>
        <Footer/>
        </Container>
    )
}

export default Checkout
