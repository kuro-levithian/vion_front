import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Good from '../component/Good'
import Banner from '../component/Banner'
import styled from 'styled-components'

const Container = styled.div`
background: #eff7fa;
color: #888;
`

const Home = (props) => {
  const {Product,name,setName} = props;
    return (
        <Container>
        <Header name={name} setName={setName}/>
        <div>
        <section className="home" id="home">
          <div className="box-container">
            <Sidebar/>
            <Banner/>
          </div>
        </section>
        {/*product section start*/}
        <section className="product">
            <div className="heading">
                <h2>Top savers to day <span>20% off</span></h2>
                <a href="#">view all</a>
          </div>
          <div className='box-container'>
              {Product.map((products)=>(
                <Good key={products.id} Product={products}/>
              ))}
          </div>
        </section>
        {/* last product section ends   */}
        </div>
        <Footer/>
        </Container>
    )
}

export default Home
