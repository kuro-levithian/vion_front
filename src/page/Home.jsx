import React,{useState, useEffect} from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Good from '../component/Good'
import Banner from '../component/Banner'
import styled from 'styled-components'
import axios from 'axios'
const Container = styled.div`
background: #eff7fa;
color: #888;
`

const Home = (query) => {
  const [dataProduct, setDataProduct] = useState([])
  useEffect(() => {
    axios.post('http://localhost:60000/api_public/list/product', {
      number: query.pageSize || 9,
      page: query.page || 0,
      // ...{filter: (strFilter ? strFilter : '')}
    }).then(res => {
      setDataProduct(res.data.result)
    })
  }, []);
    return (
        <Container>
        <Header />
        <div>
        <section className="home" id="home">
          <div className="box-container">
            <Sidebar/>
            <Banner/>
          </div>
        </section>
        {/*product section start*/}
        <section className="product">
            <div className="heading">
                <h2>Top savers to day <span>20% off</span></h2>
                <a href="#">view all</a>
          </div>
          <div className='box-container'>
          {dataProduct.map((item,index)=>(
            <Good data={item} key={index}/>))}
          </div>
        </section>
        {/* last product section ends   */}
        </div>
        <Footer/>
        </Container>
    )
}

export default Home
