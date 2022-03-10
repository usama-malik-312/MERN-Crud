import React, { useEffect } from "react";
import "./LandingPage.css";
import { Button, Container, NavLink, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate]);
  return (
    <Container className="bg">
      <Row>
        <div className="intro-text">
          <div>
            <h2 className="title">Welcome to MERN Stack</h2>
            <p className="subtitle">
              First, solve the problem. Then, write the code.
            </p>
          </div>
          <div className="buttonContainer">
            <Link to="/login">
              <Button size="lg" className="landingbutton">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant="outline-primary"
                size="lg"
                className="landingbutton"
              >
                Signup
              </Button>
            </Link>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default LandingPage;
