import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Faq from './pages/Faq.jsx';
import Cart from './pages/Cart.jsx';

function NotFound() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Page not found</h2>
      <p>The page you requested does not exist.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="about" element={<About />} />
      <Route path="faq" element={<Faq />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
