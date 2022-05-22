import React from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import BlogEdit from '../components/Admin/AdminBlog/AdminBlogEdit/index'

export default function AdminBlogEdit() {
    return (
        <div style={{ display: "flex", width: "100%" }} >
            <Sidebar />
            <div style={{ flex: "4" }}>
                <Navbar />
                <BlogEdit />
            </div>
        </div>
    );
}
