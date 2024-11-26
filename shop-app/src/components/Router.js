import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './index/Index';
import Catalogue from './catalogue/Catalogue';
import ProductPage from './product/ProductPage';
import Cart from './cart/Cart';
import './Global.css'
import Nav from './Nav';
import Footer from './Footer';

export default function Router() {
  return (
  <BrowserRouter>
  <Nav/>
  
  <Routes>
    <Route path="/" element={<Index/>}>
    </Route>
    <Route path="/catalogue/:toplvl?/:category2?" element={<Catalogue/>}>
    </Route>
    <Route path="/cart" element={<Cart/>}>
    </Route>
    <Route path="/product/:id" element={<ProductPage/>}>
    </Route>
    <Route path="*" element={<h3>Page not found</h3>}>
    </Route>
  </Routes>

  <Footer></Footer>
  </BrowserRouter>
  );
  }
