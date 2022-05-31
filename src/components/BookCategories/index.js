import React, { useState, useEffect } from "react";
import "./BookCategories.scss";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import BookItem from "../Home/Books/BookItem";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import {
  clearErrors,
  getProduct,
} from "../../redux/features/product/productsSlice";
import { Button } from "react-bootstrap";

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
const priceData = [50000, 100000, 150000, 200000, 500000];
const publiserData = [
  "NXB Trẻ",
  "Nhã Nam",
  "Kim Đồng",
  "Phương Tây",
  "Đông Tây",
  "Thái Hà",
];
const categoryData = [
  "Văn học trong nước",
  "Văn học nước ngoài",
  "Sách kinh tế",
  "Sách kỹ năng sống",
  "Sách tuổi teen",
  "Sách thiếu nhi",
  "Sách chuyên ngành",
  "Sách ngoại ngữ",
  "Thưởng thức đời sống",
];
const authorData = [
  "Nguyễn Nhật Ánh",
  "Nguyễn Ngọc Thạch",
  "Minh Nhật",
  "Phan Việt",
  "An Khang",
  "Nguyen",
  "Nguyenn",
];
export default function BookCategories() {
  const dispatch = useDispatch();
  let { keyword } = useParams();
  // console.log(keyword);
  // console.log(keyword);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState();
  const [ratings, setRatings] = useState(0);
  const [author, setAuthor] = useState();
  const [publisher, setPublisher] = useState();
  // pagination
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  // selector
  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);
  const priceHandlerSlider = (event, newPrice) => {
    setPrice(newPrice);
  };
  const priceHandlerClick = (e) => {
    setPrice([priceData[4], Number(e.target.value)]);
  };
  const reserHandler = (e) => {
    setPrice([0, 25000]);
    setCategory();
    setAuthor();
    setPublisher();
  };
  useEffect(() => {
    if (error) {
      // alert(error);
      console.log(error);
      dispatch(clearErrors());
    }
    if (!keyword) keyword = "";
    // console.log(keyword);
    const infoData = {
      keyword: keyword,
      price: price,
      author: author,
      publisher: publisher,
      category: category,
      currentPage: currentPage,
      ratings: ratings,
    };
    console.log(category);
    console.log(author);
    dispatch(getProduct(infoData));
  }, [
    dispatch,
    keyword,
    currentPage,
    price,
    category,
    ratings,
    alert,
    error,
    author,
    publisher,
  ]);
  return (
    <div className="categories-container container-fluid">
      <div className="categories-breadcrumb ms-5 mt-2 mb-5">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item href="/books" className="text-capitalize">
            Văn học trong nước
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="categories-main-container m-5 mt-3">
        <Tab.Container
          id="list-group-tabs-example"
          defaultActiveKey="#van-hoc-trong-nuoc"
        >
          <Row>
            <Col sm={3}>
              <div className="categories-nav-container">
                <div className="categories-nav mb-5">
                  <h6 className="categories-nav-title p-3 mb-0 fw-bold rounded">
                    Danh Mục
                  </h6>
                  <ListGroup
                    variant="pills"
                    className="categories-nav-main d-flex flex-column text-capitalize"
                  >
                    {categoryData.map((item, i) => (
                      <div className="list-group-item form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input ms-1 me-2"
                            type="radio"
                            name="flexRadioDefault"
                            value={item}
                            onClick={(e) => setCategory(e.target.value)}
                          />
                          {item}
                        </label>
                      </div>
                    ))}
                    <div className="list-group-item form-check">
                      <label className="form-check-label">
                        <input
                          className="form-check-input ms-1 me-2"
                          type="radio"
                          name="flexRadioDefault"
                          value=""
                          onClick={(e) => setCategory()}
                        />
                        Khác
                      </label>
                    </div>
                  </ListGroup>
                </div>
                <div className="categories-author mb-5">
                  <h6 className="categories-author-title p-3 mb-0 fw-bold rounded">
                    Tác giả
                  </h6>
                  {authorData.map((item, i) => (
                    <div className="list-group-item form-check">
                      <label className="form-check-label">
                        <input
                          className="form-check-input ms-1 me-2"
                          type="radio"
                          name="flexRadioDefault"
                          value={item}
                          onClick={(e) => setAuthor(e.target.value)}
                        />
                        {item}
                      </label>
                    </div>
                  ))}
                  <div className="list-group-item form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input ms-1 me-2"
                        type="radio"
                        name="flexRadioDefault"
                        value=""
                        onClick={(e) => setAuthor()}
                      />
                      Khác
                    </label>
                  </div>
                </div>
                <div className="categories-price mb-5">
                  <h6 className="categories-price-title p-3 mb-0 fw-bold rounded">
                    Giá sản phẩm
                  </h6>
                  <Slider
                    value={price}
                    onChange={priceHandlerSlider}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={0}
                    max={1000000}
                  />
                  {priceData.map((item, i) => (
                    <div className="list-group-item form-check">
                      <label className="form-check-label">
                        <input
                          className="form-check-input ms-1 me-2"
                          type="radio"
                          name="flexRadioDefault"
                          value={item}
                          onClick={(e) => {
                            if (i === 0) priceData[i - 1] = 0;
                            setPrice([priceData[i - 1], Number(e.target.value)]);
                          }}
                        />
                        {priceData[i - 1]}đ - {priceData[i]}đ
                      </label>
                    </div>
                  ))}
                  <div className="list-group-item form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input ms-1 me-2"
                        type="radio"
                        name="flexRadioDefault"
                        value=""
                        onClick={priceHandlerClick}
                      />
                      Trên 500000đ
                    </label>
                  </div>
                </div>
                <div className="categories-publisher mb-5">
                  <h6 className="categories-publisher-title p-3 mb-0 fw-bold rounded">
                    Nhà xuất bản
                  </h6>
                  {publiserData.map((item, i) => (
                    <div className="list-group-item form-check">
                      <label className="form-check-label">
                        <input
                          className="form-check-input ms-1 me-2"
                          type="radio"
                          name="flexRadioDefault"
                          value={item}
                          onClick={(e) => setPublisher(e.target.value)}
                        />
                        {item}
                      </label>
                    </div>
                  ))}
                  <div className="list-group-item form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input ms-1 me-2"
                        type="radio"
                        name="flexRadioDefault"
                        value=""
                        onClick={(e) => setPublisher()}
                      />
                      Khác
                    </label>
                  </div>
                </div>
                <Button variant="outline-primary" onClick={reserHandler}>
                  Khôi phục
                </Button>
              </div>
            </Col>
            <Col sm={9}>
              <div className="categories-main">
                {products.length === 0 ? (
                  <h3 className="categories-main-title p-2 ps-3 text-light text-capitalize">
                    Không tìm thấy
                  </h3>
                ) : (
                  <div>
                    <h3 className="categories-main-title p-2 ps-3 text-light text-capitalize">
                      Kết quả tìm kiếm
                    </h3>
                    <div className="category-books row row-cols-3">
                      {products.map((item, index) => {
                        return (
                          <BookItem
                            key={index}
                            id={item._id}
                            title={item.name}
                            author={item.author}
                            //   img={item.images[0].url}
                            img={item.images[0].url}
                            price={item.price}
                            Sold={item.Sold}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
                <div
                  className="pagination__box"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "6vmax",
                  }}
                >
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="First"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}
