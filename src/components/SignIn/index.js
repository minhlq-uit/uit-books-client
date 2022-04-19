
import React from "react";
import PropTypes from "prop-types";
import {
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

import "./signIn.scss";
import { FastField, Formik, useFormik } from "formik";
import InputField from "./InputField";
import * as Yup from "yup";
import { Button } from "react-bootstrap";




const SignIn = (props) => {

  const initialValues = {
    email: "",
    password: "",
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Tên email không hợp lệ").required("Vui lòng điền email"),
    password: Yup.string()
      .min(4, "Mật khẩu quá ngắn!")
      .max(10, "Mật khẩu quá dài!")
      .required("Vui lòng điền mật khẩu"),
  });
  return (
    <div className="signIn__container">
      <Container>
        <Row>
          <Col md="6" lg="7" className="signIn__container__left">
            <div className="title">
              <img src='/images/basket/logo.png' alt="logo" />
              <div className="title__name">BooksUIT</div>
            </div>
            <div className="image">
              <img src='./images/basket/signin.png' alt="" />
            </div>
          </Col>
          <Col md="6" lg="5" className="signIn__container__right">
            <div className="signIn__container__right__button">
              <button>Đăng kí</button>
            </div>
            <Formik
              className="sigIn__form"
              initialValues={initialValues}
              validationSchema={signInSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(formikProps) => {
                const { values, errors, touched } = formikProps;
                // console.log({ values, errors, touched });
                return (
                  <div className="sigIn__form">
                    <Form >
                      <FastField
                        name="email"
                        component={InputField}
                        placeholder="123@gmail.com"
                        icon="fa-solid fa-user"
                        type="text"
                      />
                      <FastField
                        name="password"
                        component={InputField}
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        icon="fa-solid fa-key"
                        type="password"
                      />
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

                      <div className="button__submit">
                        <Button type="submit">Đăng nhập</Button>
                      </div>
                      <a href="#">Quên mật khẩu</a>
                    </Form>
                  </div>
                );
              }}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;

