import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "./basketHeader.scss";
const BasketHeader = () => {
  const {pathname} = useLocation()
  
  return (
    <div className="basket-header">
      <Container>
        <Row>
          <Col xs="12" md="7" lg="8">
            <ul className="basket-header__steps">

              <li className={`basket-header__steps__item ${pathname==="/gio-hang"? 'active': ''} progress-step_1 `}> 
                <Link to='/gio-hang' className="basket-header__steps__item__tagName">Giỏ hàng</Link>
              </li>
              <li className={`progress-step-split ${pathname==="/gio-hang"? 'active': ''} progress-step_1 ${pathname ==="/thanh-toan"? 'active_step_next':''}`}></li>
              <li className={`basket-header__steps__item ${pathname ==="/thanh-toan"? 'active':''} progress-step_2`}>
                <Link to="/thanh-toan" className="basket-header__steps__item__tagName">Thanh toán</Link>
              </li>
              <li className={`progress-step-split ${pathname ==="/thanh-toan"? 'active':''} progress-step_2 ${pathname ==='/xac-nhan'? 'active_step_next':''}`}></li>
              <li className={`basket-header__steps__item ${pathname ==='/xac-nhan'? 'active':''} progress-step_3`}>
                <Link to="/xac-nhan" className="basket-header__steps__item__tagName">Xác nhận</Link>
              </li>

              
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BasketHeader;
