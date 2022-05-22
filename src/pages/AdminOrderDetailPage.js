import React from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import AdminOrderDetail from "../components/Admin/AdminOrder/AdminOrderDetail/AdminOrderDetail";

const AdminOrderDetailPage = () => {
  return (
    <div>
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <div style={{ flex: "4" }}>
          <Navbar />
          <AdminOrderDetail
            orderCode="DC12345"
            orderDate="11-05-2022"
            payMethod="Thanh toán khi nhận hàng"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetailPage;
