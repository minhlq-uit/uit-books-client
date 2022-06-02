import React from "react";
import AdminLayout from "../layouts/AdminLayout";
// import BlogList from "../components/Admin/AdminBlog/AdminBlogList/index";
import AdminCategoryNewComponent from "../components/Admin/AdminCategory/AdminCategoryNew/AdminCategoryNew";
import ProtectedRoute from "../routes/PrivateRoute";
export default function AdminCategoryNew({isAdmin}) {
  return (
    <ProtectedRoute isAdmin={isAdmin}>
      <AdminLayout>
        {/* <BlogList /> */}
        <AdminCategoryNewComponent />
      </AdminLayout>
    </ProtectedRoute>
  );
}
