// Import bootstrap
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { useNavigate } from "react-router-dom";
import classes from "./Banner.module.css";
import Button from "../button/Button";

function Banner() {
  const navigate = useNavigate();

  // Xử lý sự kiện khi nút button được nhấp
  const btnHandler = () => {
    navigate("/shop"); // Chuyển hướng đến trang "/shop"
  };

  return (
    <Container className={classes.banner}>
      <img
        className={classes.bannerImg}
        src="/media/banner1.jpg"
        alt="new session"
      />
      <div className={classes.description}>
        <div className={classes.title}>NEW INSPIRATION 2020</div>
        <div className={classes.desc}>20% OFF ON NEW SEASON</div>
        <Button onClick={btnHandler}>Browse collections</Button>
      </div>
    </Container>
  );
}

export default Banner;
