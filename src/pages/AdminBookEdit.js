import React from "react";
import AdminLayout from "../layouts/AdminLayout";
// import BlogList from "../components/Admin/AdminBlog/AdminBlogList/index";
import AdminBookEditComponent from "../components/Admin/AdminBook/AdminBookEdit/AdminBookEdit";

export default function AdminBookEdit() {
  return (
    <AdminLayout>
      {/* <BlogList /> */}
      <AdminBookEditComponent />
    </AdminLayout>
  );
}
