import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled, { css } from "styled-components";

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 500px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;
const CardHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Title = styled.h6`
font-weight: 600;
font-size: 1.25rem;
line-height: 1.6;
letter-spacing: 0.0075em;
margin-bottom: 0.35em;
color:black;
`
const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: black;
  background-color: #FFDE59;
  border: .1rem gray solid;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const Thank_you = () => {
    return (
        <CardWrapper>
            <CardHeader>
                <CardHeading>Thanh toán</CardHeading>
            </CardHeader>
            <Title>Thank you for purchase</Title>
            <React.Fragment>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
            </React.Fragment>
            <CardButton><a href="/">Go back Home</a></CardButton>
        </CardWrapper>
    )
}

export default Thank_you
