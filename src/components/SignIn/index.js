import React from "react";
import { useState, useEffect } from "react";

import { Col, Container, Form, Row, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, clear } from "../../redux/features/user/userSlice";
import { forgotPassword, clearMessage } from "../../redux/features/user/forgotPasswordSlice";

import { useNavigate } from "react-router-dom";

import Loading from "../../more/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./signIn.scss";
// import * as Yup from "yup";

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // modal reset password
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault()
    setShow(true)
  };

  const { error, loading, isAuthenticated } = useSelector((state) => {
    return state.user;
  });
  const { status, message } = useSelector(state => state.forgotPassword)

  const navigate = useNavigate();

  const redirect = "/";

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clear());
    }

    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [dispatch, error, isAuthenticated]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(loginRequest({ email, password }));
  };
  const handleSubmitEmail = (e) => {
    handleClose()
    dispatch(forgotPassword({email}))
  }
  const handleToRegister = () => {
    navigate('/signup')
  }
  useEffect(() => {
    if(status) {
      toast.success(message);
      dispatch(clearMessage());
    } 
    if (status === false) {
      toast.error(message);
      dispatch(clearMessage());
    }
  }, [status, message])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="signIn__container">
            <Container>
              <Row>
                <Col md="6" lg="7" className="signIn__container__left">
                  <div className="title">
                    <img src="/images/basket/logo.png" alt="logo" />
                    <div className="title__name">BooksUIT</div>
                  </div>
                  <div className="image">
                    <img src="./images/basket/signin.png" alt="" />
                  </div>
                </Col>
                <Col md="6" lg="5" className="signIn__container__right">
                  <div className="signIn__container__right__button">
                    <button onClick={handleToRegister}>Đăng kí</button>
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={handleEmail}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={handlePassword}
                      />
                    </Form.Group>
                    <div className="sigIn__form__separate">
                      <hr />
                      <span> Or</span>
                      <hr />
                    </div>
                    <div className="sigIn__form__row withFacebook">
                      <div className="sigIn__form__row__icon">
                        <i className="fa-brands fa-facebook-f"></i>
                      </div>
                      <div className="sigIn__form__row__name">
                        Đăng nhập với Facebook
                      </div>
                    </div>
                    <div className="sigIn__form__row withGoogle">
                      <div className="sigIn__form__row__icon">
                        <i className="fa-brands fa-google-plus-g"></i>
                      </div>
                      <div className="sigIn__form__row__name">
                        Đăng nhập với Google
                      </div>
                      {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                      <Button
                        type="submit"
                        className="w-100"
                        onClick={handleOnSubmit}
                      >
                        Đăng nhập
                      </Button>
                    </div>
                    <a href="" onClick={handleShow}>Quên mật khẩu</a>
                  </Form>
                </Col>
              </Row>
            </Container>
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
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Quên mật khẩu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Hãy nhập email của bạn</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    onChange={handleEmail}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmitEmail}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

SignIn.propTypes = {};

export default SignIn;
