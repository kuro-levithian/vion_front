import React, { useState, useMemo } from 'react'
import styled from "styled-components"
import Footer from '../component/Footer'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Description from '../component/Description'
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios'
import { useParams } from 'react-router-dom';
const Container = styled.div``;



const Product_Details = (props) => {
  const params = useParams();
  const [data, setProduct] = useState([])
  useMemo(async () => {
   await axios.get('http://localhost:60000/api_public/getProductByUid/'+ params.uid).then(res => {
      setProduct(res.data.result[0])
    })
  }, []);
  return (
    <Container>
     <Header />
    <div>
    <section className="home" id="home">
        <div className="box-container">
          <Sidebar/>
          <Description product={data}/>
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
