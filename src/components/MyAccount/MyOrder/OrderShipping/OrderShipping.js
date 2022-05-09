import "./OrderShipping.scss";
function OrderShipping() {
  return (
    <div className="order-infor">
      <div className="row">
        <div className="col-4 my-order-content-booked">
          <div className="book-infor row">
            <img
              className="col-3 book-infor-img"
              src="/images/account/demo-book.png"
              alt="Cô gái đến từ hôm qua"
            />
            <div className="book-infor-detail col">
              <h6>Cô gái đến từ hôm qua</h6>
              <p className="book-infor-detail-author">Nguyễn Nhật Ánh</p>
              <p className="book-infor-detail-price">
                <span className="book-infor-detail-price-old">80.000đ</span>{" "}
                <span className="book-infor-detail-price-new">60.000đ</span>
              </p>
              <p className="book-infor-detail-quantity">Số lượng: 1</p>
            </div>
          </div>

          <div className="book-delivery">
            <i className="bi bi-truck book-delivery-icon"></i>
            <span>Đơn hàng đã xuất kho HN</span>
          </div>

          <div className="row book-delivery-bill">
            <div className="book-total-bill col">
              <span className="book-total-bill-title">Thành tiền:</span>
              <span className="book-total-bill-price">60.000đ</span>
            </div>
            <button
              type="button"
              className="book-delivery-confirm btn btn-primary disabled col"
            >
              Đã nhận được hàng
            </button>
          </div>

          <p className="book-date-delivery">
            Nhận sản phẩm và thanh toán trước 30-04-2022
          </p>
        </div>

        <div className="col-3 todo-timeline mb-5">
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
        </div>
      </div>
    </div>
  );
}

export default OrderShipping;
