import React  from "react";
import {render} from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BeforeLogin from "./pages/BeforeLogin.js";
import AfterLogin from "./pages/AfterLogin.js";
import Login from "./components/Login.js";
import Profile from "./pages/profile.js";
import DetailProduct from "./pages/DetailProduct.js";
import Cart from "./pages/Cart.js";
import AddProduct from "./pages/admin/AddProduct.js";
import AddTopping from "./pages/admin/AddTopping"
import IncomeTransaction from "./pages/admin/IncomeTransaction"


const AppRouter = () => (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<BeforeLogin />} />
      <Route path="/AfterLogin" element={<AfterLogin />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/DetailProduct" element={<DetailProduct />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/AddTopping" element={<AddTopping />} />
      <Route path="/IncomeTransaction" element={<IncomeTransaction />} />
      </Routes>
    </BrowserRouter>
    );
  


export default AppRouter;