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
import SignIn from './page/SignIn'
import SignUp from './page/SignUp'
import ForgotPassword from './page/ForgotPassword'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element = {<ProductList/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/product_details" element = {<Product_Details/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/forgot" element={<ForgotPassword/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
