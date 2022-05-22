import React from "react";
import AdminLayout from "../layouts/AdminLayout";
// import BlogList from "../components/Admin/AdminBlog/AdminBlogList/index";
import AdminCategoryListComponent from "../components/Admin/AdminCategory/AdminCategoryList/AdminCategoryList";

export default function AdminCategoryList() {
  return (
    <AdminLayout>
      {/* <BlogList /> */}
      <AdminCategoryListComponent />
    </AdminLayout>
  );
}
