import axios from "axios";

class ProductDataService {
  createBook(productData) {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    return axios.post(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/book/new`,
      // `http://localhost:5000/api/v2/book/new`,
      productData,
      config
    );
  }
  getAllBook(
    keyword,
    currentPage,
    price,
    category,
    ratings,
    author,
    publisher
  ) {
    if (category && author && publisher) {
      return axios.get(
        `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}&author=${author}&publisher=${publisher}`
      );
    } else if (category && publisher && !author) {
      return axios.get(
        `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}&publisher=${publisher}`
      );
    } else if (category && author && !publisher) {
      return axios.get(
        `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}&author=${author}`
      );
    } else if (category && !author && !publisher) {
      return axios.get(
        `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`
      );
    } else if (author && publisher) {
      return axios.get(
        `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&author=${author}&publisher=${publisher}`
      );
    } else if (author && !publisher) {
      return axios.get(
        `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&author=${author}`
      );
    } else if (publisher) {
      return axios.get(
        `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&publisher=${publisher}`
      );
    } else {
      return axios.get(
        `https://peaceful-brushlands-80713.herokuapp.com/api/v2/books?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`
      );
    }
  }
  getAllBookAdmin() {
    return axios.get(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/admin/books`
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
    return axios.post(`http://localhost:5000/api/v2/book/review`, reviewData, {
      withCredentials: true,
    });
  }
  getAllReview(id) {
    return axios.get(
      `https://peaceful-brushlands-80713.herokuapp.com/api/v2/reviews?id=${id}`
    );
  }
  deleteReview(reviewId, bookId) {
    return axios.delete(
      `http://localhost:5000/api/v2/reviews?id=${reviewId}&bookId=${bookId}`,
      {
        withCredentials: true,
      }
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
  getRatedBook() {
    return axios.get(`https://peaceful-brushlands-80713.herokuapp.com/api/v2/books/rated`);
  }
  getMostReviewProducts() {
    return axios.get(`https://peaceful-brushlands-80713.herokuapp.com/api/v2/books/most-review`);
  }
}

export default new ProductDataService();
