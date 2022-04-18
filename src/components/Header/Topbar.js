import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import "./topbar.scss";
// import "./ui.css";
import "./responsive.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupsIcon from '@mui/icons-material/Groups';
import TtyIcon from '@mui/icons-material/Tty';

export default function Topbar(props) {
    return (
        <header id="section-header">
            <section className="header-main border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-3 col-md-12">
                            <Navbar.Brand href="#home" >
                                <img className="logo" src='/images/header/uitbook-logo.png' alt="UITBook-logo" />
                                UITBooks
                            </Navbar.Brand>
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-6">
                            <form action="#" className="search-header">
                                <div className="input-group w-100">
                                    <input type="text" className="form-control" placeholder="Tìm kiếm sách theo tên hoặc tác giả" />
                                    <div className="input-group-append">
                                        <Button variant="dark">
                                            <SearchIcon /> Tìm kiếm
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="widgets-wrap float-md-right">
                                <div className="widget-header mr-3">
                                    <NavDropdown align="end" title={
                                        <div className="d-flex flex-column align-items-center">
                                            <NotificationsIcon className="nav-icon" />
                                            Thông báo
                                        </div>
                                    } id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Đăng xuất</NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                                <div className="widget-header mr-3">
                                    <NavDropdown align="end" title={
                                        <div className="d-flex flex-column align-items-center">
                                            <ShoppingCartIcon className="nav-icon" />
                                            Giỏ hàng
                                        </div>
                                    } id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Đăng xuất</NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                                <div className="widget-header">
                                    <NavDropdown align="end" title={
                                        <div className="d-flex flex-column align-items-center">
                                            <AccountBoxIcon className="nav-icon" />
                                            Tài khoản
                                        </div>
                                    } className="user-dropdown" id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="#action/3.1">Tài khoản</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Sách yêu thích</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Viết blog</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Đăng xuất</NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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


