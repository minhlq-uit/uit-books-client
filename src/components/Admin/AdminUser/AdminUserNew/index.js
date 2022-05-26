import React from "react";
import "./UserNew.scss";

function UserNew() {
    return (
        <div className="admin-user-new-form-infor">
            <div className="admin-form-infor-heading">
                <h4 className="mb-4">Thêm mới người dùng</h4>
                <hr />
                <p className="dark-grey-text mt-4" />
            </div>

            <form className="admin-user-new-form-infor-body p-3" action="">
                <div className="row">
                    <div className="col-sm">
                        <div className="row mb-3">
                            <label
                                htmlFor="form-name-body"
                                className="col-sm-2 col-form-label add-user-label"
                            >
                                Họ tên
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="form-name-body"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="form-email-body" className="col-sm-2 col-form-label add-user-label">
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="form-email-body"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label
                                htmlFor="form-phoneNumber-body"
                                className="col-sm-2 col-form-label add-user-label"
                            >
                                SĐT
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="form-phoneNumber-body"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label
                                htmlFor="form-adress-body"
                                className="col-sm-2 col-form-label add-user-label"
                            >
                                Địa chỉ
                            </label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="form-address-body" />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="row mb-3">
                            <label
                                htmlFor="form-username-body"
                                className="col-sm-2 col-form-label add-user-label"
                            >
                                Tên đăng nhập
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="form-username-body"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="form-password-body"
                                className="col-sm-2 col-form-label add-user-label"
                            >
                                Mật khẩu
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="form-password-body"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="form-role-body"
                                className="col-sm-2 col-form-label add-user-label"
                            >
                                Lựa chọn role
                            </label>
                            <div className="col-sm-10">
                                <select className="form-control" id="form-role-body">
                                    <option selected>Lựa chọn...</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Thường</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="form-avatar-body"
                                className="col-sm-2 col-form-label add-user-label"
                            >
                                Chọn Avatar
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="form-control-file"
                                    id="form-avatar-body"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-auto d-flex justify-content-start">
                    <button type="submit" className="btn btn-primary">
                        Tạo mới
                    </button>
                </div>
            </form>
        </div>
    )
}
export default UserNew;
