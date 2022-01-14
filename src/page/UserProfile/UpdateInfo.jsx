import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiTwotoneEdit } from "react-icons/ai";
import "./User.css";
import UserInfoMenu from "./UserInfoMenu";
import UserInfoNav from "./UserInfoNav";
import ResetPassword from "./ResetPassword";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Vui lòng nhập tên đăng nhập")
    .max(20, "Username tối đa 20 ký tự"),
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
      .min(10, "Số điện thoại không hợp lệ"),
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

function UpdateInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const registerSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="update-info-container">
      <UserInfoMenu />
      <UserInfoNav />
      <div className="form-container">
        <form className="update-form" onSubmit={handleSubmit(registerSubmit)}>
          <div className="form-group-item">
            {/* <label>Tên đăng nhập </label> */}
            <input
              className="form-field"
              type="text"
              name="username"
              placeholder="Tên đăng nhập"
              {...register("username")}
            />
            <div className="edit-btn-icon">
              <AiTwotoneEdit size={24} />
            </div>
            {errors.username && (
              <span className="error">{errors.username?.message}</span>
            )}
          </div>
          <div className="form-group-item">
            {/* <label>Email</label> */}
            <input
              className="form-field"
              type="email"
              name="email"
              placeholder="Email"
              {...register("email")}
            />
            <div className="edit-btn-icon">
              <AiTwotoneEdit size={24} />
            </div>
            {errors.email && (
              <span className="error">{errors.email?.message}</span>
            )}
          </div>
          <div className="form-group-row">
            <div className="form-group-item">
              {/* <label>Họ</label> */}
              <input
                className="form-field"
                type="text"
                name="lastname"
                placeholder="Họ"
                {...register("lastname")}
              />
              <div className="edit-btn-icon">
                <AiTwotoneEdit size={24} />
              </div>
              {errors.lastname && (
                <span className="error">{errors.lastname?.message}</span>
              )}
            </div>
            <div className="form-group-item">
              {/* <label>Tên</label> */}
              <input
                className="form-field"
                type="text"
                name="firstname"
                placeholder="Tên"
                {...register("firstname")}
              />
              <div className="edit-btn-icon">
                <AiTwotoneEdit size={24} />
              </div>
              {errors.firstname && (
                <span className="error">{errors.firstname?.message}</span>
              )}
            </div>
          </div>
          <div className="form-group-item">
            {/* <label>Số điện thoại</label> */}
            <input
              className="form-field"
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              {...register("phone")}
            />
            <div className="edit-btn-icon">
              <AiTwotoneEdit size={24} />
            </div>
            {errors.phone && (
              <span className="error">{errors.phone?.message}</span>
            )}
          </div>
          <div className="form-group-row">
            <div className="form-group-item">
              {/* <label>Số nhà, đường</label> */}
              <input
                className="form-field"
                type="text"
                name="address"
                placeholder="Số nhà, đường"
                {...register("address")}
              />
              <div className="edit-btn-icon">
                <AiTwotoneEdit size={24} />
              </div>
              {errors.address && (
                <span className="error">{errors.address?.message}</span>
              )}
            </div>
            <div className="form-group-item">
              {/* <label>Thành phố</label> */}
              <input
                className="form-field"
                type="text"
                name="city"
                placeholder="Thành phố"
                {...register("city")}
              />
              <div className="edit-btn-icon">
                <AiTwotoneEdit size={24} />
              </div>
              {errors.city && (
                <span className="error">{errors.city?.message}</span>
              )}
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group-item">
              {/* <label>Phường</label> */}
              <input
                className="form-field"
                type="text"
                name="ward"
                placeholder="Phường"
                {...register("ward")}
              />
              <div className="edit-btn-icon">
                <AiTwotoneEdit size={24} />
              </div>
              {errors.ward && (
                <span className="error">{errors.ward?.message}</span>
              )}
            </div>
            <div className="form-group-item">
              {/* <label>Quận</label> */}
              <input
                className="form-field"
                type="text"
                name="district"
                placeholder="Quận"
                {...register("district")}
              />
              <div className="edit-btn-icon">
                <AiTwotoneEdit size={24} />
              </div>
              {errors.district && (
                <span className="error">{errors.district?.message}</span>
              )}
            </div>
          </div>

          <div className="btn-container">
            <button className="form-field" type="submit">
              Cập nhật
            </button>
          </div>
        </form>
      </div>
      <ResetPassword/>
    </div>
  );
}

export default UpdateInfo;
