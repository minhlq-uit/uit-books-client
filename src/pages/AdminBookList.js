import React from "react";
import AdminLayout from "../layouts/AdminLayout";
// import BlogList from "../components/Admin/AdminBlog/AdminBlogList/index";
import AdminBookListComponent from "../components/Admin/AdminBook/AdminBookList/AdminBookList";

export default function AdminBookList() {
  return (
    <AdminLayout>
      {/* <BlogList /> */}
      <AdminBookListComponent />
    </AdminLayout>
  );
}
