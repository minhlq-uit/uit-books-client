import React from "react";
import AdminLayout from "../layouts/AdminLayout";
// import BlogList from "../components/Admin/AdminBlog/AdminBlogList/index";
import AdminBookNewComponent from "../components/Admin/AdminBook/AdminBookNew/AdminBookNew";

export default function AdminBookNew() {
  return (
    <AdminLayout>
      {/* <BlogList /> */}
      <AdminBookNewComponent />
    </AdminLayout>
  );
}
