import React from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import BlogEdit from '../components/Admin/AdminBlog/AdminBlogEdit/index'
import ProtectedRoute from '../routes/PrivateRoute';

export default function AdminBlogEdit({isAdmin}) {
    return (
        <ProtectedRoute isAdmin={isAdmin}>
            <div style={{ display: "flex", width: "100%" }} >
                <Sidebar />
                <div style={{ flex: "4" }}>
                    <Navbar />
                    <BlogEdit />
                </div>
            </div>
        </ProtectedRoute>
    );
}
