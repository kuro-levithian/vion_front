import React,{useState} from 'react'
import styled from 'styled-components'
import Footer from '../component/Footer'
import Header from '../component/Header'
import logo1 from '../images/p-1.webp'
import logo2 from '../images/p-2.webp'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Modal} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Container = styled.div`
`
const Wrapper = styled.div`
padding:20px;
`
const Title = styled.h1`
font-weight:300;
text-align:center;
`

const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`

const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${(props)=>props.type === "filled" && "none"};
background-color:${(props)=>props.type === "filled" ? "black" : "transparent"};
color:${(props)=> props.type === "filled" && "white"};
`

const TopTexts = styled.div``

const Text = styled.span`
text-decoration:underline;
cursor:pointer;
margin: 0 10px;
`

const Bottom = styled.div`
margin-top: 15px;
display:flex;
align-items:center;
justify-content:space-between;
`

const Info = styled.div`
flex:3`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const CardLogin = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 10px;
`;

const Input = styled.input`
padding: 7px 0;
width: 100%;
font-family: inherit;
font-size: 14px;
border-top: 0;
border-right: 0;
border-bottom: 1px solid #ddd;
border-left: 0;
transition: border-bottom-color 0.25s ease-in;
background-color: #fff;
max-height: 50px;
padding-left: 10px;
border-radius: 35px;
&:focus {
  border-bottom-color: #FFDE59;
  outline: 0;
}
`;

const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại tại đây")
    .max(10, "Số điện thoại tối đa 10 ký tự")
    .min(10, "Số điện thoại tối thiểu 10 ký tự")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Số điện thoại không hợp lệ"),
});

function MyVerticallyCenteredModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onLoginSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Có lẽ quý khách chưa đăng kí để trở thành thành viên của chúng tôi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CardLogin onSubmit={handleSubmit(onLoginSubmit)}>
          <h5>Vui lòng cung cấp số điện thoại người nhận</h5>
          <Input id="phone" placeholder="Số điện thoại" type="text" name="phone"{...register("phone")}/>
          {errors.phone && <span>{errors.phone?.message}</span>}
        </CardLogin>
      </Modal.Body>
      <Modal.Footer>
        <Button type='submit'>Tiếp tục</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Cart = (props) => {

    const [modalShow, setModalShow]=useState(false);
    const {cartItems,onAdd} = props;

    return(
        <Container>
            <Header/>
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <Text>Shopping Bag()</Text>
                        <Text>Your Wistlist(0)</Text>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>

                <Bottom>
                    <Info>
                      {cartItems.length===0 && <Info>Your Cart Is Empty</Info>}
                    </Info>
                    {cartItems.map((item)=>(
                      <Info key={item.id}>
                        <ProductName>{item.title}</ProductName>
                        <div>
                          <button onClick={()=>onAdd(item)} className='add'>+</button>
                        </div>
                        <div>
                          {item.quantity} x ${item.main_price.toFixed(2)}
                        </div>
                      </Info>
                    ))}
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button onClick={() => setModalShow(true)}>CHECKOUT NOW</Button>
                        <MyVerticallyCenteredModal show={modalShow} onHide={()=>setModalShow(false)}/>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
   
}

export default Cart