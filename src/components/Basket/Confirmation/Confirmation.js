import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import "./confirmation.scss";

const Confirmation = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="12" md="5" lg="6">
            <div className="confirm__notify">
              <img src="/images/basket/success.png" alt="icon" />
              <div className="confirm__notify__title">
                Ye, chúc mừng bạn đã đặt hàng thành công !!
              </div>
              <div className="confirm__notify__notice">
                Vui long kiểm tra lại thông tin đơn hàng của bạn
              </div>
            </div>
          </Col>

          <Col xs="12" md="7" lg="6">
            <div className="confirm__information">
              <div className="confirm__information__block">
              <i className="fa-solid fa-shield-heart"></i>
                    <div className="confirm__information__block__content">
                        <div className="confirm__information__block__content__title">
                            Những điều cần lưu ý khi nhận hàng
                        </div>
                        <div className="confirm__information__block__content__description">
                            Nếu có vấn đề khi nhận hàng vui lòng gửi yêu cầu trả
                            hàng/hoàn tiền trong vòng 7 ngày kể từ khi đơn hàng giao
                            thành công
                        </div>
                    </div>
              </div>
              <div className="confirm__information__block">
              <i className="fa-solid fa-shield-heart"></i>
                <div className="confirm__information__block__content">
                  <div className="confirm__information__block__content__title">
                    Thông tin sản phẩm
                  </div>
                  <div className="info-order__product">
                    <img src="/images/basket/co-gai-den-tu-hom-qua.jfif" alt="" />
                    <div className="info-order__product__information">
                      <div className="info-order__product__information__name">
                        Cô gái đến từ hôm qua
                      </div>
                      <div className="info-order__product__information__author">
                        Nguyễn Nhật Ánh
                      </div>
                      <div className="info-order__product__information__quantity">
                        x 1
                      </div>
                    </div>
                    <div className="info-order__product__money">
                      Thành tiền:
                      <span className="info-order__product__money__value">
                        60.000 đ
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="confirm__information__block__content__methodPayment">
                    Phương thức thanh toán: thanh toán khi nhận hàng
                  </div>
                  <hr />
                </div>
              </div>
              
              <div className="confirm__information__block">
              <i className="fa-solid fa-location-dot"></i>
                    <div className="confirm__information__block__content">
                        <div className="confirm__information__block__content__title">
                            Địa chỉ gia hàng
                        </div>
                        <div className="confirm__information__block__content__description">
                            <div className="name">
                                Bùi Thị Diễn Châu
                            </div>
                            <div className="phone">
                              +84 123 456 789
                            </div>
                            <div className="address">
                                Phường 6, Linh Trung, Thủ Đức
                            </div>
                        </div>
                    </div>
              </div>
              <div className="confirm__information__block">
              <i className="fa-solid fa-shield-heart"></i>
                    <div className="confirm__information__block__content">
                        <div className="confirm__information__block__content__title">
                            Địa chỉ gia hàng
                        </div>
                        <div className="confirm__information__block__content__description">
                            <div className="description__row">
                                <div className="description__row__name">
                                    Mã đơn hàng:
                                </div>
                                <div className="description__row__value">
                                    2333000wwwqqsee
                                </div>
                            </div>
                            <div className="description__row">
                                <div className="description__row__name">
                                    Thời gian đặt hàng: 
                                </div>
                                <div className="description__row__value">
                                    3/17/2021
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Confirmation.propTypes = {};

export default Confirmation;
