import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from './index/Index';
import Catalogue from './catalogue/Catalogue';
import ProductPage from './product/ProductPage';
import Cart from './cart/Cart';

export default function Router() {
  return (
  <BrowserRouter>
  <ul>
  <li>
  <Link to="/">Index</Link>
  </li>
  <li>
  <Link to="/catalogue">Catalogue</Link>
  </li>
  <li>
  <Link to="/cart">Cart</Link>
  </li>
  </ul>
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
  </BrowserRouter>
  );
  }
