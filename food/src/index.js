import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Category from './components/Admin/Category/Category';
import Subcategory from './components/Admin/Subcategory/Subcategory';
import Product from './components/Admin/Product/Product';
import Signup from './components/CustomerPage/Auth/Signup/Index';
import Login from './components/CustomerPage/Auth/Login/Index';
import OrderCart from './components/CustomerPage/ordercarts/Index';
import { Provider } from 'react-redux';
import Store from './components/Redux/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/category' element={<Category/>}/>
      <Route exact path='/subcategory' element={<Subcategory/>}/>
      <Route exact path='/product' element={<Product/>}/>
      <Route exact path='/products/:id' element={<OrderCart/>}/>

    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
