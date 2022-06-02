import React from "react";
import AdminLayout from "../layouts/AdminLayout";
// import BlogList from "../components/Admin/AdminBlog/AdminBlogList/index";
import AdminBookNewComponent from "../components/Admin/AdminBook/AdminBookNew/AdminBookNew";
import ProtectedRoute from "../routes/PrivateRoute";
export default function AdminBookNew({isAdmin}) {
  return (
    <ProtectedRoute isAdmin={isAdmin}>
      <AdminLayout>
        {/* <BlogList /> */}
        <AdminBookNewComponent />
      </AdminLayout>
    </ProtectedRoute>
  );
}
