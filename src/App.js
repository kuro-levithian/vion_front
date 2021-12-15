import './App.css';
import Home from './page/Home';
import Cart from './page/Cart';
import Product_Details from './page/Product_Details';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductList from './page/ProductList';
import LoginForm from './page/SignInForm/SignInForm'
import SignUpForm from './page/SignUpForm/SignUpForm'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element = {<ProductList/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/product_details" element = {<Product_Details/>}/>
        <Route path="/register" element={<SignUpForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
