import React, { Fragment, useEffect, useState } from "react";
import "./BookDetail.scss";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillStarFill, BsFillHeartFill } from "react-icons/bs";
import { IoCheckmarkSharp, IoPersonCircleSharp } from "react-icons/io5";
import { FaGreaterThanEqual } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import Toast from "react-bootstrap/Toast";
import { Button } from "react-bootstrap";
import BookItem from "../Home/Books/BookItem";
import Slider from "react-slick";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorsDetails,
  getProductDetails,
} from "../../redux/features/product/productDetailsSlice";
import Loading from "../../more/Loader";
import {
  clearErrorsReview,
  newReview,
  resetStateReview,
} from "../../redux/features/product/newReviewSlice";
import { toast, ToastContainer } from "react-toastify";
import { Rating } from "@material-ui/lab";
import { addItemsToCart } from "../../redux/features/cart/cartSlice";
import { addItemsToFavourite } from "../../redux/features/favourite/favouriteSlice";
import { numberWithCommas } from "../../more/FormatNumber";

const Books = [
  {
    title: "Ra Bờ Suối Ngắm Hoa Kèn Hồng",
    author: "Nguyễn Nhật Ánh",
    img: "https://drive.google.com/uc?id=1evMkN-8Yzk2FL51iREJZXawvg1-CpMVc",
    price: "100.500 đ",
  },
  {
    title: "Làm Bạn Với Bầu Trời",
    author: "Nguyễn Nhật Ánh",
    img: "https://drive.google.com/uc?id=1f81BHRFLAE1yEddPLdRUJO3jXJ2_SQPS",
    price: "150.500 đ",
  },
  {
    title: "Chúc Một Ngày Tốt Lành",
    author: "Nguyễn Nhật Ánh",
    img: "https://drive.google.com/uc?id=1qiStbESBEiBavZGEgTvcvoI7UHW9MKEy",
    price: "90.500 đ",
  },
  {
    title: "Ngày Xưa Có Một Chuyện Tình",
    author: "Nguyễn Nhật Ánh",
    img: "https://drive.google.com/uc?id=1iljqkkb1hT_FPSzkZJc0y5XtwNfzNL1K",
    price: "111.500 đ",
  },
  {
    title: "Tàn Lửa",
    author: "Shizukui Shusuke",
    img: "https://drive.google.com/uc?id=1SNwfEQMgarJBqvFH2ECYpEIxPGdGR1FG",
    price: "111.500 đ",
  },
  {
    title: "Cảm Ơn Người Lớn",
    author: "Nguyễn Nhật Ánh",
    img: "https://drive.google.com/uc?id=1SFgK4XIgGATHp0hauLyMf_Ccbs-sDuEj",
    price: "111.500 đ",
  },
  {
    title: "Chuyện Kể Rằng Có Nàng Và Tôi",
    author: "Nhiều tác giả",
    img: "https://drive.google.com/uc?id=15eeAUNLISuTCIDK_YRiSQwCWglfJbHZW",
    price: "111.500 đ",
  },
  {
    title: "Cố Định Một Đám Mây",
    author: "Nguyễn Ngọc Tư",
    img: "https://drive.google.com/uc?id=1DRQUMkxDzs4ldQwJ0X746gDL9boMVW_Q",
    price: "111.500 đ",
  },
];

export default function BookDetail() {
  function AddButton() {
    const addToCart = (id) => {
      dispatch(addItemsToCart(id, 1));
      toast.success(
        `Sách ${product.name} đã được thêm vào giỏ hàng thành công!`,
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    };

    return (
      <div>
        <button
          type="button"
          onClick={() => addToCart(product._id)}
          className="book-add-btn btn border rounded text-center fs-6 text-uppercase p-3 ps-4 pe-4 fw-bold"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    );
  }

  function AddFavorite() {
    const [show, setShow] = useState(false);
    const addToFavourite = (id) => {
      dispatch(addItemsToFavourite(id));
      toast.success(
        `Sách ${product.name} đã được thêm vào yêu thích thành công!`,
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    };

    return (
      <div>
        <button
          type="button"
          onClick={() => addToFavourite(product._id)}
          className="book-like-btn border border-2 rounded text-center align-middle p-1 ps-3 pe-3"
        >
          <i className="book-like-icon text-danger fs-6">
            {" "}
            <BsFillHeartFill />{" "}
          </i>
          Thêm vào yêu thích
        </button>
      </div>
    );
  }

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  //   add review
  // const [quantity, setQuantity] = useState(1);
  // const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  // const increaseQuantity = () => {
  //   if (product.Stock <= quantity) return;

  //   const qty = quantity + 1;
  //   setQuantity(qty);
  // };
  // const decreaseQuantity = () => {
  //   if (1 >= quantity) return;

  //   const qty = quantity - 1;
  //   setQuantity(qty);
  // };
  // const submitReviewToggle = () => {
  //   open ? setOpen(false) : setOpen(true);
  // };
  const { user } = useSelector((state) => state.user);
  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("bookId", id);
    console.log(comment, rating);
    console.log(myForm);
    dispatch(newReview(myForm));
    // );
    // console.log(user);
    // setOpen(false);
  };
  // done
  //   console.log(product);
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id]);
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrorsDetails());
    }
    if (!success && reviewError) {
      toast.error(`${reviewError}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(reviewError);
      dispatch(clearErrorsReview());
      dispatch(getProductDetails(id));
    } else if (success) {
      toast.success("Thêm review sách thành công! 🎊", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(success);
      dispatch(resetStateReview());
      dispatch(getProductDetails(id));
    }
  }, [dispatch, error, alert, reviewError, success]);

  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (product.images && product.images.length > 0) {
      let images = [];

      product.images.map((item, i) => {
        images.push({
          original: item.url,
          thumbnail: item.url,
        });
      });
      setImages(images);
    }
  }, [product.images]);

  // let images = [];
  // product &&
  //   product.forEach((item) => {
  //     images.push({
  //       original: item.url,
  //       thumbnail: item.url,
  //     });
  //   });

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="book-container container-fluid">
          <div className="book-breadcrumb ms-5 mt-2">
            <Breadcrumb>
              <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
              <Breadcrumb.Item href="/categories" className="text-capitalize">
                Danh mục sách
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="text-capitalize">
                {product.name}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="book-main-container pb-5">
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <div className="book-main-img">
                    {/* <ImageGallery 
                      items={[
                        {
                          original: "https://picsum.photos/id/1018/1000/600/",
                          // thumbnail: "https://picsum.photos/id/1018/250/150/"
                        },
                        {
                          original: "https://picsum.photos/id/1015/1000/600/",
                          // thumbnail: "https://picsum.photos/id/1015/250/150/"
                        },
                        {
                          original: "https://picsum.photos/id/1019/1000/600/",
                          // thumbnail: "https://picsum.photos/id/1019/250/150/"
                        }
                      ]}
                      /> */}
                    {/* <ImageGallery
                      items={product.images &&
                        product.images.map((prop) => (
                          {original: prop.url, thumbnail: prop.url}
                        ))}
                    /> */}
                    <ImageGallery items={Images} />
                  </div>
                </Col>
                <Col xs={12} md={8}>
                  <div className="book-main-intro ms-5">
                    <div className="book-main-title">
                      <h3 className="book-title text-capitalize">
                        {product.name}
                      </h3>
                      <div className="book-author-container d-flex">
                        <div className="book-author me-5 mb-2">
                          <span>Tác giả:</span>
                          <span className="book-author-name ms-1 me-2">
                            {product.author}
                          </span>
                        </div>
                        <div className="book-publish">
                          <span>Phát hành:</span>
                          <span className="book-publish-name ms-1 me-2">
                            {product.publisher}
                          </span>
                        </div>
                      </div>
                      <div className="book-rating border-bottom pb-2">
                        {/* <i className="book-item-rating text-warning me-1">
                          <BsFillStarFill />
                        </i>
                        <i className="book-item-rating text-warning me-1">
                          <BsFillStarFill />
                        </i>
                        <i className="book-item-rating text-warning me-1">
                          <BsFillStarFill />
                        </i>
                        <i className="book-item-rating text-warning me-1">
                          <BsFillStarFill />
                        </i>
                        <i className="book-item-rating text-warning me-1">
                          <BsFillStarFill />
                        </i> */}
                        <Rating value={product.ratings} size="large" readOnly />
                        <p className="d-inline ms-2 align-middle">
                          <i>{product.numOfReviews} đánh giá</i>
                        </p>
                      </div>
                    </div>
                    <div className="book-main-price mt-2 d-flex align-items-center border-bottom pb-2">
                      <div className="book-price-container flex-grow-1">
                        <div className="book-price-current">
                          <span className="book-current fs-1">
                            {/* {numberWithCommas(product.price)}{" "} */}
                            <sup>
                              <u>đ</u>
                            </sup>
                          </span>
                        </div>
                        <div className="book-price-cover-container d-flex">
                          <div className="book-price-cover">
                            <span>Giá bìa:</span>
                            <span className="book-cover ms-2">
                              80.000{" "}
                              <sup>
                                <u>đ</u>
                              </sup>
                            </span>
                          </div>
                          <div className="book-price-sale">
                            <span className="book-sale-name ms-5">
                              Tiết kiệm:
                            </span>
                            <span className="book-sale ms-2 fw-bold">
                              12.000{" "}
                              <sup>
                                <u>đ</u>
                              </sup>{" "}
                              (-15%)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="book-add-button flex-shrink-0 d-grid gap-2 d-md-flex justify-content-md-end col-4">
                        <AddButton />
                      </div>
                    </div>
                    <div className="book-main-check mt-3">
                      <p className="book-check">
                        <i className="book-check-icon text-success">
                          <IoCheckmarkSharp />{" "}
                        </i>
                        Bọc plastic miễn phí
                      </p>
                      <p className="book-check">
                        <i className="book-check-icon text-success">
                          <IoCheckmarkSharp />{" "}
                        </i>
                        Giao hàng miễn phí trong nội thành TP. HCM với đơn hàng
                        <i className="book-compare-icon text-success fs-6">
                          {" "}
                          <FaGreaterThanEqual />{" "}
                        </i>
                        <span className="text-success fw-bold">150.000đ</span>
                      </p>
                      <p className="book-check">
                        <i className="book-check-icon text-success">
                          <IoCheckmarkSharp />{" "}
                        </i>
                        Giao hàng miễn phí toàn quốc với đơn hàng
                        <i className="book-compare-icon text-success fs-6">
                          {" "}
                          <FaGreaterThanEqual />{" "}
                        </i>
                        <span className="text-success fw-bold">250.000đ</span>
                      </p>
                      <div className="book-like-button">
                        <AddFavorite />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="book-intro ms-5 me-5">
            <h4 className="book-intro-title text-capitalize pb-2">
              Giới thiệu sách
            </h4>
            <h5 className="book-name-title text-capitalize pt-2">
              {product.name}
            </h5>
            <p className="book-intro-content">{product.description}</p>
          </div>
          <div className="book-detail ms-5 me-5 pt-3">
            <h4 className="book-detail-title text-capitalize pb-2">
              Thông tin chi tiết
            </h4>
            <Table striped bordered hover responsive>
              {/* <thead>
                    <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                    </thead> */}
              <tbody>
                <tr>
                  <td>Tác giả</td>
                  <td>{product.author}</td>
                </tr>
                <tr>
                  <td>Công ty phát hành</td>
                  <td>{product.publisher}</td>
                </tr>
                <tr>
                  <td>Loại bìa</td>
                  <td>Bìa mềm</td>
                </tr>
                <tr>
                  <td>Số trang</td>
                  <td>{product.pageNumber}</td>
                </tr>
                <tr>
                  <td>Kích thước</td>
                  <td>12 x 20 cm</td>
                </tr>
                <tr>
                  <td>Trọng lượng</td>
                  <td>210 gram</td>
                </tr>
                <tr>
                  <td>Đã bán</td>
                  <td>{product.Sold}</td>
                </tr>
                <tr>
                  <td>Ngày phát hành</td>
                  <td>01/06/2017</td>
                </tr>
                <tr>
                  <td>Danh mục</td>
                  <td>{product.category}</td>
                </tr>
              </tbody>
            </Table>
            <div className="book-add-button text-center">
              <AddButton />
            </div>
          </div>
          <div className="book-comment ms-5 me-5">
            <h4 className="book-comment-title text-capitalize pb-2 mt-5">
              Đánh giá
            </h4>
            <div className="book-comment-rating">
              {/* <i className="book-item-rating text-warning me-1">
                <BsFillStarFill />
              </i>
              <i className="book-item-rating text-warning me-1">
                <BsFillStarFill />
              </i>
              <i className="book-item-rating text-warning me-1">
                <BsFillStarFill />
              </i>
              <i className="book-item-rating text-warning me-1">
                <BsFillStarFill />
              </i>
              <i className="book-item-rating text-warning me-1">
                <BsFillStarFill />
              </i>
              <p className="d-inline ms-2 align-middle">
                5.0 <i>(4 đánh giá)</i>
              </p> */}
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
                className="book-item-rating"
                name="rating"
              />
            </div>
            <p className="book-comment-number mt-2">
              {product.numOfReviews} bình luận
            </p>
            <form>
              <div className="book-comment-write d-flex">
                <div className="book-comment-avatar flex-shrink-0 fs-1">
                  <IoPersonCircleSharp />
                </div>
                <div className="book-comment-field flex-grow-1 ms-3 d-flex align-items-end flex-column">
                  <textarea
                    id="book-cmt-field"
                    className="w-100 ps-2"
                    name="comment"
                    placeholder="Viết bình luận của bạn"
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                  <div className="book-comment-button mt-2 mb-4">
                    <Button
                      //   type="submit"
                      className="book-cmt-btn border rounded text-center fs-6"
                      onClick={reviewSubmitHandler}
                    >
                      Đăng
                    </Button>
                  </div>
                </div>
              </div>
            </form>
            <div className="book-comment-others">
              {/* {product.reviews &&
                product.reviews.map((item, i) => {
                  <div className="book-comment-user d-flex border-top">
                    <div className="book-comment-avatar flex-shrink-0 fs-1">
                      <IoPersonCircleSharp />
                    </div>
                    <div className="book-comment-container flex-grow-1 ms-3 mt-4">
                      <div className="book-comment-userinfo d-flex">
                        <div className="book-comment-name w-100 fw-bold">
                          <p>{item.name}</p>
                        </div>
                        <div className="book-comment-date flex-shrink-1 text-secondary fs-6">
                          <p>{item.time}</p>
                        </div>
                      </div>
                      <div className="book-comment-content">
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  </div>;
                })} */}
              {product.reviews &&
                product.reviews.map((item, i) => (
                  <div className="book-comment-user d-flex border-top" key={i}>
                    <div className="book-comment-avatar flex-shrink-0 fs-1">
                      <IoPersonCircleSharp />
                    </div>
                    <div className="book-comment-container flex-grow-1 ms-3 mt-4">
                      <div className="book-comment-userinfo d-flex">
                        <div className="book-comment-name w-100 fw-bold">
                          <p>{item.name}</p>
                        </div>
                        <Rating value={item.rating} size="large" readOnly />
                        <div className="book-comment-date flex-shrink-1 text-secondary fs-6">
                          <p>{item.time}</p>
                        </div>
                      </div>
                      <div className="book-comment-content">
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              {/* <div className="book-comment-user d-flex border-top">
                <div className="book-comment-avatar flex-shrink-0 fs-1">
                  <IoPersonCircleSharp />
                </div>
                <div className="book-comment-container flex-grow-1 ms-3 mt-4">
                  <div className="book-comment-userinfo d-flex">
                    <div className="book-comment-name w-100 fw-bold">
                      <p>Nguyễn Văn B</p>
                    </div>
                    <div className="book-comment-date flex-shrink-1 text-secondary fs-6">
                      <p>04/04/2022</p>
                    </div>
                  </div>
                  <div className="book-comment-content">
                    <p>Bài viết rất hay!</p>
                  </div>
                </div>
              </div>
              <div className="book-comment-user d-flex border-top">
                <div className="book-comment-avatar flex-shrink-0 fs-1">
                  <IoPersonCircleSharp />
                </div>
                <div className="book-comment-container flex-grow-1 ms-3 mt-4">
                  <div className="book-comment-userinfo d-flex">
                    <div className="book-comment-name w-100 fw-bold">
                      <p>Nguyễn Văn A</p>
                    </div>
                    <div className="book-comment-date flex-shrink-1 text-secondary fs-6">
                      <p>03/04/2022</p>
                    </div>
                  </div>
                  <div className="book-comment-content">
                    <p>Mình nhất định sẽ mua cuốn sách này về đọc.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="book-other ms-5 me-5 pt-3">
            <h4 className="book-other-title text-capitalize pb-2 mt-5">
              Sách cùng danh mục
            </h4>
            <Slider className="first-books" {...settings}>
              {Books.map((item, index) => {
                return (
                  <BookItem
                    key={index}
                    title={item.title}
                    author={item.author}
                    img={item.img}
                    price={item.price}
                  />
                );
              })}
            </Slider>
            <div className="book-see-more text-center mt-0">
              <Button className="book-see-more-button" variant="primary">
                Xem thêm &rarr;
              </Button>
            </div>
          </div>

          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      )}
    </Fragment>
  );
}
