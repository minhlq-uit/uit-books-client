import "./OrderShipping.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../../../redux/features/order/myOrdersSlice";
import { numberWithCommas } from "../../../../more/FormatNumber";

function OrderShipping() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  const { orders } = useSelector((state) => state.myOrders);
  const data = orders.filter((order) => order.orderStatus === "Shipping");

  return (
    <div className="order-infor">
      {data.length === 0 ? (
        <p>no order</p>
      ) : (
        <>
          {data.map((order, index) => (
            <div className="row" key={index}>
              <div className="my-order-content-booked">
                {order.orderItems.map((item, i) => (
                  <div className="book-infor row" key={i}>
                    <img
                      className="col-3 book-infor-img"
                      src={item.image}
                      alt=""
                    />
                    <div className="book-infor-detail col">
                      <h6>{item.name}</h6>
                      <p className="book-infor-detail-author">{item.author}</p>
                      <p className="book-infor-detail-price">
                        <span className="book-infor-detail-price-old">
                          80.000đ
                        </span>{" "}
                        <span className="book-infor-detail-price-new">
                          {numberWithCommas(item.price)} đ
                        </span>
                      </p>
                      <p className="book-infor-detail-quantity">
                        Số lượng: {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="row book-delivery-bill">
                  <div className="book-total-bill col">
                    <div>
                      <span className="book-total-bill-title">Phí Ship:</span>
                      <span className="book-total-bill-price">
                        {numberWithCommas(order.shippingPrice)} đ
                      </span>
                    </div>
                    <div>
                      <span className="book-total-bill-title">Thành tiền:</span>
                      <span className="book-total-bill-price">
                        {numberWithCommas(order.totalPrice)} đ
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="book-delivery-confirm btn btn-primary col disabled"
                  >
                    Đã nhận được hàng
                  </button>
                </div>

                <p className="book-date-delivery">
                  Nhận sản phẩm và thanh toán trước 30-04-2022
                </p>
              </div>

              {/* <div className="col-3 todo-timeline mb-5">
            <div className="">
              <h4 className="todo-title">
                Mã đơn hàng: <span>HN0101111</span>
              </h4>
            </div>
            <div className="row">
              <ul className="v-timeline">
                <li className="col">
                  <i className="v-timeline-icon v-not"></i>
                  <div className="timeline-text">
                    <div className="timeline-valutation">
                      <span className="pl-30 top-bold-label">
                        3 Th03 <br /> 06:36
                      </span>
                    </div>
                    <div className="timeline-number">
                      <span className="pl-30 bottom-link">
                        Người gửi đang chuẩn bị hàng
                      </span>
                    </div>
                  </div>
                </li>
  
                <li className="col">
                  <i className="v-timeline-icon v-not"></i>
                  <div className="timeline-text">
                    <div className="timeline-valutation">
                      <span className="pl-30 top-bold-label">
                        4 Th03 <br /> 13:36
                      </span>
                    </div>
                    <div className="timeline-number">
                      <span className="pl-30 bottom-link">
                        Lấy hàng thành công
                      </span>
                    </div>
                  </div>
                </li>
  
                <li className="col">
                  <span className="v-timeline-icon v-not v-line-color"></span>
                  <div className="timeline-text">
                    <div className="timeline-valutation">
                      <span className="pl-30 top-bold-label">
                        4 Th03 <br /> 23:43
                      </span>
                    </div>
                    <div className="timeline-number">
                      <span className="pl-30 bottom-link">
                        Đơn hàng đã đến kho HN
                      </span>
                    </div>
                  </div>
                </li>
  
                <li className="col">
                  <span className="v-timeline-icon v-last"></span>
                  <span className="pl-30 top-bold-label">Complete!</span>
                </li>
              </ul>
            </div>
          </div> */}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default OrderShipping;
