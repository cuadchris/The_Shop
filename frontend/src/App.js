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
import UserListPage from './pages/UserListPage';
import UserEditPage from './pages/UserEditPage';
import ProductListPage from './pages/ProductListPage';
import ProductEditPage from './pages/ProductEditPage';
import OrderListPage from './pages/OrderListPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search/:keyword' element={<Home />} />
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/shipping' element={<ShippingPage />} />
              <Route path='/payment' element={<PaymentPage />} />
              <Route path='/placeorder' element={<PlaceOrderPage />} />
              <Route path='/order/:id' element={<OrderPage />} />
              <Route path='/admin/userlist' element={<UserListPage />} />
              <Route path='/admin/user/:id/edit' element={<UserEditPage />} />
              <Route path='/admin/productlist' element={<ProductListPage />} />
              <Route
                path='/admin/product/:id/edit'
                element={<ProductEditPage />}
              />
              <Route path='/admin/orderlist' element={<OrderListPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
