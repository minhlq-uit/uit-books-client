import axios from "axios";

class AdminService {
  getAllUsers() {
    return axios.get("http://localhost:5000/api/v2/admin/users", {
      withCredentials: true,
    });
  }
  getUserDetails(id) {
    return axios.get(`http://localhost:5000/api/v2/admin/user/${id}`, {
      withCredentials: true,
    });
  }
  updateRoleUser(id, name, email, role) {
    return axios.put(
      `http://localhost:5000/api/v2/admin/user/${id}`,
      {
        name,
        email,
        role,
      },
      {
        withCredentials: true,
      }
    );
  }
  deleteUser(id) {
    return axios.delete(`http://localhost:5000/api/v2/admin/user/${id}`, {
      withCredentials: true,
    });
  }
  // ORDER
  getAllOrders() {
    return axios.get("http://localhost:5000/api/v2/admin/orders", {
      withCredentials: true,
    });
  }
  getOrder(id) {
    return axios.get(`http://localhost:5000/api/v2/order/${id}`, {
      withCredentials: true,
    });
  }
  updateOrder(id, orderStatus) {
    return axios.put(
      `http://localhost:5000/api/v2/admin/order/${id}`,
      {
        status: orderStatus,
      },
      {
        withCredentials: true,
      }
    );
  }
  deleteOrder(id) {
    return axios.delete(`http://localhost:5000/api/v2/admin/order/${id}`, {
      withCredentials: true,
    });
  }
}

export default new AdminService();
