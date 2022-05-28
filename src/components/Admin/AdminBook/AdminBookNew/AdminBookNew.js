import "./AdminBookNew.scss";

function AdminBookNew() {
  return (
    <div className="container">
      <form className="form-container">
        <div className="form-title-header">
          <h5 className="mb-4">Thêm sách mới</h5>
          <hr />
          <p className="dark-blue-text mt-4" />
        </div>
        <div className="form-group">
          <label className="form-group-label" htmlFor="book-name-add">
            Tên sách
          </label>
          <input
            type="text"
            className="form-control"
            id="book-name-add"
            placeholder=""
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="category-select-add">
            Thể loại
          </label>
          <select className="form-control form-select" id="category-select-add">
            <option>Thơ</option>
            <option>Tâm lý học</option>
            <option>Kinh doanh vs kinh tế</option>
            <option>Khoa học viễn tưởng</option>
            <option>Tiểu thuyết lãng mạn</option>
            <option>Sách truyền cảm hứng</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="author-add">
            Tác giả
          </label>
          <input
            type="text"
            className="form-control"
            id="author-add"
            placeholder=""
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="publisher-add">
            Nhà xuất bản
          </label>
          <input
            type="text"
            className="form-control"
            id="publisher-add"
            placeholder=""
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="img-add">
            Hình ảnh
          </label>
          <input
            type="file"
            className="form-control"
            id="img-add"
            placeholder="Choose file"
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="publisher-add">
            Giá
          </label>
          <input
            type="text"
            className="form-control"
            id="publisher-add"
            placeholder=""
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="pageNumber">
            Số trang
          </label>
          <input
            type="number"
            className="form-control"
            id="pageNumber-add"
            placeholder=""
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="stock-add">
            Tồn kho
          </label>
          <input
            type="number"
            className="form-control"
            id="stock-add"
            placeholder=""
          />
        </div>

        <div className="form-group">
          <label
            className="form-group-label"
            htmlFor="exampleFormControlTextarea1"
          >
            Mô tả sách
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button type="button" class="btn btn-submit">
          Tạo mới
        </button>
        <button type="button" class="btn btn-reset">
          Khôi phục
        </button>
      </form>
    </div>
  );
}

export default AdminBookNew;
