import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { updateInfo } from "../../redux/features/user/profileUserSlice";

import Loading from "../../more/Loader";

export default function UpdateInfo() {
  const { error, loading, isAuthenticated, user, status } = useSelector(
    (state) => {
      console.log("state user", state.user);
      return state.user;
    }
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state } = useLocation();
  const [userName, setUserName] = useState(state.name);
  const [email, setEmail] = useState(state.email);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(updateInfo({userName, email}));
    navigate(-1);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container className="mt-4">
          <h2>Update info</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User email</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={handleUserName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={handleEmail} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleUpdate}>
              Update
            </Button>
          </Form>
        </Container>
      )}
    </>
  );
}
