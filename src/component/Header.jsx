import React, {useEffect,useState} from 'react'
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



const Header = (props) => {
  const {name,setName} = props;
  
  const logout = async () => {
    await fetch('http://localhost:3000/logout',{
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      credentials:'include',
    });
    setName('');

  }

  let menu;
  if(name===''){
    menu = (
      <header className="header">
        <div className="header-1">
          <a href="#home" className="logo"> <img src={logo} alt="" /></a>
          <form className="search-box-container" action>
            <input type="search" id="search-box" placeholder="Tìm kiếm" />
            <label htmlFor="search-box"/>
          </form>
        </div>
        <div className="header-2">
          <div id="menu-bar" className="fas fa-bars" />
          <nav className="navbar shop-nav">
            <a href="/" className="active">Trang Chủ</a>
            <a href="#">Thông tin</a>
            <a href="#">Rau củ</a>
            <a href="/product">Cửa hàng</a>
            <a href="#">Blogs</a>
            <a href="#">Câu hỏi</a>
            <a href="#">Liên hệ</a>
          </nav>
          <div className="icons">
            <a href="/cart"><Carts/>Giỏ hàng</a>
            <a href="/signin"><SignUp/>{name ? 'Hi' + name : 'Đăng nhập'}</a>
            <a href="/signup" onClick={logout}><AccountCircle/>Đăng xuất</a>
          </div>
        </div>
      </header>
    )
  }
  else{
    menu=(
      <header className="header">
      <div className="header-1">
        <a href="#home" className="logo"> <img src={logo} alt="" /></a>
        <form className="search-box-container" action>
          <input type="search" id="search-box" placeholder="Tìm kiếm" />
          <label htmlFor="search-box"/>
        </form>
      </div>
      <div className="header-2">
        <div id="menu-bar" className="fas fa-bars" />
        <nav className="navbar shop-nav">
          <a href="/" className="active">Trang Chủ</a>
          <a href="#">Thông tin</a>
          <a href="#">Rau củ</a>
          <a href="/product">Cửa hàng</a>
          <a href="#">Blogs</a>
          <a href="#">Câu hỏi</a>
          <a href="#">Liên hệ</a>
        </nav>
        <div className="icons">
          <a href="/cart"><Carts/>Giỏ hàng</a>
          <a href="/signin"><SignUp/>Đăng nhập</a>
          <a href="/signup"><AccountCircle/>Đăng kí</a>
        </div>
      </div>
    </header>
    )
  }

    return (
      //   <header className="header">
      //   <div className="header-1">
      //     <a href="#home" className="logo"> <img src={logo} alt="" /></a>
      //     <form className="search-box-container" action>
      //       <input type="search" id="search-box" placeholder="Tìm kiếm" />
      //       <label htmlFor="search-box"/>
      //     </form>
      //   </div>
      //   <div className="header-2">
      //     <div id="menu-bar" className="fas fa-bars" />
      //     <nav className="navbar shop-nav">
      //       <a href="/" className="active">Trang Chủ</a>
      //       <a href="#">Thông tin</a>
      //       <a href="#">Rau củ</a>
      //       <a href="/product">Cửa hàng</a>
      //       <a href="#">Blogs</a>
      //       <a href="#">Câu hỏi</a>
      //       <a href="#">Liên hệ</a>
      //     </nav>
      //     <div className="icons">
      //       <a href="/cart"><Carts/>Giỏ hàng</a>
      //       <a href="/signin"><SignUp/>{name ? 'Hi' + name : 'Đăng nhập'}</a>
      //       <a href="/signup"><AccountCircle/>Đăng kí</a>
      //     </div>
      //   </div>
      // </header>
      
      <div>
        {menu}
      </div>
    )
}

export default Header
