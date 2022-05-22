import React, { useState } from 'react';
import './BookDetail.scss';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillStarFill, BsFillHeartFill } from 'react-icons/bs';
import { IoCheckmarkSharp, IoPersonCircleSharp } from 'react-icons/io5';
import { FaGreaterThanEqual } from 'react-icons/fa';
import Table from 'react-bootstrap/Table';
import Toast from 'react-bootstrap/Toast';
import { Button, ToastContainer } from 'react-bootstrap';
import BookItem from '../Home/Books/BookItem';
import Slider from 'react-slick';

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

export default function BookDetail() {
    function AddButton() {
        const [show, setShow] = useState(false);

        return (
            <div>
                <ToastContainer position='bottom-end' className='p-3 position-fixed'>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src='holder.js/20x20?text=%20'
                                className='rounded me-2'
                                alt=''
                            />
                            <strong className='me-auto'>Thông báo</strong>
                            {/* <small>11 mins ago</small> */}
                        </Toast.Header>
                        <Toast.Body>Sách Cô gái đến từ hôm qua đã được thêm vào giỏ hàng thành công!</Toast.Body>
                    </Toast>
                </ToastContainer>
                <button type='button' onClick={() => setShow(true)} className='book-add-btn btn border rounded text-center fs-6 text-uppercase p-3 ps-4 pe-4 fw-bold'>
                    Thêm vào giỏ hàng
                </button>
            </div>
        );
    }

    function AddFavorite() {
        const [show, setShow] = useState(false);

        return (
            <div>
                <ToastContainer position='bottom-end' className='p-3 position-fixed'>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src='holder.js/20x20?text=%20'
                                className='rounded me-2'
                                alt=''
                            />
                            <strong className='me-auto'>Thông báo</strong>
                            {/* <small>11 mins ago</small> */}
                        </Toast.Header>
                        <Toast.Body>Sách Cô gái đến từ hôm qua đã được thêm vào yêu thích thành công!</Toast.Body>
                    </Toast>
                </ToastContainer>
                <button type='button' onClick={() => setShow(true)} className='book-like-btn border border-2 rounded text-center align-middle p-1 ps-3 pe-3'>
                    <i className='book-like-icon text-danger fs-6'> <BsFillHeartFill />  </i>
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

    return (
        <div className='book-container container-fluid'>
            <div className='book-breadcrumb ms-5 mt-2'>
                <Breadcrumb>
                    <Breadcrumb.Item href='/'>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item href='/categories' className='text-capitalize'>
                        Danh mục sách
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className='text-capitalize'>Cô gái đến từ hôm qua</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='book-main-container pb-5'>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <div className='book-main-img'>
                                <img className='book-img img-thumbnail img-fluid align-middle rounded mx-auto d-block' src='/images/books/book-img-1.jpg' alt='Cô gái đến từ hôm qua' />
                            </div>
                        </Col>
                        <Col xs={12} md={8}>
                            <div className='book-main-intro ms-5'>
                                <div className='book-main-title'>
                                    <h3 className='book-title text-capitalize'>Cô gái đến từ hôm qua</h3>
                                    <div className='book-author-container d-flex'>
                                        <div className='book-author me-5 mb-2'>
                                            <span>Tác giả:</span>
                                            <span className='book-author-name ms-1 me-2'>Nguyễn Nhật Ánh</span>
                                        </div>
                                        <div className='book-publish'>
                                            <span>Phát hành:</span>
                                            <span className='book-publish-name ms-1 me-2'>NXB Trẻ</span>
                                        </div>
                                    </div>
                                    <div className='book-rating border-bottom pb-2'>
                                        <i className='book-item-rating text-warning me-1'><BsFillStarFill /></i>
                                        <i className='book-item-rating text-warning me-1'><BsFillStarFill /></i>
                                        <i className='book-item-rating text-warning me-1'><BsFillStarFill /></i>
                                        <i className='book-item-rating text-warning me-1'><BsFillStarFill /></i>
                                        <i className='book-item-rating text-warning me-1'><BsFillStarFill /></i>
                                        <p className='d-inline ms-2 align-middle'>
                                            <i>4 đánh giá</i>
                                        </p>
                                    </div>
                                </div>
                                <div className='book-main-price mt-2 d-flex align-items-center border-bottom pb-2'>
                                    <div className='book-price-container flex-grow-1'>
                                        <div className='book-price-current'>
                                            <span className='book-current fs-1'>68.000 <sup><u>đ</u></sup></span>
                                        </div>
                                        <div className='book-price-cover-container d-flex'>
                                            <div className='book-price-cover'>
                                                <span>Giá bìa:</span>
                                                <span className='book-cover ms-2'>80.000 <sup><u>đ</u></sup></span>
                                            </div>
                                            <div className='book-price-sale'>
                                                <span className='book-sale-name ms-5'>Tiết kiệm:</span>
                                                <span className='book-sale ms-2 fw-bold'>12.000 <sup><u>đ</u></sup> (-15%)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='book-add-button flex-shrink-0 d-grid gap-2 d-md-flex justify-content-md-end col-4'>
                                        <AddButton />
                                    </div>
                                </div>
                                <div className='book-main-check mt-3'>
                                    <p className='book-check'>
                                        <i className='book-check-icon text-success'><IoCheckmarkSharp /> </i>
                                        Bọc plastic miễn phí
                                    </p>
                                    <p className='book-check'>
                                        <i className='book-check-icon text-success'><IoCheckmarkSharp /> </i>
                                        Giao hàng miễn phí trong nội thành TP. HCM với đơn hàng
                                        <i className='book-compare-icon text-success fs-6'> <FaGreaterThanEqual /> </i>
                                        <span className='text-success fw-bold'>150.000đ</span>
                                    </p>
                                    <p className='book-check'>
                                        <i className='book-check-icon text-success'><IoCheckmarkSharp /> </i>
                                        Giao hàng miễn phí toàn quốc với đơn hàng
                                        <i className='book-compare-icon text-success fs-6'> <FaGreaterThanEqual /> </i>
                                        <span className='text-success fw-bold'>250.000đ</span>
                                    </p>
                                    <div className='book-like-button'>
                                        <AddFavorite />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='book-intro ms-5 me-5'>
                <h4 className='book-intro-title text-capitalize pb-2'>Giới thiệu sách</h4>
                <h5 className='book-name-title text-capitalize pt-2'>Cô gái đến từ hôm qua</h5>
                <p className='book-intro-content'>
                    Nếu ngày xưa còn bé, Thư luôn tự hào mình là cậu con trai thông minh có quyền bắt nạt và sai khiến các cô bé cùng lứa tuổi thì giờ đây khi lớn lên, anh luôn khổ sở khi thấy mình ngu ngơ và bị con gái “xỏ mũi”. Và điều nghịch lý ấy xem ra càng “trớ trêu’ hơn, khi như một định mệnh, Thư nhận ra Việt An, cô bạn học thông minh thường làm mình bối rối bấy lâu nay chính là Tiểu Li, con bé hàng xóm ngốc nghếch từng hứng chịu những trò nghịch ngợm của mình hồi xưa.
                </p>
            </div>
            <div className='book-detail ms-5 me-5 pt-3'>
                <h4 className='book-detail-title text-capitalize pb-2'>Thông tin chi tiết</h4>
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
                            <td>Nguyễn Nhật Ánh</td>
                        </tr>
                        <tr>
                            <td>Công ty phát hành</td>
                            <td>NXB Trẻ</td>
                        </tr>
                        <tr>
                            <td>Loại bìa</td>
                            <td>Bìa mềm</td>
                        </tr>
                        <tr>
                            <td>Số trang</td>
                            <td>170 trang</td>
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
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Ngày phát hành</td>
                            <td>01/06/2017</td>
                        </tr>
                        <tr>
                            <td>Danh mục</td>
                            <td>Văn học teen</td>
                        </tr>
                    </tbody>
                </Table>
                <div className='book-add-button text-center'>
                    <AddButton />
                </div>
            </div>
            <div className='book-comment ms-5 me-5'>
                <h4 className='book-comment-title text-capitalize pb-2 mt-5'>Đánh giá</h4>
                <div className='book-comment-rating'>
                    <i className='book-item-rating text-warning me-1'><BsFillStarFill /></i>
                    <i className='book-item-rating text-warning me-1'><BsFillStarFill /></i>
                    <i className='book-item-rating text-warning me-1'><BsFillStarFill /></i>
                    <i className='book-item-rating text-warning me-1'><BsFillStarFill /></i>
                    <i className='book-item-rating text-warning me-1'><BsFillStarFill /></i>
                    <p className='d-inline ms-2 align-middle'>
                        5.0 <i>(4 đánh giá)</i>
                    </p>
                </div>
                <p className='book-comment-number mt-2'>
                    2 bình luận
                </p>
                <form>
                    <div className='book-comment-write d-flex'>
                        <div className='book-comment-avatar flex-shrink-0 fs-1'>
                            <IoPersonCircleSharp />
                        </div>
                        <div className='book-comment-field flex-grow-1 ms-3 d-flex align-items-end flex-column'>
                            <textarea
                                id='book-cmt-field'
                                className='w-100 ps-2'
                                name='comment'
                                placeholder='Viết bình luận của bạn'
                                rows={3}
                            ></textarea>
                            <div className='book-comment-button mt-2 mb-4'>
                                <button type='submit' className='book-cmt-btn border rounded text-center fs-6'>
                                    Đăng
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='book-comment-others'>
                    <div className='book-comment-user d-flex border-top'>
                        <div className='book-comment-avatar flex-shrink-0 fs-1'>
                            <IoPersonCircleSharp />
                        </div>
                        <div className='book-comment-container flex-grow-1 ms-3 mt-4'>
                            <div className='book-comment-userinfo d-flex'>
                                <div className='book-comment-name w-100 fw-bold'>
                                    <p>Nguyễn Văn B</p>
                                </div>
                                <div className='book-comment-date flex-shrink-1 text-secondary fs-6'>
                                    <p>04/04/2022</p>
                                </div>
                            </div>
                            <div className='book-comment-content'>
                                <p>Bài viết rất hay!</p>
                            </div>
                        </div>
                    </div>
                    <div className='book-comment-user d-flex border-top'>
                        <div className='book-comment-avatar flex-shrink-0 fs-1'>
                            <IoPersonCircleSharp />
                        </div>
                        <div className='book-comment-container flex-grow-1 ms-3 mt-4'>
                            <div className='book-comment-userinfo d-flex'>
                                <div className='book-comment-name w-100 fw-bold'>
                                    <p>Nguyễn Văn A</p>
                                </div>
                                <div className='book-comment-date flex-shrink-1 text-secondary fs-6'>
                                    <p>03/04/2022</p>
                                </div>
                            </div>
                            <div className='book-comment-content'>
                                <p>Mình nhất định sẽ mua cuốn sách này về đọc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='book-other ms-5 me-5 pt-3'>
                <h4 className='book-other-title text-capitalize pb-2 mt-5'>Sách cùng danh mục</h4>
                <Slider className='first-books' {...settings}>
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
                </Slider>
                <div className='book-see-more text-center mt-0'>
                    <Button className='book-see-more-button' variant="primary">Xem thêm &rarr;</Button>
                </div>
            </div>
        </div >
    );
}