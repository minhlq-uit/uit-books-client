import React from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import UserList from "../components/Admin/AdminUser/AdminUserList/index";
import ProtectedRoute from "../routes/PrivateRoute";

export default function AdminUserList({isAdmin}) {
  return (
    <ProtectedRoute isAdmin={isAdmin}>
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <div style={{ flex: "4" }}>
          <Navbar />
          <UserList />
        </div>
      </div>
    </ProtectedRoute>
  );
}
