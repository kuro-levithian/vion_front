import React from 'react'
import '../App.css';
import '../data';
import banner from '../images/home-1.webp'



const Banner = () => {
    return (
            <div className="right-col">
              <img src={banner} alt="" />
            </div>
    )
}

export default Banner
