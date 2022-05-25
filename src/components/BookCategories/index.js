import React from 'react';
import './BookCategories.scss';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
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
            <div className='categories-breadcrumb ms-5 mt-2 mb-5'>
                <Breadcrumb>
                    <Breadcrumb.Item href='/'>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item href='/categories' className='text-capitalize'>
                        Văn học trong nước
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className='text-capitalize'>Tiểu thuyết</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='categories-main-container m-5 mt-3'>
                <Tab.Container id='list-group-tabs-example' defaultActiveKey='#first'>
                    <Row>
                        <Col sm={3}>
                            <div className='categories-nav-container'>
                                <div className='categories-nav mb-5'>
                                    <h6 className='categories-nav-title p-3 mb-0 fw-bold rounded'>Danh Mục</h6>
                                    <ListGroup variant='pills' className='categories-nav-main d-flex flex-column text-capitalize'>
                                        <ListGroup.Item action href='#first' className='category-nav'>
                                            Tiểu thuyết
                                        </ListGroup.Item>
                                        <ListGroup.Item action href='#second' className='category-nav'>
                                            Truyện ngắn - Tản văn
                                        </ListGroup.Item>
                                        <ListGroup.Item action href='#third' className='category-nav'>
                                            Thơ
                                        </ListGroup.Item>
                                        <ListGroup.Item action href='#fourth' className='category-nav'>
                                            Huyền bí - Giả tưởng
                                        </ListGroup.Item>
                                        <ListGroup.Item action href='#fifth' className='category-nav'>
                                            Phóng sự - Ký sự
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                                <div className='categories-author mb-5'>
                                    <h6 className='categories-author-title p-3 mb-0 fw-bold rounded'>Tác giả</h6>
                                    <div className='list-group'>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value=''/>
                                                Nguyễn Nhật Ánh
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value=''/>
                                                Nguyễn Ngọc Thạch
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value=''/>
                                                Minh Nhật
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value=''/>
                                                Phan Việt
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value=''/>
                                                An Khang
                                        </label>
                                    </div>
                                </div>
                                <div className='categories-price mb-5'>
                                    <h6 className='categories-price-title p-3 mb-0 fw-bold rounded'>Giá sản phẩm</h6>
                                    <div className='list-group'>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value=''/>
                                                0đ - 50.000đ
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value=''/>
                                                50.000đ - 100.000đ
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value=''/>
                                                100.000đ - 150.000đ
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value=''/>
                                                150.000đ - 200.000đ
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value=''/>
                                                200.000đ - 500.000đ
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value=''/>
                                                Trên 500.000đ
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='categories-main'>
                                <Tab.Pane eventKey='#first' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light'>Tiểu thuyết</h3>
                                    <div className='first-books row row-cols-4'>
                                        {Books.map((item, index) => {
                                            return (
                                                <BookItem
                                                    key={index}
                                                    title={item.title}
                                                    author={item.author}
                                                    img={item.img}
                                                    price={item.price}
                                                />
                                            )
                                        })}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey='#second' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light'>Truyện ngắn - Tản văn</h3>
                                    <div className='second-books row row-cols-4'>
                                        {Books.map((item, index) => {
                                            return (
                                                <BookItem
                                                    key={index}
                                                    title={item.title}
                                                    author={item.author}
                                                    img={item.img}
                                                    price={item.price}
                                                />
                                            )
                                        })}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey='#third' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light'>Thơ</h3>
                                    <div className='third-books row row-cols-4'>
                                        {Books.map((item, index) => {
                                            return (
                                                <BookItem
                                                    key={index}
                                                    title={item.title}
                                                    author={item.author}
                                                    img={item.img}
                                                    price={item.price}
                                                />
                                            )
                                        })}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey='#fourth' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light'>Huyền bí - Giả tưởng</h3>
                                    <div className='fourth-books row row-cols-4'>
                                        {Books.map((item, index) => {
                                            return (
                                                <BookItem
                                                    key={index}
                                                    title={item.title}
                                                    author={item.author}
                                                    img={item.img}
                                                    price={item.price}
                                                />
                                            )
                                        })}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey='#fifth' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light'>Phóng sự - Ký sự</h3>
                                    <div className='fifth-books row row-cols-4'>
                                        {Books.map((item, index) => {
                                            return (
                                                <BookItem
                                                    key={index}
                                                    title={item.title}
                                                    author={item.author}
                                                    img={item.img}
                                                    price={item.price}
                                                />
                                            )
                                        })}
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    );
}