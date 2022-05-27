import React from "react";
import { useEffect } from "react";
import Loading from "../../more/Loader";
import { Container, Button, Card } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/features/user/userSlice";
import { clearIsUpdated } from "../../redux/features/user/profileUserSlice";

export default function Me() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { state } = useLocation();
  const { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const handleBackHome = () => {
    navigate("/");
  };
  const handleToEditProfile = () => {
    // console.log(state)
    navigate("./update/info", { state: { ...user } });
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <h1>Page Me</h1>
          <Card className="mt-3">
            <Card.Img />

            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.email}</Card.Text>
              <Button varitan="primary" onClick={handleBackHome}>
                Go back Home
              </Button>
            </Card.Body>
          </Card>
          <Button varitan="primary" onClick={handleToEditProfile}>
            edit profile
          </Button>
          <br />
          <a href="me/update/password">Change password</a>
        </Container>
      )}
    </>
  );
}
