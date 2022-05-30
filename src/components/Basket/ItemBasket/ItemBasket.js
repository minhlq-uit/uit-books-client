import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Col, Row,  Modal } from "react-bootstrap";
import { Col, Container, Form, Row, Button, Modal } from "react-bootstrap";
import './itemBasket.scss'
// import { Container } from "react-bootstrap";
import { BiEnvelope } from "react-icons/bi";
const ItemBasket = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    e.preventDefault()
    setShow(true)
  };
  const handleClose = () => setShow(false);
  return (
    <div className="ib__container">
      <Container>
        <Row>
          <Col xs="12" md="7" lg="8">
            <div>
              <div className="free-delivery">
                {/* <FontAwesomeIcon icon="fa-solid fa-car-side" /> */}
                <i className="fa-solid fa-car-side"></i>
                <span>
                  Đơn hàng của bạn đủ điều kiện được miễn phí vận chuyển
                </span>
              </div>
              <div className="basket-list">
                <div className="basket-list__item">
                  <div className="basket-list__item__image">
                    <img
                      src="https://cdn0.fahasa.com/media/catalog/product/c/o/co_gai_den_tu_hom_qua_1_2018_11_16_11_03_46.JPG"
                      alt=""
                    />
                  </div>
                  <div className="basket-list__item__information">
                    <h6 className="basket-list__item__information__title">
                      Cô gái đến từ hôm qua
                    </h6>
                    <div className="basket-list__item__information__author">
                      Nguyễn Nhật Ánh
                    </div>
                    <div className="basket-list__item__information__price">
                      80. 000 <span className="currency">đ</span>
                    </div>
                    <div className="basket-list__item__information__icon">
                      <i className="bx bxs-trash "></i>
                    </div>
                  </div>
                  <div className="basket-list__item__quantity">
                    <div className="basket-list__item__quantity__btn">
                      <i className="bx bx-minus"></i>
                    </div>
                    <div className="basket-list__item__quantity__input">1</div>
                    <div className="basket-list__item__quantity__btn">
                      <i className="bx bx-plus"></i>
                    </div>
                  </div>
                  <div className="basket-list__item__price">
                    80.000
                    <span>đ</span>
                  </div>
                </div>
                <div className="basket-list__item">
                  <div className="basket-list__item__image">
                    <img
                      src="https://cdn0.fahasa.com/media/catalog/product/c/o/co_gai_den_tu_hom_qua_1_2018_11_16_11_03_46.JPG"
                      alt=""
                    />
                  </div>
                  <div className="basket-list__item__information">
                    <h4 className="basket-list__item__information__title">
                      Cô gái đến từ hôm qua
                    </h4>
                    <div className="basket-list__item__information__author">
                      Nguyễn Nhật Ánh
                    </div>
                    <div className="basket-list__item__information__price">
                      80. 000 <span className="currency">đ</span>
                    </div>
                    <div className="basket-list__item__information__icon">
                      <i className="bx bxs-trash "></i>
                    </div>
                  </div>
                  <div className="basket-list__item__quantity">
                    <div className="basket-list__item__quantity__btn">
                      <i className="bx bx-minus"></i>
                    </div>
                    <div className="basket-list__item__quantity__input">1</div>
                    <div className="basket-list__item__quantity__btn">
                      <i className="bx bx-plus"></i>
                    </div>
                  </div>
                  <div className="basket-list__item__price">
                    80.000
                    <span>đ</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs="12" md="5" lg="4">
            <div className="order-information">
              <div className="order-information__address">
                <div className="order-information__address__title">
                  Thông tin giao hàng
                </div>
                <div className="order-information__address__row">
                  <div className="order-information__address__row__icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="order-information__address__row__name">
                    Khu phố 6, Linh Trung, Thủ Đức
                  </div>
                </div>
                <div className="order-information__address__row">
                  <div className="order-information__address__row__icon">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="order-information__address__row__name">
                    0123 456 789
                  </div>
                </div>
                <div className="order-information__address__row">
                  <div className="order-information__address__row__icon">
                    <BiEnvelope />
                  </div>
                  <div className="order-information__address__row__name">
                    example@gmail.com
                  </div>
                </div>
                <div className="order-information__address__row">
                  <div className="order-information__address__row__icon">
                    <i className="fa-solid fa-file-pen"></i>
                  </div>
                  <div className="order-information__address__row__name">
                    <a href="#" onClick={handleShow}>Chỉnh sửa</a>
                  </div>
                </div>
              </div>
              <div className="myOrder">
                <div className="myOrder__title">Đơn hàng của bạn</div>
                <div className="myOrder__information">
                  <div className="myOrder__information__quantity">
                    Số lượng: 2 quyển
                  </div>
                  <div className="myOrder__information__row">
                    <div className="myOrder__information__row__name">
                      Tổng tiền:{" "}
                    </div>
                    <div className="myOrder__information__row__value">
                      180.000 đ
                    </div>
                  </div>
                  <div className="myOrder__information__row">
                    <div className="myOrder__information__row__name">
                      Giảm giá:{" "}
                    </div>
                    <div className="myOrder__information__row__value">
                      60.000 đ
                    </div>
                  </div>
                </div>
                <hr className="myOrder__line" />
                <div className="myOrder__bill">
                  <div className="myOrder__bill__name">Thành tiền:</div>
                  <div className="myOrder__bill__value">120. 000 đ</div>
                </div>
                <div className="myOrder__button">
                  <button className="myOrder__btn">Đặt hàng</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa địa chỉ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"

            >
              <Form.Label>Địa chỉ nhà</Form.Label>
              <Form.Control
                type="text"
                placeholder="Số nhà, số đường, quận, thành phố"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"

            >
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="text"
                placeholder="012345678"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"

            >
              <Form.Label>Gmail</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@gmail.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" >
            Gửi
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  );
};

ItemBasket.propTypes = {};

export default ItemBasket;
