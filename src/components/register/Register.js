import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Card from "../UI/Card";
import classes from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    // Kiểm tra các thông tin đăng ký
    if (!fullName || !email || !password || !phone) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    // Kiểm tra email trùng lặp với các tài khoản đã có
    const userArr = JSON.parse(localStorage.getItem("userArr")) || [];
    const existingUser = userArr.find((user) => user.email === email);
    if (existingUser) {
      setError("Email is already taken.");
      return;
    }

    // Tạo đối tượng người dùng mới
    const newUser = {
      fullName,
      email,
      password,
      phone,
    };

    // Thêm người dùng vào mảng userArr
    userArr.push(newUser);

    // Lưu userArr vào localStorage
    localStorage.setItem("userArr", JSON.stringify(userArr));

    // Đưa người dùng về trang Login
    navigate("/login");
  };

  return (
    <Container className={classes.container}>
      <img
        className={classes.backgroundImage}
        src="/media/banner1.jpg"
        alt="background "
      />
      <Card>
        <div className={classes.cardSignup}>
          <Row>
            <Col className={classes.titleSignup}>
              <span>Sign Up</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <form onSubmit={handleSignUp} className={classes.formSignup}>
                <div className={classes.formGroup}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
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
                <div className={classes.formGroup}>
                  <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {error && <div className={classes.error}>{error}</div>}
                <button type="submit" className={classes.signupButton}>
                  Sign Up
                </button>
                <p>
                  Login? <Link to="/login">Click</Link>
                </p>
              </form>
            </Col>
          </Row>
        </div>
      </Card>
    </Container>
  );
};
export default Register;
