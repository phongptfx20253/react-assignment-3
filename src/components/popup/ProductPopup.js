import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hidePopup } from "../../store/actions/popupActions";
// Import bootstrap
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./ProductPopup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ProductPopup = () => {
  const product = useSelector((state) => state.popup.popupProduct);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hidePopup());
  };

  const handleViewDetail = () => {
    navigate(`/detail/${product._id.$oid}`);
    handleClose();
  };
  return (
    // Thêm sự kiện onClick cho thẻ div có className là popupOverlay và gọi hàm onClose khi sự kiện này xảy ra. Điều này có nghĩa là khi người dùng nhấp vào vùng mờ (overlay) thì popup sẽ được đóng lại.

    // Cần ngăn chặn sự kiện onClick lan ra khung nội dung (popupContent) bằng cách thêm một sự kiện onClick cho thẻ div có className là popupContent và gọi hàm stopPropagation của đối tượng sự kiện.

    <div className={classes.popupOverlay} onClick={handleClose}>
      <Container
        className={classes.popupContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={classes.closeButton} onClick={handleClose}>
          X
        </button>
        <Row className="p-md-1">
          <Col md={6} className={classes.popupDetail}>
            <img
              className={classes.productImg}
              src={product.img1}
              alt={product.name}
            />
          </Col>
          <Col md={6} className={classes.popupDetail}>
            <h2 className={classes.productTitle}>{product.name}</h2>
            <p className={classes.productPrice}>
              {Number(product.price).toLocaleString("vi-VN")} VND
            </p>
            <p className={classes.productDescription}>{product.short_desc}</p>
            <button onClick={handleViewDetail} className={classes.popupBtn}>
              <FontAwesomeIcon
                className={classes.popupIcon}
                icon={faCartPlus}
              />
              View Detail
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductPopup;
