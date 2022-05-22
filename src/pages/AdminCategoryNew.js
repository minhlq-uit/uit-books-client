import React from "react";
import AdminLayout from "../layouts/AdminLayout";
// import BlogList from "../components/Admin/AdminBlog/AdminBlogList/index";
import AdminCategoryNewComponent from "../components/Admin/AdminCategory/AdminCategoryNew/AdminCategoryNew";

export default function AdminCategoryNew() {
  return (
    <AdminLayout>
      {/* <BlogList /> */}
      <AdminCategoryNewComponent />
    </AdminLayout>
  );
}
