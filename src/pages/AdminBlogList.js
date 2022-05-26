import React from 'react';
import AdminLayout from '../layouts/AdminLayout';
import BlogList from '../components/Admin/AdminBlog/AdminBlogList/index';

export default function AdminBlogList() {
    return (
        <AdminLayout>
            <BlogList />
        </AdminLayout>
    );
}
