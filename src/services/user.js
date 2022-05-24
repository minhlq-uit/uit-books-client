import axios from "axios";

class UserDataService {

  login(email, password) {
    return axios.post(
      "http://localhost:5000/api/v2/login",
      {
        email: email,
        password: password
      }
    );
  }
  registration(name, email, password) {
    return axios.post(
      "http://localhost:5000/api/v2/registration",
      {
        name: name,
        email: email,
        password: password
      }
    );
  }
  logout() {
    return axios.get("http://localhost:5000/api/v2/logout");
  }
  forgotPassword(email) {
    return axios.post(
      "http://localhost:5000/api/v2/password/forgot",
      {
        email: email
      }
    );
  }
  resetPassword(password, confirmPassword, token) {
    return axios.post(
      `http://localhost:5000/api/v2/password/reset/${token}`,
      {
        password: password,
        confirmPassword: confirmPassword
      }
    );
  }
  resetPassword() {
    return axios.get("http://localhost:5000/api/v2/me")
  }
}

export default new UserDataService();
