import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/shipping' element={<ShippingPage />} />
              <Route path='/payment' element={<PaymentPage />} />
              <Route path='/placeorder' element={<PlaceOrderPage />} />
              <Route path='/order/:id' element={<OrderPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
