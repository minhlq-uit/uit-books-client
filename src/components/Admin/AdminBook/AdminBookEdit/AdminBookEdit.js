import "../AdminBookNew/AdminBookNew.scss";
// import { useState } from 'react'
function AdminBookEdit() {
  return (
    <div className="container">
      <form className="form-container">
        <div className="form-title-header">
          <h5 className="mb-4">Chỉnh sửa sách</h5>
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
            placeholder="Milk and honey"
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="category-select-add">
            Thể loại
          </label>
          <select className="form-control form-select" id="category-select-add">
            <option>Khoa học viễn tưởng</option>
            <option>Thơ</option>
            <option>Tâm lý học</option>
            <option>Kinh doanh vs kinh tế</option>
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
            placeholder="Rupi Kaur"
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
            placeholder="Simon vs Schuster"
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
            placeholder="150.000đ"
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
            rows="10"
            placeholder="Tập thơ và văn xuôi về sự sống còn. Về trải nghiệm bạo lực, lạm dụng, tình yêu, mất mát và nữ tính. Cuốn sách được chia thành bốn chương, và mỗi chương phục vụ một mục đích khác nhau. Thỏa thuận với một nỗi đau khác. Chữa lành một nỗi đau khác. Milk and Honey đưa người đọc đi qua một hành trình của những khoảnh khắc cay đắng nhất trong cuộc đời và tìm thấy vị ngọt trong đó bởi vì có vị ngọt ở khắp mọi nơi nếu bạn chỉ cần bạn chịu nhìn."
          ></textarea>
        </div>

        <button type="button" className="btn btn-submit">
          Gửi
        </button>
        <button type="button" className="btn btn-reset">
          Khôi phục
        </button>
      </form>
    </div>
  );
}

export default AdminBookEdit;
