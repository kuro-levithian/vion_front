import React from 'react'
import styled from "styled-components"
import Footer from '../component/Footer'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Description from '../component/Description'

const Container = styled.div``;

const Product_Details = () => {
  return (
    <Container>
      <Header />
      <div>
      <section className="home" id="home">
          <div className="box-container">
            <Sidebar/>
            <Description/>
          </div>
        </section>

        {/*product section start*/}
          
        {/* last product section ends   */}
        </div>
      
      <Footer />
    </Container>
  );
};

export default Product_Details
