import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/HomePage/Home'
import Header from './navigation/Header'
import Products from './Routes/ProductsPage/Products'
import AuthLoginForm from './authForm/authLoginForm'
import AuthSignUpForm from './authForm/AuthSignUpForm'
import { CartContextProvider } from "./context/CartContext";
import Carts from "./Routes/carts/Carts";
import NotFound from "./Routes/NotFound";
import ProductsDetails from "./Routes/productsDetails/ProductsDetails";
import ShippingDetails from "./shipping/ShippingDetails";
import CustomerInfo from './customerInfo/CutomerInfo'
import OrderNow from "./order_now/OrderNow";

function App() {

  return (
    <>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} loader />
          <Route path='/Products' element={<Products />} />
          <Route path='/Products/:productId' element={<ProductsDetails />} />
          <Route path='/login' element={<AuthLoginForm />} />
          <Route path='/signup' element={<AuthSignUpForm />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/shippingDetails" element={<ShippingDetails />} />
          <Route path="/customerInfo" element={<CustomerInfo />} />
          <Route path="/orderNow" element={<OrderNow />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </CartContextProvider>
    </>
  )
}

export default App
