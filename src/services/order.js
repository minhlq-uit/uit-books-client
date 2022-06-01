import axios from "axios";

class OrderDataService {
  getAllOrders() {
    return axios.get("http://localhost:5000/api/v2/orders/me", {
      withCredentials: true,
    });
  }
}

export default new OrderDataService();
