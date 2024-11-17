import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

// код немного изменён из методички - это из за версии react-router-dom.

export default function Router() {
  return (
  <BrowserRouter>
  <ul>
  <li>
  <Link to="/">home</Link>
  </li>
  <li>
  <Link to="/about">about</Link>
  </li>
  </ul>
  <Routes>
    <Route exact path="/" element={<HomePage/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="*" element={<h3>Page not found</h3>}>
    </Route>
  </Routes>
  </BrowserRouter>
  );
  }
