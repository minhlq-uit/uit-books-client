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
                    <Breadcrumb.Item href='/books' className='text-capitalize'>
                        Văn học trong nước
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='categories-main-container m-5 mt-3'>
                <Tab.Container id='list-group-tabs-example' defaultActiveKey='#van-hoc-trong-nuoc'>
                    <Row>
                        <Col sm={3}>
                            <div className='categories-nav-container'>
                                <div className='categories-nav mb-5'>
                                    <h6 className='categories-nav-title p-3 mb-0 fw-bold rounded'>Danh Mục</h6>
                                    <ListGroup variant='pills' className='categories-nav-main d-flex flex-column text-capitalize'>
                                        <ListGroup.Item action href='#van-hoc-trong-nuoc' className='category-nav'>
                                            Văn học trong nước
                                        </ListGroup.Item>
                                        <ListGroup.Item action href='#van-hoc-nuoc-ngoai' className='category-nav'>
                                            Văn học nước ngoài
                                        </ListGroup.Item>
                                        <ListGroup.Item action href='#kinh-te' className='category-nav'>
                                            Sách kinh tế
                                        </ListGroup.Item>
                                        <ListGroup.Item action href='#ky-nang-song' className='category-nav'>
                                            Sách kỹ năng sống
                                        </ListGroup.Item>
                                        <ListGroup.Item action href='#tuoi-teen' className='category-nav'>
                                            Sách tuổi teen
                                        </ListGroup.Item>
                                        <ListGroup.Item action href='#thieu-nhi' className='category-nav'>
                                            Sách thiếu nhi
                                        </ListGroup.Item>
                                        <ListGroup.Item action href='#chuyen-nganh' className='category-nav'>
                                            Sách chuyên ngành
                                        </ListGroup.Item>
                                        <ListGroup.Item action href='#thuong-thuc-doi-song' className='category-nav'>
                                            Thường thức đời sống
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                                <div className='categories-author mb-5'>
                                    <h6 className='categories-author-title p-3 mb-0 fw-bold rounded'>Tác giả</h6>
                                    <div className='list-group'>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Nguyễn Nhật Ánh
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Nguyễn Ngọc Thạch
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Minh Nhật
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Phan Việt
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            An Khang
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Nguyễn Ngọc Tư
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Khác
                                        </label>
                                    </div>
                                </div>
                                <div className='categories-price mb-5'>
                                    <h6 className='categories-price-title p-3 mb-0 fw-bold rounded'>Giá sản phẩm</h6>
                                    <div className='list-group'>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            0đ - 50.000đ
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            50.000đ - 100.000đ
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            100.000đ - 150.000đ
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            150.000đ - 200.000đ
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            200.000đ - 500.000đ
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Trên 500.000đ
                                        </label>
                                    </div>
                                </div>
                                <div className='categories-publisher mb-5'>
                                    <h6 className='categories-publisher-title p-3 mb-0 fw-bold rounded'>Nhà xuất bản</h6>
                                    <div className='list-group'>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            NXB Trẻ
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Nhã Nam
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Kim Đồng
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Phương Nam
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Đông Tây
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Thái Hà
                                        </label>
                                        <label className='list-group-item'>
                                            <input className='form-check-input me-1' type='checkbox' value='' />
                                            Khác
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='categories-main'>
                                <Tab.Pane eventKey='#van-hoc-trong-nuoc' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light text-capitalize'>Văn học trong nước</h3>
                                    <div className='category-books row row-cols-3'>
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
                                <Tab.Pane eventKey='#van-hoc-nuoc-ngoai' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light text-capitalize'>Văn học nước ngoài</h3>
                                    <div className='category-books row row-cols-3'>
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
                                <Tab.Pane eventKey='#kinh-te' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light text-capitalize'>Sách kinh tế</h3>
                                    <div className='category-books row row-cols-3'>
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
                                <Tab.Pane eventKey='#ky-nang-song' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light text-capitalize'>Sách kỹ năng sống</h3>
                                    <div className='category-books row row-cols-3'>
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
                                <Tab.Pane eventKey='#tuoi-teen' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light text-capitalize'>Sách tuổi teen</h3>
                                    <div className='category-books row row-cols-3'>
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
                                <Tab.Pane eventKey='#thieu-nhi' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light text-capitalize'>Sách thiếu nhi</h3>
                                    <div className='category-books row row-cols-3'>
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
                                <Tab.Pane eventKey='#chuyen-nganh' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light text-capitalize'>Sách chuyên ngành</h3>
                                    <div className='category-books row row-cols-3'>
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
                                <Tab.Pane eventKey='#thuong-thuc-doi-song' className='border rounded'>
                                    <h3 className='categories-main-title p-2 ps-3 text-light text-capitalize'>Sách thường thức đời sống</h3>
                                    <div className='category-books row row-cols-3'>
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