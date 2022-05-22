import React from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import BlogNew from '../components/Admin/AdminBlog/AdminBlogNew/index';

export default function AdminBlogNew() {
    return (
        <div style={{ display: "flex", width: "100%" }} >
            <Sidebar />
            <div style={{ flex: "4" }}>
                <Navbar />
                <BlogNew />
            </div>
        </div>
    );
}
