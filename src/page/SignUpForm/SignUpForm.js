import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from "react-router-dom";
import "./SignUpForm.css";

const schema = yup.object().shape({
    username: yup
        .string()
        .required("Vui lòng nhập tên đăng nhập")
        .max(20, "Username tối đa 20 ký tự"),
    password: yup
        .string()
        .required("Vui lòng nhập mật khẩu")
        .min(6, "Mật khẩu tối thiểu 6 ký tự"),
    email: yup
        .string()
        .required("Vui lòng nhập email"),
    lastname: yup
        .string()
        .required("Vui lòng nhập họ"),      
    firstname: yup
        .string()
        .required("Vui lòng nhập tên"),    
    phone: yup
        .string()
        .required("Vui lòng nhập số điện thoại")
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Số điện thoại không hợp lệ"),
    address: yup
        .string()
        .required("Vui lòng nhập địa chỉ"),
            
    city: yup
        .string()
        .required("Vui lòng nhập thành phố"),
        
    ward: yup
        .string()
        .required("Vui lòng nhập phường"),
        
    district: yup
        .string()
        .required("Vui lòng nhập quận, huyện"),
});

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const [submitted, setSubmitted] = useState(false);

  const registerSubmit = (data) => {
    setSubmitted(true);
    console.log(data);
  }

  return (

        <div className="form-container"> 
            <h1 className="sign-up">Đăng kí</h1>
                <form className="register-form" onSubmit={handleSubmit(registerSubmit)}>
                    {submitted ? <div className="success-message">Bạn đã đăng ký thành công. Trở về trang chủ.</div> : null}
                    <label>Tên đăng nhập </label>
                    <input
                        id="username"
                        className="form-field"
                        type="text"
                        name="username"
                        {...register("username")}
                  />
                  {errors.username && <span className="error">{errors.username?.message}</span>}
                    <label>Mật khẩu</label>
                    <input
                        id="password"
                        className="form-field"
                        type="password"
                        name="password"
                        {...register("password")}
                  />
                  {errors.password && <span className="error">{errors.password?.message}</span>}
                    <label>Email</label>
                    <input
                        id="email"
                        className="form-field"
                        type="email"
                        name="email"
                        {...register("email")}
                    />
                    {errors.email && <span className="error">{errors.email?.message}</span>}
                    <div className="firstlastname">
                       <div > 
                           <label>Họ</label>
                            <input
                                id="lastname"
                                className="form-field"
                                type="text"
                                name="lastname"
                                {...register("lastname")}
                            />              
                    {errors.lastname && <span className="error">{errors.lastname?.message}</span>}
                        </div>
                           
                       <div>
                        <label>Tên</label>
                            <input
                                id="firstname"
                                className="form-field"
                                type="text"
                                name="firstname"
                                {...register("firstname")}
                            />                    
                    {errors.firstname && <span className="error">{errors.firstname?.message}</span>}

                        </div> 
                    </div>
                    <label>Số điện thoại</label>
                    <input
                        id="phone"
                        className="form-field"
                        type="text"
                        name="phone"
                        {...register("phone")}
                    />
                    {errors.phone && <span className="error">{errors.phone?.message}</span>}

                    <div className="addcity">    
                        <div> 
                            <label>Số nhà, đường</label>
                            <input
                                id="address"
                                className="form-field"
                                type="text"
                                name="address"
                                {...register("address")}
                            /> 
                        {errors.address && <span className="error">{errors.address?.message}</span>}                        

                        </div>   
                        <div>
                            <label>Thành phố</label>
                            <input
                                id="city"
                                className="form-field"
                                type="text"
                                name="city"
                                {...register("city")}
                            />     
                            {errors.city && <span className="error">{errors.city?.message}</span>}               
                        </div> 
                    </div>

                    <div className="ward-district">    
                        <div> 
                            <label>Phường</label>
                            <input
                                id="ward"
                                className="form-field"
                                type="text"
                                name="ward"
                                {...register("ward")}
                            />                       
                            {errors.ward && <span className="error">{errors.ward?.message}</span>}     

                        </div>   
                        <div>
                            <label>Quận</label>
                            <input
                                id="district"
                                className="form-field"
                                type="text"
                                name="district"
                                {...register("district")}
                            />        
                            {errors.district && <span className="error">{errors.district?.message}</span>}            
                        </div> 
                    </div>

                    <div className="btn-container">
                        <button className="form-field" type="submit"> TIẾP TỤC</button>
                    </div>
                    
                    {/* <div className="has-account"><p>Đã có tài khoản, đăng nhập tại đây</p>
                    </div> */}

                </form>
                
        </div>
    );
}
