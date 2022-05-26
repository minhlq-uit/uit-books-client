import axios from "axios";

class ProductDataService {
  createBook(productData) {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    return axios.post(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/new`,
      productData,
      config
    );
  }
  getAllBook(
    keyword = "",
    currentPage = 1,
    price = [0, 25000],
    category,
    ratings = 0
  ) {
    return axios.get(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books?keyword=${keyword}&page=${currentPage}`
    );
  }
  updateBook(id, info) {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    return axios.put(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`,
      info,
      config
    );
  }
  deleteBook(id) {
    return axios.delete(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`
    );
  }
  getDetailBook(id) {
    return axios.get(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/${id}`
    );
  }
  createNewReview(reviewData) {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    return axios.post(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/review`,
      reviewData,
      config
    );
  }
  getAllReview(id) {
    return axios.get(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/reviews?id=${id}`
    );
  }
  deleteReview(reviewId, bookId) {
    return axios.delete(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/reviews?id=${reviewId}&bookId=${bookId}`
    );
  }
  getNewsBook() {
    return axios.get(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books/new`
    );
  }
  getPopularBook() {
    return axios.get(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books/popular`
    );
  }
}

export default new ProductDataService();
