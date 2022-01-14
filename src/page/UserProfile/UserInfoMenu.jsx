import React from "react";
import "./User.css";
import { IoLogOutOutline } from "react-icons/io5";

function UserInfoMenu() {
  return (
    <div className="user-info-menu p-3 shadow rounded shadow-sm m-3">
      <strong className="user-name">(Anh) XXX</strong>
      <button>
        <div className="log-out">Thoát tài khoản</div><IoLogOutOutline size={32} />
        
      </button>
    </div>
  );
}

export default UserInfoMenu;
