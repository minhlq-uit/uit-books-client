import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import BookItem from '../Books/BookItem';
import { Button, Container } from 'react-bootstrap';
import './RecentReview.css';

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
export default function RecentReview() {
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
        <Container className="recent-review-container">
            <div className='recent-review-title'>
                <h3>Review gần đây</h3>
                <img src="https://drive.google.com/uc?id=1yl28QQopUuRlpVpAu6lmyNMufidhNlZH" />
            </div>
            <Slider className='recent-review-books' {...settings}>
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
            <div className='text-center mt-0'>
                <Button className='see-more' variant="primary">Xem thêm &rarr;</Button>
            </div>
        </Container>
    )
}