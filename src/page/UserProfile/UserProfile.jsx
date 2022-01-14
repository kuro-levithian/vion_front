import React, { useState } from 'react';
import styled from 'styled-components';
import './User.css';

const Title = styled.h2`
  text-align: center;
  color: black;
  
`;
const Wrapper = styled.section`
  padding: 10px;
  background: #b4e49c;
  margin: 5% 10% 10%;
`;

function UserProfile() {
  return (
    <div>
      <Wrapper>
        <Title>Thông tin người dùng</Title>
      </Wrapper>
      
        <div className="container">
          <div className="main-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/240px-User-avatar.svg.png"
                        className="rounded-circle p-1 bg-light"
                        width={110}
                      />
                      <div className="mt-3">
                        <h4>XXX</h4>
                        <p className="text-secondary mb-1">username</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Họ tên</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                          XXX
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        xxx@gmail.com
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Số điện thoại</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        012 345 6789
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Địa chỉ</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Số x đường y phường z quận t
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Thành phố</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        TPHCM
                      </div>
                    </div>
                  <div className="btn-container">
                  <button className="form-field">Chỉnh sửa thông tin</button>
                  
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default UserProfile
