import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product/:id' element={<ProductPage/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
