import "./OrderOrdered.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../../../redux/features/order/myOrdersSlice";
import { numberWithCommas } from "../../../../more/FormatNumber";

function OrderOrdered() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  const { orders } = useSelector((state) => state.myOrders);

  const data = orders.filter((order) => order.orderStatus === "Shipped");
  return (
    <div className="order-infor">
      {data.length === 0 ? (
        <p>no order</p>
      ) : (
        <>
          {data.map((order, index) => (
            <div className="row">
              <div className="my-order-content-booked">
                {order.orderItems.map((item, i) => (
                  <div className="book-infor row">
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

                    <div className="book-infor-total col">
                      <button type="button" className="btn btn-danger">
                        Mua lại
                      </button>
                    </div>
                  </div>
                ))}
                <div className="book-infor-total-price">
                  Thành tiền: <span>{order.itemsPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default OrderOrdered;
