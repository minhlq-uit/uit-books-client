import React from "react";
import AdminLayout from "../layouts/AdminLayout";
// import BlogList from "../components/Admin/AdminBlog/AdminBlogList/index";
import AdminBookListComponent from "../components/Admin/AdminBook/AdminBookList/AdminBookList";
import ProtectedRoute from "../routes/PrivateRoute";
export default function AdminBookList({ isAdmin }) {
  return (
    <ProtectedRoute isAdmin={isAdmin}>
      <AdminLayout>
        {/* <BlogList /> */}
        <AdminBookListComponent />
      </AdminLayout>
    </ProtectedRoute>
  );
}
