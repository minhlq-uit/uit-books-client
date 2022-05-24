import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

export default function Me() {

  const navigate = useNavigate();
  const { state } = useLocation();
  // console.log('state', state)
  const handleBackHome = () => {
    navigate("/");
  };
  const handleToEditProfile = () => {
    navigate("./update/info", { state: {...state}});
  };
  return (
    <Container>
      <h1>Page Me</h1>
      <Card className="mt-3">
        <Card.Img />

        <Card.Body>
          <Card.Title>{state.name}</Card.Title>
          <Card.Text>{state.email}</Card.Text>
          <Button varitan="primary" onClick={handleBackHome}>
            Go back Home
          </Button>
        </Card.Body>
      </Card>
      <Button varitan="primary" onClick={handleToEditProfile}>
        edit profile
      </Button>
    </Container>
  );
}
