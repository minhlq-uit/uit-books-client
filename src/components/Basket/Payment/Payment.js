import React from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'react-bootstrap'

// import '../components/payment.scss';

import "./payment.scss"
const Payment = props => {
  return (
    <div>
        <Container>
            <Row>
                <Col xs="12" md="7" lg="8">
                    <div className="methodPayment">
                        <div className="methodPayment__title">
                            Phương thức Thanh toán
                        </div>
                        <div className="methodPayment__description">
                            Vui lòng chọn phương thức thanh toán
                        </div>
                        <hr />
                        <div className="methodPayment__options">
                            <div className="methodPayment__option__row">
                                <input type="radio" />
                                <div className="methodPayment__option__row__name">
                                    Thanh toán khi nhận hàng
                                </div>
                            </div>
                            <hr />
                            <div className="methodPayment__option__row">
                                <input type="radio" />
                                <div className="methodPayment__option__row__name">
                                    Thanh toán qua MoMo
                                </div>
                                <div className="methodPayment__option__row__img">
                                    <img src="images/basket/momopay.png" alt="" />
                                </div>
                            </div>
                            <hr />
                            <div className="methodPayment__option__row">
                                <input type="radio" />
                                <div className="methodPayment__option__row__name">
                                    Thanh toán qua thẻ ngân hàng
                                </div>
                                <div className="methodPayment__option__row__img">
                                    <img src="images/basket/Agribank.png" alt="" />
                                    <img src="images/basket/Vietcombank.png" alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="methodPayment__button">
                            <button className="methodPayment__button__btn">Đặt hàng</button>
                        </div>
                    </div>
                </Col>
                <Col xs="12" md="5" lg="4">
                    <div className="info-order">
                        <hr />
                        <div className="info-order__title">
                            <i className="fa-solid fa-gift"></i>
                            <div className="info-order__title__name">Đơn hàng</div>
                        </div>
                        <hr />
                        <div className="info-order__product">
                            <img src="/images/basket/co-gai-den-tu-hom-qua.jfif" alt="" />
                            <div className="info-order__product__information">
                                <div className="info-order__product__information__name">
                                    Cô gái đến từ hôm qua
                                </div>
                                <div className="info-order__product__information__author">Nguyễn Nhật Ánh</div>
                                <div className="info-order__product__information__quantity">x 1</div>
                            </div>
                        </div>
                        {/* <div className="info-order__product">
                            <img src={Bookimg} alt="" />
                            <div className="info-order__product__information">
                                <div className="info-order__product__information__name">
                                    Cô gái đến từ hôm qua
                                </div>
                                <div className="info-order__product__information__author">Nguyễn Nhật Ánh</div>
                                <div className="info-order__product__information__quantity">x 1</div>
                            </div>
                        </div> */}
                        <hr />
                        <div className="info-order__money">
                            <div className="info-order__money__row">
                                <div className="info-order__money__row__name">Tạm tính:</div>
                                <div className="info-order__money__row__value">60.000 đ</div>
                            </div>
                            <div className="info-order__money__row">
                                <div className="info-order__money__row__name">Phí vận chuyển:</div>
                                <div className="info-order__money__row__value">0 đ</div>
                            </div>
                        </div>
                        <hr />
                        <div className="info-order__bill">
                            <div className="info-order__bill__name">Tổng tiền:</div>
                            <div className="info-order__bill__value">60.000 đ</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

Payment.propTypes = {}

export default Payment