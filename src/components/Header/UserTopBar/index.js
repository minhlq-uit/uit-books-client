import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import "../topbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupsIcon from '@mui/icons-material/Groups';
import TtyIcon from '@mui/icons-material/Tty';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: "#FF9933",
        color: "white"
    },
}));

export default function UserTopBar(props) {
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
                        <div className="col-xl-4 col-lg-4 col-md-6 nav-right">
                            <div className="widgets-wrap float-md-right">
                                <div className="widget-header mr-3">
                                    {/* <NavDropdown align="end" title={
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
                                    </NavDropdown> */}
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-2">
                                            <div className="d-flex flex-column align-items-center">
                                                <NotificationsIcon className="nav-icon" />
                                                {/* Thông báo */}
                                            </div>

                                        </Nav.Link>
                                    </Nav.Item>
                                </div>
                                <div className="widget-header mr-3">
                                    {/* <NavDropdown align="end" title={
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
                                    </NavDropdown> */}
                                    <Nav.Link eventKey="link-2">
                                        <div className="d-flex flex-column align-items-center">
                                            <IconButton aria-label="cart" style={{ padding: "0" }}>
                                                <StyledBadge badgeContent={4}>
                                                    <ShoppingCartIcon className="nav-icon" />
                                                </StyledBadge>
                                            </IconButton>
                                            {/* Giỏ hàng */}
                                        </div>
                                    </Nav.Link>

                                </div>
                                <div className="widget-header">
                                    <NavDropdown align="end" title={
                                        <div className="d-flex flex-column align-items-center">
                                            <AccountBoxIcon className="nav-icon" />
                                            {/* Tài khoản */}
                                        </div>
                                    } className="user-dropdown" id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="#action/3.1">Tài khoản</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Danh sách yêu thích</NavDropdown.Item>
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

                                <NavDropdown align="start" title={
                                    <div>
                                        <ListAltIcon className="nav-icons" />
                                        Danh mục
                                    </div>
                                } className="category-list">
                                    <NavDropdown.Item href="#action/3.1">Văn Học Trong Nước</NavDropdown.Item>
                                    <NavDropdown.Divider id="category-divider" />
                                    <NavDropdown.Item href="#action/3.2">Văn Học Nước Ngoài</NavDropdown.Item>
                                    <NavDropdown.Divider id="category-divider" />
                                    <NavDropdown.Item href="#action/3.3">Sách Kinh Tế</NavDropdown.Item>
                                    <NavDropdown.Divider id="category-divider" />
                                    <NavDropdown.Item href="#action/3.2">Sách Kĩ Năng Sống</NavDropdown.Item>
                                    <NavDropdown.Divider id="category-divider" />
                                    <NavDropdown.Item href="#action/3.2">Sách Tuổi Teen</NavDropdown.Item>
                                    <NavDropdown.Divider id="category-divider" />
                                    <NavDropdown.Item href="#action/3.2">Sách Thiếu Nhi</NavDropdown.Item>
                                    <NavDropdown.Divider id="category-divider" />
                                    <NavDropdown.Item href="#action/3.2">Sách Chuyên Ngành</NavDropdown.Item>
                                    <NavDropdown.Divider id="category-divider" />
                                    <NavDropdown.Item href="#action/3.2">Sách Ngoại Ngữ</NavDropdown.Item>
                                    <NavDropdown.Divider id="category-divider" />
                                    <NavDropdown.Item href="#action/3.2">Thường Thức Đời Sống</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Link>

                            <Nav.Link href="#share" className="d-flex menu-item">
                                <RssFeedIcon className="nav-icons" />
                                Chia sẻ
                            </Nav.Link>

                            <Nav.Link href="#about" className="d-flex menu-item">
                                <GroupsIcon className="nav-icons" />
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
        </header >
    );
}


