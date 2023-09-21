// Import bootstrap
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { useNavigate } from "react-router-dom";
import classes from "./Categories.module.css";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <Container className={classes.categories}>
      <div className={classes.categoriesTitle}>
        <div className={classes.title}>CAREFULLY CREATED COLLECTIONS</div>
        <div className={classes.desc}>BROWSE OUR CATEGORIES</div>
      </div>

      <Row className="mt-4 mb-4 p-0">
        <Col md>
          <div className={classes.catImg} onClick={() => navigate("/shop")}>
            <img className="w-100" src="/media/product_1.png" alt="iPhone" />
          </div>
        </Col>
        <Col md>
          <div className={classes.catImg} onClick={() => navigate("/shop")}>
            <img className="w-100" src="/media/product_2.png" alt="iMac" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md>
          <div className={classes.catImg} onClick={() => navigate("/shop")}>
            <img className="w-100" src="/media/product_3.png" alt="iPad" />
          </div>
        </Col>
        <Col md>
          <div className={classes.catImg} onClick={() => navigate("/shop")}>
            <img
              className="w-100"
              src="/media/product_4.png"
              alt="Apple Watch"
            />
          </div>
        </Col>
        <Col md>
          <div className={classes.catImg} onClick={() => navigate("/shop")}>
            <img className="w-100" src="/media/product_5.png" alt="AirPods" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
