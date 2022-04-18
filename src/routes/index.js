import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import Categories from '../pages/Categories';
import Book from '../pages/Book';
import Blogs from '../pages/Blogs';
import Blog from '../pages/Blog';

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/book' element={<Book />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            </div>
        </Router>
    );
}
