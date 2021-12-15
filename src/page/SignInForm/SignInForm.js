import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from "react-router-dom";
import "./SignInForm.css";
import ForgotPassword from "./ForgotPassword";
import { useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Vui lòng nhập username")
    .max(20, "Username tối đa 20 ký tự"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(6, "Mật khẩu tối thiểu 6 ký tự")
});


export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onLoginSubmit = (data) => {
    console.log(data);
  };

  const [buttonPopup, setButtonPopup] = useState(false);

  return (

    <div className="signin-form-container"> 
        <h1 className="login">Đăng nhập</h1>
              <form className="login-form" onSubmit={handleSubmit(onLoginSubmit)}>
                  <label>Tên đăng nhập</label>
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

                  <div className="forgot-password" onClick={() => setButtonPopup(true)}>Quên mật khẩu?</div>
                  <ForgotPassword trigger={buttonPopup} setTrigger={setButtonPopup}></ForgotPassword>

                  <div className="btn-container">
                      <button className="form-field" type="submit"> TIẾP TỤC</button>
                  </div>
                  <div className="no-account"><p>Chưa có tài khoản, đăng kí tại đây</p>
                  
                  </div>
                  
              </form>
        </div>

  );
}
