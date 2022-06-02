import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import AdminCategoryEditComponent from "../components/Admin/AdminCategory/AdminCategoryEdit/AdminCategoryEdit";
import ProtectedRoute from "../routes/PrivateRoute";
export default function AdminCategoryEdit({ isAdmin }) {
  return (
    <ProtectedRoute isAdmin={isAdmin}>
      <AdminLayout>
        {/* <BlogList /> */}
        <AdminCategoryEditComponent />
      </AdminLayout>
    </ProtectedRoute>
  );
}
