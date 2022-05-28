import React, { useRef, useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import "./AdminOrderDetail.scss"
import { Col, Container, Form, Row, Button, FormGroup } from "react-bootstrap";
import PropTypes from 'prop-types'
import InformationAddress from './InformationAddress/InformationAddress';
import InformationProduct from './InformationProduct/InformationProduct';
import InformationBill from './InformationBill/InformationBill';
const optionState = [
  "Đang xử lý",
  "Đang giao",
  "Đã giao",
  "Đã hủy"
]

const AdminOrderDetail = props => {


  const overplay = useRef()
  const showEdit = () => {
    overplay.current.classList.remove("close")
  }
  const closeEdit = () => {
    overplay.current.classList.add("close")

  }
  return (
    <div className="AdminOrderDetailContainer">
      <Container>
        <h4 className="title">Chi tiết đơn hàng {props.orderCode}</h4>

        <Row>
          <Col xs="12" md="6" lg="6">
            <FormGroup>
              <div className="orderRow">
                <label className="orderRow__label order__date__label">Ngày tạo: </label>
                <div className="orderRow__value order__date__value">
                  {props.orderDate}
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="orderRow">
                <label className="orderRow__label ">Tình trạng:</label>
                <div className="order__state ">
                  <select>
                    {
                      optionState.map((value, index) => {
                        return (
                          <option key={index} >{value}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="orderRow">
                <label className="orderRow__label ">Thanh toán:</label>
                <div className="orderRow__value ">
                  {props.payMethod}
                </div>
              </div>
            </FormGroup>
          </Col>
          <Col xs="12" md="6" lg="6">
            <InformationAddress
              address='Khu phố 6, Linh Trung, Thủ Đức'
              numberPhone='012345689'
              gmail='dienchau@gmail.com'
              showEdit={showEdit}
            />
          </Col>
        </Row>
        <div className="product">
          <InformationProduct
            image='https://cdn0.fahasa.com/media/catalog/product/c/o/co_gai_den_tu_hom_qua_1_2018_11_16_11_03_46.JPG'
            nameBook='Cô gái đến từ hôm qua'
            price={80000}
            author="Nguyễn Nhật Ánh"
          />
          <InformationProduct
            image='https://cdn0.fahasa.com/media/catalog/product/c/o/co_gai_den_tu_hom_qua_1_2018_11_16_11_03_46.JPG'
            nameBook='Cô gái đến từ hôm qua'
            price={80000}
            author="Nguyễn Nhật Ánh"
          />
        </div>
        <InformationBill
          quantity={2}
          totalMoney={120000}
          discount={60000}
        />

      </Container>

    </div>
  )
}

AdminOrderDetail.propTypes = {
  orderCode: PropTypes.string,
  orderDate: PropTypes.string,
  payMethod: PropTypes.string
}

export default AdminOrderDetail