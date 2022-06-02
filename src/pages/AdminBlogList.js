import React from 'react';
import AdminLayout from '../layouts/AdminLayout';
import BlogList from '../components/Admin/AdminBlog/AdminBlogList/index';
import ProtectedRoute from '../routes/PrivateRoute';

export default function AdminBlogList({isAdmin}) {
    return (
        <ProtectedRoute isAdmin={isAdmin}>
            <AdminLayout>
                <BlogList />
            </AdminLayout>
        </ProtectedRoute>
    );
}
