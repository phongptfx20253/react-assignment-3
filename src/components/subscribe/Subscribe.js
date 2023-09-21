import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./Subscribe.module.css";
import Button from "../button/Button";

const Subscribe = () => {
  return (
    <div className={classes.subscribe}>
      <Container className={classes.subscribeContainer}>
        <Row className="row">
          <Col md lg="4" className={classes.col}>
            <h4>FREE SHIPPING</h4>
            <p>Free shipping worldwide</p>
          </Col>
          <Col md lg="4" className={classes.col}>
            <h4>24 X 7 SERVICE</h4>
            <p>Free shipping worldwide</p>
          </Col>
          <Col md lg="4" className={classes.col}>
            <h4>FESTIVAL OFFER</h4>
            <p>Free shipping worldwide</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={classes.subsEmail}>
          <Col md lg="6">
            <h4>LET'S BE FRIENDS!</h4>
            <p>Nisi nisi tempor consequat laboris nisi.</p>
          </Col>
          <Col md lg="6" className={classes.subEmail}>
            <div>
              <input type="email" placeholder="Enter your email address" />
              <Button>Subscribe</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subscribe;
