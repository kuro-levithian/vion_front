import React from 'react'
import logo from '../images/logo_header.webp'
import '../App.css';
import '../data';
import { Category } from '../data'


const Sidebar = () => {
    return (
  <div className="left-col">
    <h2 className="title">Danh mục sản phẩm</h2>
    <div className="box">
      {Category.map((item)=>(
      <a href="#"><img src={item.image}/><p>{item.title}</p><span>{item.number_of_products}</span></a>
      ))}
    </div>
  </div>
    )
}

export default Sidebar
