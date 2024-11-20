import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Products from './Products';
import AddProduct from './AddProduct';

export default function Router() {
  return (
  <BrowserRouter>
  <ul>
  <li>
  <Link to="/products">products</Link>
  </li>
  <li>
  <Link to="/addproduct">add product</Link>
  </li>
  </ul>
  <Routes>
    <Route path="/" element={<h2>Index</h2>}>
    </Route>
    <Route path="/products" element={<Products/>}>
    </Route>
    <Route path="/addproduct" element={<AddProduct/>}>
    </Route>
    <Route path="*" element={<h3>Page not found</h3>}>
    </Route>
  </Routes>
  </BrowserRouter>
  );
  }
