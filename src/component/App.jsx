import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../store/Slices/Products';
import NavBar from './Main/NavBar/NavBar';
import Footer from './Main/Footer/footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import ErrorPage from './Error/Error';
import { CateFetch } from '../store/Slices/Category';
import SignUp from './SignUp/SignUp';
import LogIn from './SignUp/Login';
import ProductDetail from './Details/ProductDetail/ProductDetail';
import { ClearCart, oldCart } from '../store/Slices/cart';
import { wishLocal } from '../store/Slices/WhichList';
import CartPage from './Details/Cart/CartPage';
import 'react-toastify/dist/ReactToastify.css';
import WishList from './Details/WishList/WishList';
import CashOut from './Details/Cart/CashOut/CashOut';
import AllProducts from './Details/Products/Products';
import Contact from './Contact/Contact';
import About from './About/About';
import ProductsCate from './Details/Products/ProductsCate';
AOS.init();
export default function App() {
  const dis = useDispatch()
  useEffect(()=>{
    dis(fetchProducts())
    dis(CateFetch())
    dis(oldCart())
    dis(wishLocal())
  },[])
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
        <Routes>
          <Route path='/*' element={<ErrorPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/logIn' element={<LogIn/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/products/:cate' element={<ProductsCate/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/wishlist' element={<WishList/>}/>
          <Route path='/cart/cashout' element={<CashOut/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

