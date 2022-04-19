import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Delivery from "../pages/Delivery";
import Return from "../pages/Return";
import TermsOfUse from "../pages/TermsOfUse";
import FAQs from "../pages/FAQs";
import Basket from "../pages/Basket";
import PageSignIn from '../pages/PageSignIn';
import ConfirmationPage from '../pages/ConfirmationPage';
import PaymentPage from '../pages/PaymentPage';


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/chinh-sach-giao-hang" element={<Delivery />} />
          <Route path="/chinh-sach-doi-tra" element={<Return />} />
          <Route path="/dieu-khoan-su-dung" element={<TermsOfUse />} />
          <Route path="/cau-hoi-thuong-gap" element={<FAQs />} />
          <Route path='/gio-hang' element={<Basket />} />
          <Route path='/xac-nhan' element={<ConfirmationPage />} />
          <Route path='/thanh-toan' element={<PaymentPage />} />
          <Route path='/signin' element={<PageSignIn />} />
        </Routes>
      </div>
    </Router>
  );
}
