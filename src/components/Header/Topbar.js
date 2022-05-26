import React, { useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./topbar.scss";
// import "./ui.css";
import "./responsive.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListAltIcon from "@mui/icons-material/ListAlt";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import GroupsIcon from "@mui/icons-material/Groups";
import TtyIcon from "@mui/icons-material/Tty";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logoutRequest } from "../../redux/features/user/userSlice";
import Loading from "../../more/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createProduct } from "../../redux/features/product/newProductSlice";
import { deleteProduct } from "../../redux/features/product/productSlice";

export default function Topbar(props) {
  const { isAuthenticated, user, status } = useSelector((state) => {
    console.log("state user", state.user);
    return state.user;
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutRequest());

    if (!isAuthenticated) {
      // toast.success(status);
    }
  };
  // test
  const productData = {
    name: "string",
    author: "string",
    publisher: "string",
    description: "string",
    price: 0,
    images: {
      url: "string",
      public_id: "string",
    },
    category: "string",
    Stock: 0,
    pageNumber: 0,
  };
  const id = "6280bab8c0487bf49ae386df";
  const handleClick = (e) => {
    console.log("123");
  };
  const handleIsAuthenticated = () => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  };

  const handleLinkToMe = (e) => {
    e.preventDefault();
    navigate("/me", { state: { ...user } });
  };

  return (
    <header id="section-header">
      <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-3 col-md-12">
              <Navbar.Brand href="#home">
                <img
                  className="logo"
                  src="/images/header/uitbook-logo.png"
                  alt="UITBook-logo"
                />
                UITBooks
              </Navbar.Brand>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-6">
              <form action="#" className="search-header">
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm sách theo tên hoặc tác giả"
                  />
                  <div className="input-group-append">
                    <Button variant="dark" onClick={handleClick}>
                      <SearchIcon /> Tìm kiếm
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="widgets-wrap float-md-right">
                <div className="widget-header mr-3">
                  <NavDropdown
                    align="end"
                    title={
                      <div className="d-flex flex-column align-items-center">
                        <NotificationsIcon className="nav-icon" />
                        Thông báo
                      </div>
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>Đăng xuất</NavDropdown.Item> */}
                  </NavDropdown>
                </div>
                <div className="widget-header mr-3">
                  <NavDropdown
                    align="end"
                    title={
                      <div className="d-flex flex-column align-items-center">
                        <ShoppingCartIcon className="nav-icon" />
                        Giỏ hàng
                      </div>
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action/3.4">Đăng xuất</NavDropdown.Item> */}
                  </NavDropdown>
                </div>
                <div className="widget-header">
                  <NavDropdown
                    align="end"
                    title={
                      <div
                        className="d-flex flex-column align-items-center"
                        onClick={handleIsAuthenticated}
                      >
                        <AccountBoxIcon className="nav-icon" />
                        Tài khoản
                      </div>
                    }
                    className="user-dropdown"
                    id="basic-nav-dropdown"
                  >
                    {isAuthenticated ? (
                      <>
                        <NavDropdown.Item
                          href="#action/3.1"
                          onClick={handleLinkToMe}
                        >
                          Tài khoản
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Sách yêu thích
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Viết blog
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                          href="#action/3.4"
                          onClick={handleLogout}
                        >
                          Đăng xuất
                        </NavDropdown.Item>
                      </>
                    ) : (
                      <>
                        <Link to="/signin"></Link>
                      </>
                    )}
                  </NavDropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          /> */}
      </section>

      <Navbar variant="light" expand="lg">
        <Container fluid="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home" className="d-flex">
                <ListAltIcon className="nav-icon" />
                Danh mục
              </Nav.Link>

              <Nav.Link href="#share" className="d-flex">
                <RssFeedIcon className="nav-icon" />
                Chia sẻ
              </Nav.Link>

              <Nav.Link href="#about" className="d-flex">
                <GroupsIcon className="nav-icon" />
                Giới thiệu
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="telephone">
            <TtyIcon />
            Liên hệ: 083.457.7251
          </div>
        </Container>
      </Navbar>
    </header>
  );
}