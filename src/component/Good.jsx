import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useCart} from 'react-use-cart'
import { useState } from 'react';
import { addCart } from '../data';
import { addProduct } from '../page/redux/cartRedux';
import { useDispatch } from 'react-redux';

const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    
    &:hover, &:active {
        text-decoration:underline;
    }
`;

const styles = {
    width: "170px",
    height: "185px",
};



const Good  = ({data}) => {
    const {addItem} = useCart();
    return (
            <div className="box">
                <span className="discount">-33%</span>
                <div className="corner-box"><span /></div>
                <StyledLink to= {`/product_details/${data.uid}`}><img src={data.image_cover ?? ''} style={styles}/></StyledLink>
                <h3>{data.product_name}</h3>
                <p>instock - <span>1</span>kg</p>
                <div className="price"><span>{data.main_price ?? 0}</span>{data.sub_price ?? 0}</div>
                <button type="button" className="btn" onClick={()=>addItem(data.uid)}>Add to cart</button>
            </div>
    )
}

export default Good 