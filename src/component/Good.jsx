import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
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


const Good = (props) => {
    const {Product,onAdd} = props;
    return (
            <div className="box" key={Product.id}>
                <span className="discount">-33%</span>
                <div className="corner-box"><span /></div>
                <StyledLink to={`/product/${Product.id}`}><img src={Product.image}/></StyledLink>
                <h3><StyledLink to={`/product/${Product.id}`}>{Product.title}</StyledLink></h3>
                <p>instock - <span>1</span>kg</p>
                <div className="price"><span>{Product.main_price}</span>{Product.sub_price}</div>
                <button type="button" className="btn" onClick={()=>onAdd(Product)}>Add to cart</button>
            </div>
    )
}
export default Good
