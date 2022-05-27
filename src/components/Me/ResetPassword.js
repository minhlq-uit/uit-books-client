import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, clearMessage } from "../../redux/features/user/forgotPasswordSlice";
import { Container, Form, Button } from "react-bootstrap";
import Loading from "../../more/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ResetPassword() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.forgotPassword);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    const token = params.token;
    dispatch(resetPassword({ password: newPassword, confirmPassword, token }));
  };
  useEffect(() => {
    if (status) {
      toast.success("Reset password success. Tab will closed after 5s");
      dispatch(clearMessage())
      setTimeout(() => {
        window.opener = null;
        window.open("", "_self");
        window.close();
      }, 5000)
    }
    if (status === false) {
      toast.error("Reset password unsuccess!!");
      dispatch(clearMessage())
      // navigate('/')
    }
  }, [status]);
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formNewPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
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
    </Container>
  );
}
