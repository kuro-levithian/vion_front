import React from 'react'
import './User.css'

function UserInfoNav() {
  return (
    <div className='user-info-nav m-3 p-3 shadow rounded shadow-sm'>
      <ul>
        <li > 
          <a href="/orderhistory">Lịch sử mua hàng</a>
        </li>
        <li> 
          <a href="/">Đơn hàng hiện tại </a>
        </li>
        <li className='active'> 
          <a href="/edit-info">Sửa chữa thông tin tài khoản </a>
        </li>
      </ul>
    </div>
  )
}

export default UserInfoNav
