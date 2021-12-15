import React from 'react'
import logo from '../images/logo_header.webp'
import '../App.css';
import '../data';
import { FaSearch } from 'react-icons/fa';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RoomIcon from '@mui/icons-material/Room';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/styles';

const Search = styled(SearchIcon)({
  width: '8rem',
  height: '100%',
  lineHeight: '4rem',
  textAlign: 'center',
  background: 'linear-gradient(135deg, #ff934b 0%, #ff5e62 100%)',
  color: '#fff',
  fontSize: '1.5rem',
  cursor: 'pointer'
});

const Carts = styled(ShoppingCartIcon)({
  color: '#fd7e14',
  marginRight: '.5rem',
  marginLeft: '1rem',
  width:'5rem'
});

const SignUp = styled(AccessibilityNewIcon)({
  color: '#fd7e14',
  marginRight: '.5rem',
  marginLeft: '1rem'
});

const AccountCircle = styled(AccountCircleIcon)({
  color: '#fd7e14',
  marginRight: '.5rem',
  marginLeft: '1rem'
});



const Header = () => {
    return (
        <header className="header">
        <div className="header-1">
          <a href="#home" className="logo"> <img src={logo} alt="" /></a>
          <form className="search-box-container" action>
            <input type="search" id="search-box" placeholder="search here" />
            <label htmlFor="search-box"/>
          </form>
        </div>
        <div className="header-2">
          <div id="menu-bar" className="fas fa-bars" />
          <nav className="navbar shop-nav">
            <a href="/" className="active">Home</a>
            <a href="#">about us</a>
            <a href="#">fruits and vegetables</a>
            <a href="/product">shop</a>
            <a href="#">blogs</a>
            <a href="#">FAQ</a>
            <a href="#">contact</a>
          </nav>
          <div className="icons">
            <a href="/cart"><Carts/>Your Cart</a>
            <a href="/login"><SignUp/>Sign In</a>
            <a href="/register"><AccountCircle/>Sign Up</a>
          </div>
        </div>
      </header>
    )
}

export default Header
