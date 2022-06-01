import React, { useState } from "react";
import { Col, Container, Form, Row, Button, Modal } from "react-bootstrap";
import "./itemBasket.scss";
import { BiEnvelope } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";

import { toast } from "react-toastify";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../../redux/features/cart/cartSlice";
import useLocationForm from "../../../more/Location";
import Select from "react-select";
import { saveShippingInfo } from "../../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../../more/FormatNumber";

const ItemBasket = (props) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (newQty > stock) {
      toast.error("Product Stock Limited");
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  let Price =
    cartItems.length !== 0
      ? cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
      : 0;
  let Quantity =
    cartItems.length !== 0
      ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
      : 0;

  let shippingCharges = Price > 80000 ? 0 : 50000;

  let totalPrice = Price + shippingCharges;
  let totalQuantity = Quantity;

  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const { state, onCitySelect, onDistrictSelect, onWardSelect } =
    useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  const { shippingInfo } = useSelector((state) => state.cart);

  function getFullAddress(houseAddress, ward, district, city) {
    if (!houseAddress || !ward || !district || !city) {
      return "";
    }
    return houseAddress + ", " + ward + ", " + district + ", " + city;
  }
  const [fullAddress, setFullAddress] = useState(
    getFullAddress(
      shippingInfo.address,
      shippingInfo.ward,
      shippingInfo.district,
      shippingInfo.city
    )
  );
  const [phone, setPhone] = useState(shippingInfo.phone);
  const [email, setEmail] = useState(shippingInfo.email);
  const [address, setAddress] = useState("");

  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleSubmitForm = () => {
    setFullAddress(
      getFullAddress(
        address,
        state.selectedWard.label,
        state.selectedDistrict.label,
        state.selectedCity.label
      )
    );
    setPhone(newPhone);
    setEmail(newEmail);
    handleClose();
    dispatch(
      saveShippingInfo({
        address: address,
        ward: state.selectedWard.label,
        district: selectedDistrict.label,
        city: state.selectedCity.label,
        phone: newPhone,
        email: newEmail,
      })
    );
    console.log(shippingInfo);
  };
  return (
    <div className="ib__container">
      <Container>
        {cartItems.length === 0 ? (
          <p>no item</p>
        ) : (
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
                  {cartItems.map((item, index) => {
                    return (
                      <div className="basket-list__item" key={index}>
                        <div className="basket-list__item__image">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="basket-list__item__information">
                          <h6 className="basket-list__item__information__title">
                            {item.name}
                            {/* Cô gái đến từ hôm qua */}
                          </h6>
                          <div className="basket-list__item__information__author">
                            {item.author}
                          </div>
                          <div className="basket-list__item__information__price">
                            {numberWithCommas(item.price)}{" "}
                            <span className="currency">đ</span>
                          </div>
                          <div className="basket-list__item__information__icon">
                            <i
                              className="bx bxs-trash "
                              onClick={() => deleteCartItems(item.book)}
                            ></i>
                          </div>
                        </div>
                        <div className="basket-list__item__quantity">
                          <div className="basket-list__item__quantity__btn">
                            <i
                              className="bx bx-minus"
                              onClick={() =>
                                decreaseQuantity(item.book, item.quantity)
                              }
                            ></i>
                          </div>
                          <div className="basket-list__item__quantity__input">
                            {item.quantity}
                          </div>
                          <div className="basket-list__item__quantity__btn">
                            <i
                              className="bx bx-plus"
                              onClick={() => {
                                increaseQuantity(
                                  item.book,
                                  item.quantity,
                                  item.stock
                                );
                              }}
                            ></i>
                          </div>
                        </div>
                        <div className="basket-list__item__price">
                          {numberWithCommas(item.price * item.quantity)}{" "}
                          <span>đ</span>
                        </div>
                      </div>
                    );
                  })}
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
                      {fullAddress}
                    </div>
                  </div>
                  <div className="order-information__address__row">
                    <div className="order-information__address__row__icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <div className="order-information__address__row__name">
                      {phone}
                    </div>
                  </div>
                  <div className="order-information__address__row">
                    <div className="order-information__address__row__icon">
                      <BiEnvelope />
                    </div>
                    <div className="order-information__address__row__name">
                      {email}
                    </div>
                  </div>
                  <div className="order-information__address__row">
                    <div className="order-information__address__row__icon">
                      <i className="fa-solid fa-file-pen"></i>
                    </div>
                    <div className="order-information__address__row__name">
                      <Button onClick={handleShow}>Chỉnh sửa</Button>
                    </div>
                  </div>
                </div>
                <div className="myOrder">
                  <div className="myOrder__title">Đơn hàng của bạn</div>
                  <div className="myOrder__information">
                    <div className="myOrder__information__quantity">
                      Số lượng: {totalQuantity} quyển
                    </div>
                    <div className="myOrder__information__row">
                      <div className="myOrder__information__row__name">
                        Tổng tiền:{" "}
                      </div>
                      <div className="myOrder__information__row__value">
                        {numberWithCommas(Price)} đ
                      </div>
                    </div>
                    <div className="myOrder__information__row">
                      <div className="myOrder__information__row__name">
                        Phí Ship:{" "}
                      </div>
                      <div className="myOrder__information__row__value">
                        {numberWithCommas(shippingCharges)} đ
                      </div>
                    </div>
                  </div>
                  <hr className="myOrder__line" />
                  <div className="myOrder__bill">
                    <div className="myOrder__bill__name">Thành tiền:</div>
                    <div className="myOrder__bill__value">
                      {numberWithCommas(totalPrice)} đ
                    </div>
                  </div>
                  <div className="myOrder__button">
                    <Link to="/payment" style={{ textDecoration: "none" }}>
                      <button className="myOrder__btn" href="/payment">
                        Đặt hàng
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa địa chỉ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tỉnh/Thành phố</Form.Label>
              <Select
                name="cityId"
                key={`cityId_${selectedCity?.value}`}
                isDisabled={cityOptions.length === 0}
                options={cityOptions}
                onChange={(option) => onCitySelect(option)}
                placeholder="Tỉnh/Thành"
                defaultValue={selectedCity}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quận/Huyện</Form.Label>
              <Select
                name="districtId"
                key={`districtId_${selectedDistrict?.value}`}
                isDisabled={districtOptions.length === 0}
                options={districtOptions}
                onChange={(option) => onDistrictSelect(option)}
                placeholder="Quận/Huyện"
                defaultValue={selectedDistrict}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phường/Xã</Form.Label>
              <Select
                name="wardId"
                key={`wardId_${selectedWard?.value}`}
                isDisabled={wardOptions.length === 0}
                options={wardOptions}
                placeholder="Phường/Xã"
                onChange={(option) => onWardSelect(option)}
                defaultValue={selectedWard}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Địa chỉ nhà</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="number"
                maxLength="11"
                autoFocus
                onChange={(e) => setNewPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gmail</Form.Label>
              <Form.Control
                type="email"
                autoFocus
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => handleSubmitForm()}>
            Gửi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ItemBasket.propTypes = {};

export default ItemBasket;
