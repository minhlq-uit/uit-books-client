import "./AccountInfor.scss";

function AccountInfor() {
  return (
    <div className="col-lg-8 my-account-form ">
      <div className="my-account-form-infor">
        <div className="form-infor-heading">
          <h4 className="mb-4">Thông tin cá nhân</h4>
          <hr />
          <p className="dark-grey-text mt-4" />
        </div>

        <form className="form-infor-body p-3" action="">
          <div className="row mb-3">
            <label
              htmlFor="form-username-body"
              className="col-sm-2 col-form-label"
            >
              Họ tên
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="form-username-body"
                value="Nguyễn Văn An"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                value="bookuit@gmail.com"
              />
            </div>
          </div>

          <div className="row mb-3">
            <label
              htmlFor="form-adress-body"
              className="col-sm-2 col-form-label"
            >
              Địa chỉ
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="form-adress-body"
                value="Khu phố 6, Linh Trung, Thủ Đức"
              />
            </div>
          </div>

          <div className="row mb-3">
            <label
              htmlFor="form-phoneNumber-body"
              className="col-sm-2 col-form-label"
            >
              SĐT
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="form-phoneNumber-body"
                value="0123456789"
              />
            </div>
          </div>

          <div className="col-auto d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Chỉnh sửa thông tin
            </button>
          </div>
        </form>
      </div>

      <div className="my-account-form-password">
        <div className="form-password-heading">
          <h4 className="mb-4">Thay đổi mật khẩu</h4>
          <hr />
          <p className="dark-grey-text mt-4" />
        </div>

        <form className="form-password-body p-3" action="">
          <div className="row mb-3">
            <label
              htmlFor="currentPassword"
              className="col-sm-2 col-form-label"
            >
              Mật khẩu hiện tại
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="currentPassword"
              />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="newPassword" className="col-sm-2 col-form-label">
              Mật khẩu mới
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="newPassword"
              />
            </div>
          </div>

          <div className="row">
            <label
              htmlFor="confirmPassword"
              className="col-sm-2 col-form-label"
            >
              Xác nhận mật khẩu
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
              />
            </div>
          </div>

          <div className="col-auto d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Cập nhật mật khẩu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountInfor;
