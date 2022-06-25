import './App.css';
import {Home} from './Components/Home';
import {Navbar} from './Components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Products} from './Components/Prdoucts';
import { Product } from './Components/Product';
import React from 'react';
import '@stripe/stripe-js';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import Contact from './Components/Contact';
import About from './Components/About';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>} exact/>
        <Route  path="products" element={<Products/>}/>
        <Route  path="contact" element={<Contact/>}/>
        <Route  path="about" element={<About/>}/>
        <Route  path="cart" element={<Cart/>}/>
        <Route  path="checkout" element={<Checkout/>}/>
        <Route  path="products/:id" element={<Product/>}/>
      </Routes>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
