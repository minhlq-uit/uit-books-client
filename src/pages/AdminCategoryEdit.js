import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import AdminCategoryEditComponent from "../components/Admin/AdminCategory/AdminCategoryEdit/AdminCategoryEdit";

export default function AdminCategoryEdit() {
  return (
    <AdminLayout>
      {/* <BlogList /> */}
      <AdminCategoryEditComponent />
    </AdminLayout>
  );
}
