import React from "react";
import { useState, useEffect } from "react";
import Loading from "../../more/Loader";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePassword,
  clearIsUpdated,
  clearErrors,
} from "../../redux/features/user/profileUserSlice";

import { ToastContainer, toast } from "react-toastify";

export default function UpdatePassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isUpdated, error } = useSelector(
    (state) => state.profileUser
  );
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updatePassword({ oldPassword, newPassword, confirmPassword }));
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      toast.success("Change password success. Redirect to page me after 5s.")
      dispatch(clearIsUpdated())
      setTimeout(() => {
        navigate(-1);
      }, 5000)
    }
  }, [isUpdated, error]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container className="mt-4">
          <h2>Update Password</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formOldPassword">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </Form.Group>

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
            <Button variant="primary" type="submit" onClick={handleUpdate}>
              Update
            </Button>
            <Button
              className="ms-3"
              variant="primary"
              type="submit"
              onClick={handleCancel}
            >
              Cancel
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
      )}
    </>
  );
}
