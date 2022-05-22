import React from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import OrderTable from "../components/Admin/AdminOrder/OrderTable/OrderTable"
// import OrderTable from "../components/Admin/AdminOrder/OrderAdmin/OrderTable/OrderTable";
// import AdminOrder from '../components/AdminOrder/AdminOrder';
// import AdminOrderDetail from '../components/Admin/AdminOrder/AdminOrderDetail/AdminOrderDetail';
// import AdminOrderDetail from '../components/Admin/AdminOrder/AdminOrderDetail/AdminOrderDetail';
const AdminOrderPage = () => {
  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <div style={{ flex: "4" }}>
          <Navbar />
          <OrderTable />
        </div>
      </div>

      
    </>
  );
};

export default AdminOrderPage;
