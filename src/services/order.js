import axios from "axios";

class OrderDataService {
  getAllOrders() {
    return axios.get("https://peaceful-brushlands-80713.herokuapp.com/api/v2/orders/me", {
      withCredentials: true,
    });
  }
}

export default new OrderDataService();
