import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Good from '../component/Good'
import Banner from '../component/Banner'
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
        <section className="home" id="home">
          <div className="box-container">
            <Sidebar/>
            <Banner/>
          </div>
        </section>
        {/*product section start*/}
          <Good/>
        {/* last product section ends   */}
        </div>
        <Footer/>
        </Container>
    )
}

export default Home
