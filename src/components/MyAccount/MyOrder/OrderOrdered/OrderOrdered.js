import "./OrderOrdered.scss";

function OrderOrdered() {
  return (
    <div className="order-infor">
      <div className="row">
        <div className="my-order-content-booked">
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

            <div className="book-infor-total col">
              <button type="button" className="btn btn-danger">
                Mua lại
              </button>
              <div className="book-infor-total-price">
                Thành tiền: <span>60.000đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderOrdered;
