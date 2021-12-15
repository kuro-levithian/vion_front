import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import styled from 'styled-components'
import { Category } from '../data'
import { Product } from '../data'
import banner from '../images/home-1.webp'

const Container = styled.div`
background: #eff7fa;
color: #888;
`

const Home = () => {
    return (
        <Container>
        <Header/>
        <div>
        {/*home section starts*/}
        <section className="home" id="home">
          <div className="box-container">
            <div className="left-col">
              <h2 className="title">All Categories</h2>
              <div className="box">
                  {Category.map((item)=>(
                      <a href="#"><img src={item.image}/><p>{item.title}</p><span>{item.number_of_products}</span></a>
                  ))}
              </div>
            </div>
            <div className="right-col">
              <img src={banner} alt="" />
            </div>
          </div>
        </section>
        {/*home section end*/}

        {/*product section start*/}
        <section className="product">
          <div className="heading">
            <h2>Top savers to day <span>20% off</span></h2>
            <a href="#">view all</a>
          </div>
          <div className="box-container">
          {Product.map((item)=>(
            <div className="box">
                <span className="discount">-33%</span>
                <div className="corner-box"><span /></div>
                <a href="/product_details"><img src={item.image}/></a>
                <h3>{item.title}</h3>
                <p>instock - <span>1</span>kg</p>
                <div className="price"><span>{item.main_price}</span>{item.sub_price}</div>
                <button type="button" className="btn">Add to cart</button>
            </div>
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
