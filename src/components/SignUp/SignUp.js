import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userSlice, {
  registerRequest,
  clear,
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
  // avatar
  const [avatar, setAvatar] = useState("/images/account/avatar.png");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/account/avatar.png"
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, success, loading } = useSelector((state) => {
    console.log("state user", state.user);
    return state.user;
  });

  const redirect = "/";

  // avatar 
  const handleAvatarChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } 
    else {
      setAvatar(e.target.value)
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clear());
    }
    if (success) {
      toast.success("Dang ki thanh cong. Redirect page home after 3s.");
      dispatch(clear());
      setTimeout(() => {
        navigate(redirect);
      }, 3000);
    }
  }, [error, success]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerRequest({
        name: userName,
        email,
        password,
        avatar: avatar
      })
    );
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div id="signup" className="signup">
            <div className="container">
              <div className="row">
                <div className="container col-lg-8 mt-3">
                  <div className="container container-logo">
                    <img
                      src="/images/account/logo_book.png"
                      alt="Logo trang web"
                      className="logo img-responsive"
                    />
                    <span className="logo-name">UITBooks</span>
                  </div>
                  <div className="container-img">
                    <img
                      className="img-responsive img-welcome"
                      src="https://drive.google.com/uc?id=1QUzPNaT1qtitlU4vnktUyCGTmxL836Wr"
                      alt="signup-img"
                    />
                  </div>
                </div>

                <div className="container col-lg mt-3">
                  <div className="container-btn-signin">
                    <button type="button" className="btn btn-signup mb-2">
                      <Link to="/">Quay về Trang chủ</Link>
                    </button>
                  </div>
                  <div className="signUp__form">
                    <form className="container form-signup p-3" action="">
                      <h3 className="m-3 text-center signUp__title">
                        ĐĂNG KÝ TÀI KHOẢN
                      </h3>

                      <div className="mb-3 row container-input">
                        <div className="input-group m-3">
                          <div className="input-group-text input-icon">
                            <img
                              className="img-confirm-pass"
                              src="/images/account/carbon_user-avatar.png"
                              alt="confirm password"
                            />
                          </div>
                          <input
                            type="text"
                            className="form-control form-input input-group-text-1"
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
                            className="form-control form-input input-group-text-1"
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
                            className="form-control form-input input-group-text-1"
                            placeholder="Mật khẩu"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="input-group mb-3">
                          <input
                            type="file"
                            class="form-control-file"
                            onChange={handleAvatarChange}
                            name="avatar"
                          />
                        </div>
                        <div className="d-flex justify-content-center">
                          <img className="img-preview" src={avatarPreview} />
                        </div>
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
                        <Link to="/signin" className="switch-signin">
                          Đã có tài khoản?
                        </Link>
                        {/* <button
                          type="button"
                          className="switch-signin btn btn-link"
                        >
                          Đã có tài khoản?
                        </button> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
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
