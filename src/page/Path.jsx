import React,{useState,useEffect} from 'react'
import Home from './Home'
import Cart from './Cart';
import Product_Details from './Product_Details';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductList from './ProductList';
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import User_info from './User_form/User_info'
import Review from './User_form/Review'
import Thank_you from './/User_form/Thank_you'
import Checkout from './Checkout'
import OTP from './OTP'
import OrderHistory from './OrderHistory';
import UserProfile from './UserProfile/UserProfile';
import UpdateInfo from './UserProfile/UpdateInfo';
import ResetPassword from './UserProfile/ResetPassword';
import {Product} from '../data'

function Path() {
    const [cartItems, setcartItems] = useState([]);


    const [name, setName] = useState();

    useEffect(()=>{
      (
        async() =>{
          const response = await fetch('http://localhost:3000/api/user',{
            headers: { 'Content-type': 'application/json' },
            credentials:'include',
          });

          const content = await response.json();
          setName(content.name);
        }
      )();
    })

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home Product={Product} name={name} setName={setName}/>} />
                <Route path="/product" element = {<ProductList/>}/>
                <Route path="/cart" element = {<Cart cartItems={cartItems}/>}/>
                <Route path="/product/:id" element = {<Product_Details/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn setName={setName}/>}/>
                <Route path="/forgot" element={<ForgotPassword/>}/>
                <Route path="/form" element={<User_info/>}/>
                <Route path="/review" element={<Review/>}/>
                <Route path="/thanks" element={<Thank_you/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/otp" element={<OTP/>}/>
                <Route path="/orderhistory" element={<OrderHistory/>}/>
                <Route path="/update" element={<UpdateInfo/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Path
