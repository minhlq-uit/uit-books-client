import React from 'react';
import './footer.scss';
import { Container, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
// import Logo from '/images/aboutus/uitbook-logo.png';
// import UITBooks from '/images/aboutus/UITBooks.com.png';
// import LogoUIT from '/images/aboutus/logo-uit.png';
// import Facebook from '/images/aboutus/facebook.png';
// import Instagram from '/images/aboutus/instagram.png';
// import Youtube from '/images/aboutus/youtube.png';
// import Tumblr from '/images/aboutus/tumblr.png';
// import IOS from '/images/aboutus/get-on-appstores.png';
// import Google from '/images/aboutus/get-on-chplay.png';
// import Zalopay from '/images/aboutus/zalopay.png';
// import Momo from '/images/aboutus/momo.png';
// import Shopee from '/images/aboutus/shopee.png';
// import VNpay from '/images/aboutus/vnpay.png';

export default function Footer(props) {
    return (
        <footer>
            <section className='footer-subcription'>
                <div className='footer-subcription-heading'>
                    <MailOutlineIcon className='email-icon' />
                    Đăng ký nhận bản tin
                </div>
                <div className='input-areas'>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Nhập email của bạn" />
                        </Form.Group>
                        <Button variant="outline-primary">Đăng ký</Button>
                    </Form>

                </div>
            </section>
            <Container className='footer-container' fluid="md">
                <div className='footer-links'>
                    {/* Logo and Social Networks */}
                    <div className='footer-icons-wrapper'>
                        <div className='footer-icons-items'>
                            <img src='/images/footer/uitbook-logo.png' alt='UITBooks-logo' className="uitbooks-logo-large" />
                            <img src='/images/footer/UITBooks.com.png' alt='UIT' className='uitbooks' />
                            <div className="footer-info">
                                Chúng tôi đảm bảo giao hàng trong vòng 24h, cam kết đổi trả hàng nếu có sai sót. <br />
                                <a href='/'>UITBooks.com</a> nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả hệ thống UITBooks trên toàn quốc.
                            </div>
                            <div className="social-icons">
                                <a href='https://www.facebook.com/' title='Facebook'>
                                    <img src='/images/footer/facebook.png' />
                                </a>
                                <a href='https://www.instagram.com/' title='Instagram'>
                                    <img src='/images/footer/instagram.png' />
                                </a>
                                <a href='https://youtube.com/' title='Youtube' >
                                    <img src='/images/footer/youtube.png' />
                                </a>
                                <a href='https://tumblr.com/' title='Tumblr' >
                                    <img src='/images/footer/tumblr.png' />
                                </a>
                            </div>
                            <div className="download">
                                <a href='' title='IOS'>
                                    <img src='/images/footer/get-on-appstores.png' />
                                </a>
                                <a href='' title='Google'>
                                    <img src='/images/footer/get-on-chplay.png' />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Links and Credit */}
                    <div className="footer-link-list">
                        <div className='footer-link-wrapper'>
                            <div className='footer-link-items'>
                                <h2>Liên Kết</h2>
                                <a href='/' > Trang chủ </a>
                                <a href='/categories' > Danh mục sách </a>
                                <a href='/blogs' > Chia sẻ </a>
                                <a href='/about-us' > Giới thiệu </a>
                                {/* <Link to='/'>Trang chủ</Link>
                        <Link to='/'>Danh mục sách</Link>
                        <Link to='/'>Chia sẻ</Link>
                        <Link to='/'>Giới thiệu</Link> */}
                            </div>
                            <div className='footer-link-items'>
                                <h2>Chính sách</h2>
                                <a href='/delivery-policies' > Chính sách giao hàng </a>
                                <a href='/return-policies' > Chính sách đổi trả </a>
                                <a href='/help' > Câu hỏi thường gặp </a>
                                <a href='/terms-of-use' > Hỗ trợ </a>
                                {/* <Link to='/'>Chính sách</Link>
                        <Link to='/'>Câu hỏi thường gặp</Link>
                        <Link to='/'>Hỗ trợ</Link>
                        <Link to='/'>Tài trợ</Link> */}
                            </div>
                            <div className='footer-link-items'>
                                <h2>Nhóm 6</h2>
                                <a href='' > Kỹ thuật phát triển hệ thống Web </a>
                                <a href='' > Trường Đại học Công Nghệ Thông Tin </a>
                                {/* <Link to='/'>Kỹ thuật phát triển hệ thống Web</Link>
                        <Link to='/'>Trường Đại học Công Nghệ Thông Tin</Link> */}
                                <img src='/images/aboutus/logo-uit.png' alt='UIT-logo' />
                            </div>
                        </div>
                        <div className='footer-link-items'>
                            <h2 className="contact-us">Liên hệ với chúng tôi</h2>
                            <div className='contact'>
                                <div>
                                    <LocationOnOutlinedIcon />
                                    <p> Khu phố 6, phường Linh Trung, Thủ Đức </p>
                                </div>
                                <div>
                                    <MailOutlineIcon />
                                    <p> UITBooks@gmail.com </p>
                                </div>
                                <div>
                                    <PhoneInTalkOutlinedIcon />
                                    <p> 0123.456.789 </p>
                                </div>
                            </div>
                        </div>
                        <div className="payment">
                            <img src='/images/aboutus/zalopay.png' alt="" />
                            <img src='/images/aboutus/momo.png' alt="" />
                            <img src='/images/aboutus/shopee.png' alt="" />
                            <img src='/images/aboutus/vnpay.png' alt="" />
                        </div>
                    </div>
                </div>
            </Container>
            {/* Copyrights */}
            <section className='social-media'>
                <small className='website-rights'>© Bản quyền thuộc về UITBooks - 2022</small>
            </section>
        </footer >
    );
}
