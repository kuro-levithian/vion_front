import React from 'react'
import "./SignInForm.css";


function ForgotPassword(props) {
    return (props.trigger) ? (
        <div className='pop-up'>
            <div className='pop-up-inner'>
            <h2>Nhập số điện thoại để nhận mã OTP</h2>
            <input
                id="otp"
                className="form-field-otp"
                type="otp"
                name="otp"
            />
                <button className='close-btn' onClick={() => props.setTrigger(false)}>Đóng</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default ForgotPassword
