import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { updateInfo, clearIsUpdated } from "../../redux/features/user/profileUserSlice";
import { loadUser } from "../../redux/features/user/userSlice";

import Loading from "../../more/Loader";
import { ToastContainer, toast } from "react-toastify";

export default function UpdateInfo() {
  const { isUpdated } = useSelector((state) => {
    return state.profileUser;
  });
  const { loading, user } = useSelector((state) => {
    return state.user;
  });
  useEffect(() => {
    dispatch(loadUser())
  }, [])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { state } = useLocation();
  const [userName, setUserName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateInfo({ name: userName, email }));
  };
  const handleCancel = (e) => {
    e.preventDefault()
    navigate(-1)
  }
  useEffect(() => {
    if (isUpdated) {
      toast.success("Change info success. Redirect to page me after 5s.")
      dispatch(clearIsUpdated())
      setTimeout(() => {
        navigate(-1);
      }, 5000)
    }
  }, [!isUpdated]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container className="mt-4">
          <h2>Update info</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formUserName">
              <Form.Label>User email</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={handleUserName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={handleEmail} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleUpdate}>
              Update
            </Button>
            <Button className="ms-3" variant="primary" type="submit" onClick={handleCancel}>
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
