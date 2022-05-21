import React from 'react';
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import UserList from '../components/Admin/AdminUser/AdminUserList/index';

export default function AdminUserList() {
    return (
        <div style={{ display: "flex", width: "100%" }} >
            <Sidebar />
            <div style={{ flex: "4" }}>
                <Navbar />
                <UserList />
            </div>
        </div>
    );
}
