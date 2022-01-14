import React from 'react'
import styled from "styled-components"
import Footer from '../component/Footer'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Description from '../component/Description'
import "bootstrap/dist/css/bootstrap.css";
import logo1 from '../images/p-1.webp'


const Container = styled.div``;

const Section = styled.section`
display: grid;
grid-template-columns: auto;
grid-gap: 30px;
`
const Product_box = styled.div`
cursor: pointer;
margin-bottom: 2rem;
flex: 1 1 23rem;
text-align: center;
padding: 1.5rem;
background:#fff;
border-radius: .3rem;
position: relative;
box-shadow: 0 2px 8px 0 rgba(0 0 0 / 6%);
`
const Image = styled.img`
transition: 0.3s all;
&:hover{
  transform: scale(1.1);
  transition: .2s linear;
}
`
const Price = styled.div`
font-size: 1.5rem;
color:#000;
font-weight: bold;
padding: 1rem 0;
`
const Span = styled.span`

`
const Button = styled.button`
font-size: 1.3rem;
padding: .5rem 1.5rem;
background: linear-gradient(135deg, #ff934b 0%, #ff5e62 100%);
color: #fff;
font-weight: bold;
border-radius: 5rem;
outline:none;
cursor: pointer;
border: none;
&:hover{
  transform: scale(1.1);
  transition: .2s linear;
}
`


const Product_Details = () => {

  return (
    <Container>
      <Header/>
      <div>
        <section className="home" id="home">
          <div className="box-container">
            <Sidebar/>
            <Description/>
          </div>
        </section>

        <Section id='feature' className='my-5 pb-5'>
          <div class="container text-center mt-5 py-5">
            <h3>Related Product</h3>
            <hr class="mx-auto"/>
            <p>Here you can check out product with the same category</p>
          </div>

          <div className='row mx-auto container-fluid' style={{gap:"10px"}}>

              <Product_box className="text-center col-lg-3 col-md-4 col-12">
                <Image className="img-fluid mb-3" style={{transition: "0.3s all"}} src={logo1}/>
                <h5 className="p-name" style={{"color":"var(--blue)","fontSize":"1.5rem","marginBottom":".5rem","marginTop":".5rem"}}>Organic Potato</h5>
                <Price>$14</Price>
                <Button class="buy-btn" name="button">Thêm vào giỏ</Button>
              </Product_box>

              <Product_box className="text-center col-lg-3 col-md-4 col-12">
                <Image className="img-fluid mb-3" style={{transition: "0.3s all"}} src={logo1}/>
                <h5 className="p-name" style={{"color":"var(--blue)","fontSize":"1.5rem","marginBottom":".5rem","marginTop":".5rem"}}>Organic Potato</h5>
                <Price>$14</Price>
                <Button class="buy-btn" name="button">Thêm vào giỏ</Button>
              </Product_box>

              <Product_box className="text-center col-lg-3 col-md-4 col-12">
                <Image className="img-fluid mb-3" style={{transition: "0.3s all"}} src={logo1}/>
                <h5 className="p-name" style={{"color":"var(--blue)","fontSize":"1.5rem","marginBottom":".5rem","marginTop":".5rem"}}>Organic Potato</h5>
                <Price>$14</Price>
                <Button class="buy-btn" name="button">Thêm vào giỏ</Button>
              </Product_box>

              <Product_box className="text-center col-lg-3 col-md-4 col-12">
                <Image className="img-fluid mb-3" style={{transition: "0.3s all"}} src={logo1}/>
                <h5 className="p-name" style={{"color":"var(--blue)","fontSize":"1.5rem","marginBottom":".5rem","marginTop":".5rem"}}>Organic Potato</h5>
                <Price>$14</Price>
                <Button class="buy-btn" name="button">Thêm vào giỏ</Button>
              </Product_box>

          </div>

        </Section>

      </div>
      <Footer />
    </Container>
  );
};

export default Product_Details
