import React from 'react'
import styled, { css } from "styled-components";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'


const Container = styled.div`
width: 100%;
margin-left: auto;
box-sizing: border-box;
margin-right: auto;
display: block;
padding-left: 16px;
padding-right: 16px;
margin-bottom: 32px;
`
const CardWrapper=styled.div`
overflow: hidden;
padding: 32px;
margin: 48px auto 0;
width: 500px;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
border-radius: 5px;
background-color:white;
`

const CardHeader=styled.h1`
font-weight: 600;
font-size: 2.125rem;
line-height: 1.235;
letter-spacing: 0.00735em;
text-align: center;
`
const reducer = (previousValue, currentValue) => previousValue + currentValue;

const products = [
    {
      name: 'Product 1',
      desc: 'A nice thing',
      price: 9.99,
    },
    {
      name: 'Product 2',
      desc: 'Another thing',
      price: 3.45,
    },
    {
      name: 'Product 3',
      desc: 'Something else',
      price: 6.51,
    },
    {
      name: 'Product 4',
      desc: 'Best thing of all',
      price: 14.11,
    },
];
const Price = [{name:'Total', desc:' ', price:console.log(products.reduce(reducer))}];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];

const payments = [
    { name: 'Payment type', detail: 'Shipping' },
    { name: 'Shipping Date', detail: '14/12/2022' },
    { name: 'Time', detail: '9:45 A.M' },
    { name: 'Return', detail: '7 days after received' },
  ];

const Title = styled.h6`
font-weight: 600;
font-size: 1.25rem;
line-height: 1.6;
letter-spacing: 0.0075em;
margin-bottom: 0.35em;
color:black;
`
const Action = styled.div`
display:flex;
justify-content:space-between;
`
const Button = styled.button`
display: inline-block;
width: 100%;
padding: 15px 0;
margin-top:25px;
position:relative;
box-sizing:border-box;
font-family: inherit;
font-size: 14px;
font-weight: 700;
color: black;
background-color: #FFDE59;
border: .1rem gray solid;
border-radius: 25px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

&:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`



const Review = () => {
    return (
        <CardWrapper>
            <CardHeader>Thanh toán</CardHeader>
            <Title>Thông tin đơn hàng</Title>
            <List disablePadding>
                {products.map((product) => (
                <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                    <ListItemText primary={product.name} secondary={product.desc}/>
                    <Typography variant="body2">${product.price}</Typography>
                </ListItem>
                ))}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>$34.06</Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Shipping</Typography>
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Payment details</Typography>
                    <Grid container>
                    {payments.map((payment) => (
                        <React.Fragment key={payment.name}>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{payment.name}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{payment.detail}</Typography>
                        </Grid>
                        </React.Fragment>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
            <Action>
                <Button>GO BACK</Button>
                <Button><a href="/thanks">ORDER</a></Button>
            </Action>
        </CardWrapper>
    )
}

export default Review
