import React from "react";
import AdminLayout from "../layouts/AdminLayout";
// import BlogList from "../components/Admin/AdminBlog/AdminBlogList/index";
import AdminCategoryListComponent from "../components/Admin/AdminCategory/AdminCategoryList/AdminCategoryList";
import ProtectedRoute from "../routes/PrivateRoute";
export default function AdminCategoryList({isAdmin}) {
  return (
    <ProtectedRoute isAdmin={isAdmin}>
      <AdminLayout>
        {/* <BlogList /> */}
        <AdminCategoryListComponent />
      </AdminLayout>
    </ProtectedRoute>
  );
}
