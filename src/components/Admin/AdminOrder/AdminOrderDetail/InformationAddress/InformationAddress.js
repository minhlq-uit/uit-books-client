import React from "react";
import PropTypes from "prop-types";
import "./InformationAddress.scss"

const InformationAddress = (props) => {
  return (
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
            {props.address}
          </div>
        </div>
        <div className="order-information__address__row">
          <div className="order-information__address__row__icon">
            <i className="fa-solid fa-phone-volume"></i>
          </div>
          <div className="order-information__address__row__name">
            {props.numberPhone}
          </div>
        </div>
        <div className="order-information__address__row">
          <div className="order-information__address__row__icon">
          <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="order-information__address__row__name">
            {props.gmail}
          </div>
        </div>
        <div className="order-information__address__row">
          <div className="order-information__address__row__icon">
            <i className="fa-solid fa-file-pen"></i>
          </div>
          <div className="order-information__address__row__name">
            <div href="#" onClick={props.showEdit} className="edit">Chỉnh sửa</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

InformationAddress.propTypes = {
    address: PropTypes.string,
    numberPhone: PropTypes.string,
    gmail: PropTypes.string,
    showEdit: PropTypes.func
};

export default InformationAddress;
