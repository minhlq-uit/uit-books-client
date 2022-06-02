import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import "./confirmation.scss";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../../more/FormatNumber";
import { useState } from "react";

const Confirmation = (props) => {
  const { user } = useSelector((state) => state.user);

  const [method, setMethod] = useState("COD");

  const { cartItems, shippingInfo } = useSelector((state) => state.cart);

  function getFullAddress(houseAddress, ward, district, city) {
    return houseAddress + ", " + ward + ", " + district + ", " + city;
  }
  let Price = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  console.log(user);
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
                  {cartItems.map((item, index) => {
                    return (
                      <div className="info-order__product">
                        <img src={item.image} alt="" />
                        <div className="info-order__product__information">
                          <div className="info-order__product__information__name">
                            {item.name}
                          </div>
                          <div className="info-order__product__information__author">
                            {item.autho}
                          </div>
                          <div className="info-order__product__information__quantity">
                            x {item.quantity}
                          </div>
                        </div>
                        <div className="info-order__product__money">
                          Thành tiền:
                          <span className="info-order__product__money__value">
                            {numberWithCommas(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    );
                  })}

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
                      {user.name ? user.name : "Defaut User"}
                    </div>
                    <div className="phone">{shippingInfo.phone}</div>
                    <div className="address">
                      {" "}
                      {getFullAddress(
                        shippingInfo.address,
                        shippingInfo.ward,
                        shippingInfo.district,
                        shippingInfo.city
                      )}
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
                      <div className="description__row__name">Mã đơn hàng:</div>
                      <div className="description__row__value">
                        2333000wwwqqsee
                      </div>
                    </div>
                    <div className="description__row">
                      <div className="description__row__name">
                        Thời gian đặt hàng:
                      </div>
                      <div className="description__row__value">3/17/2021</div>
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
