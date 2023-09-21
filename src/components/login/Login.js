import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Kiểm tra xem đã nhập đầy đủ thông tin hay chưa
    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    // Lấy danh sách người dùng từ localStorage
    const userArr = JSON.parse(localStorage.getItem("userArr")) || [];

    // Tìm người dùng trong danh sách
    const user = userArr.find(
      (user) => user.email === email && user.password === password
    );

    // Nếu người dùng tồn tại, thực hiện đăng nhập
    if (user) {
      dispatch({ type: "ON_LOGIN", payload: user });
      localStorage.setItem("currentUser", JSON.stringify(user));
      setError("");
      navigate("/"); // Chuyển hướng đến trang đã đăng nhập
    } else {
      setError("Email hoặc mật khẩu không đúng");
    }
  };

  return (
    <Container className={classes.container}>
      <img
        className={classes.backgroundImage}
        src="/media/banner1.jpg"
        alt="background"
      />
      <Card>
        <div className={classes.cardSignup}>
          <Row>
            <Col className={classes.titleSignup}>
              <span>Sign In</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <form onSubmit={handleSubmit} className={classes.formSignup}>
                <div className={classes.formGroup}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={classes.formGroup}>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <div className={classes.error}>{error}</div>}
                <button type="submit" className={classes.signupButton}>
                  SIGN IN
                </button>
                <p>
                  Create an account? <Link to="/register">Sign up</Link>
                </p>
              </form>
            </Col>
          </Row>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
