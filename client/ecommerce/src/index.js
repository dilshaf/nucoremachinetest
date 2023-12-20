import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from './App';
import ViewDetails from './ViewDetails';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Update from './Update';
import CartView from './CartView';
import UpdateCart from './UpdateCart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/view' element={<ViewDetails/>}/>
      <Route path='/cart' element={<CartView/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/update/cart/:id' element={<UpdateCart/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
  </React.StrictMode>
);


