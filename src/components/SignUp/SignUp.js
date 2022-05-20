import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userSlice, {
  registerRequest,
  clearErrors
} from "../../redux/features/user/userSlice";
import Loading from "../../more/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./SignUp.scss";
// import { FaRegEnvelope } from "react-icons/fa";

function SignUp() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector((state) => {
    console.log("state user", state.user);
    return state.user;
  });

  const redirect = "/";

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [dispatch, error, isAuthenticated]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerRequest({
        name: userName,
        email,
        password,
      })
    );
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div id="signup">
            <div className="container">
              <div className="row">
                <div className="container col-lg-8 mt-3">
                  <div className="container container-logo">
                    <img
                      src="/images/account/logo_book.png"
                      alt="Logo trang web"
                      className="logo img-responsive"
                    />
                    <span className="logo-name">UIT Book</span>
                  </div>
                  <img
                    className="img-responsive img-welcome"
                    src="/images/account/imgWelcome.png"
                    alt="welcome to website"
                  />
                </div>

                <div className="container col-lg mt-3">
                  <div className="container-btn-signin">
                    <button type="button" className="btn btn-signup mb-2">
                      Đăng nhập
                    </button>
                  </div>

                  <form className="container form-signup p-3" action="">
                    <h3 className="m-3 text-center">ĐĂNG KÝ TÀI KHOẢN</h3>

                    <div className="mb-3 row container-input">
                      <div className="input-group m-3">
                        <div className="input-group-text input-icon">
                          <img
                            className="img-confirm-pass"
                            src="/images/account/carbon_user-avatar.png"
                            alt="concfirm password"
                          />
                        </div>
                        <input
                          type="text"
                          // value={username}
                          className="form-control form-input"
                          placeholder="Tên hiển thị"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      <div className="input-group m-3">
                        <div className="input-group-text input-icon">
                          {/* <FaRegEnvelope /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-envelope"
                            viewBox="0 0 16 16"
                            opacity="0.8"
                          >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          className="form-control form-input"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="input-group m-3">
                        <div className="input-group-text input-icon">
                          <img
                            className="img-confirm-pass"
                            src="/images/account/carbon_password.png"
                            alt="concfirm password"
                          />
                        </div>
                        <input
                          type="password"
                          className="form-control form-input"
                          placeholder="Mật khẩu"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      {/* <div className="input-group m-3">
                    <div className="input-group-text input-icon">
                      <img
                        className="img-confirm-pass"
                        src="/images/account/carbon_password.png"
                        alt="concfirm password"
                      />
                    </div>
                    <input
                      type="password"
                      className="form-control form-input"
                      placeholder="Xác nhận mật khẩu"
                    />
                  </div> */}
                    </div>

                    <div className="container text-center">
                      <input
                        type="submit"
                        value="Đăng ký"
                        className="btn btn-signup-footer"
                        onClick={handleOnSubmit}
                      />
                    </div>

                    <div className="container text-center mt-3">
                      <button
                        type="button"
                        className="switch-signin btn btn-link"
                      >
                        Đã có tài khoản?
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      )}
    </>
  );
}

export default SignUp;
