import React from 'react';
import './BookCategories.scss';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';
import BookItem from '../Home/Books/BookItem';

const Books = [
    {
        title: 'Ra Bờ Suối Ngắm Hoa Kèn Hồng',
        author: 'Nguyễn Nhật Ánh',
        img: 'https://drive.google.com/uc?id=1evMkN-8Yzk2FL51iREJZXawvg1-CpMVc',
        price: '100.500 đ'
    },
    {
        title: 'Làm Bạn Với Bầu Trời',
        author: 'Nguyễn Nhật Ánh',
        img: 'https://drive.google.com/uc?id=1f81BHRFLAE1yEddPLdRUJO3jXJ2_SQPS',
        price: '150.500 đ'
    },
    {
        title: 'Chúc Một Ngày Tốt Lành',
        author: 'Nguyễn Nhật Ánh',
        img: 'https://drive.google.com/uc?id=1qiStbESBEiBavZGEgTvcvoI7UHW9MKEy',
        price: '90.500 đ'
    },
    {
        title: 'Ngày Xưa Có Một Chuyện Tình',
        author: 'Nguyễn Nhật Ánh',
        img: 'https://drive.google.com/uc?id=1iljqkkb1hT_FPSzkZJc0y5XtwNfzNL1K',
        price: '111.500 đ'
    },
    {
        title: 'Tàn Lửa',
        author: 'Shizukui Shusuke',
        img: 'https://drive.google.com/uc?id=1SNwfEQMgarJBqvFH2ECYpEIxPGdGR1FG',
        price: '111.500 đ'
    },
    {
        title: 'Cảm Ơn Người Lớn',
        author: 'Nguyễn Nhật Ánh',
        img: 'https://drive.google.com/uc?id=1SFgK4XIgGATHp0hauLyMf_Ccbs-sDuEj',
        price: '111.500 đ'
    },
    {
        title: 'Chuyện Kể Rằng Có Nàng Và Tôi',
        author: 'Nhiều tác giả',
        img: 'https://drive.google.com/uc?id=15eeAUNLISuTCIDK_YRiSQwCWglfJbHZW',
        price: '111.500 đ'
    },
    {
        title: 'Cố Định Một Đám Mây',
        author: 'Nguyễn Ngọc Tư',
        img: 'https://drive.google.com/uc?id=1DRQUMkxDzs4ldQwJ0X746gDL9boMVW_Q',
        price: '111.500 đ'
    }
]

export default function BookCategories() {
    return (
        <div className='categories-container container-fluid'>
            <div className='categories-breadcrumb ms-5 mt-2'>
                <Breadcrumb>
                    <Breadcrumb.Item href='/'>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item href='/categories' className='text-capitalize'>
                        Văn học trong nước
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className='text-capitalize'>Tiểu thuyết</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='categories-main-container m-5 mt-3'>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <div className='categories-nav'>
                                <h6 className='categories-nav-title p-3 mb-0 fw-bold rounded'>Danh Mục</h6>
                                <Nav variant='pills' className='categories-nav-main flex-column text-capitalize'>
                                    <Nav.Item>
                                        <Nav.Link eventKey='first' className='category-nav border'>Tiểu thuyết</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='second' className='category-nav border'>Truyện ngắn - Tản văn</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='third' className='category-nav border'>Thơ</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='fourth' className='category-nav border'>Huyền bí</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='fifth' className='category-nav border'>Giả tưởng</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>

                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <h1>Tiểu thuyết</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <h1>Truyện ngắn - Tản văn</h1>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    );
}