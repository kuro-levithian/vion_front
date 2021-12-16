import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import ForgotPassword from '../page/SignInForm/ForgotPassword'

import '../App.css';

import styled from 'styled-components'


const Container = styled.div`
background: #eff7fa;
color: #888;
`

const Home = () => {
    return (
        <Container>
        <Header/>
        <div>
            <ForgotPassword/>
        </div>
        <Footer/>
        </Container>
    )
}

export default Home
