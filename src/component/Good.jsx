import React from 'react'
import '../App.css';
import '../data';
import { Product } from '../data'


const Good = () => {
    return (
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
    )
}

export default Good
