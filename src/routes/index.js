import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Delivery from "../pages/Delivery";
import Return from "../pages/Return";
import TermsOfUse from "../pages/TermsOfUse";
import FAQs from "../pages/FAQs";
import Categories from '../pages/Categories';
import Book from '../pages/Book';
import Blogs from '../pages/Blogs';
import Blog from '../pages/Blog';

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
          <Route path='/categories' element={<Categories />} />
          <Route path='/book' element={<Book />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}
