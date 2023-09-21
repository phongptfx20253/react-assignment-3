import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./Cart.module.css";
import Button from "../button/Button";
import Title from "../title/Title";

import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import {
  updateCart,
  deleteCart,
  setCartIconFlashing,
} from "../../store/actions/cartActions";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.listCart);
  const totalPrice = useSelector((state) =>
    state.cart.listCart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  );

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  const updateCartItem = (productId, newQuantity) => {
    dispatch(updateCart(productId, newQuantity));
    dispatch(setCartIconFlashing(true));

    setTimeout(() => {
      dispatch(setCartIconFlashing(false));
    }, 300);
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const deleteCartItem = (productId) => {
    dispatch(deleteCart(productId));
    dispatch(setCartIconFlashing(true));

    setTimeout(() => {
      dispatch(setCartIconFlashing(false));
    }, 300);
  };

  // Xử lý khi click vào nút "Tiếp tục mua hàng"
  const handleContinueShopping = () => {
    navigate("/shop");
  };

  // Giảm số lượng sản phẩm trong giỏ hàng
  const handleDecrementQuantity = (item) => {
    if (item.quantity > 1) {
      updateCartItem(item.product._id.$oid, item.quantity - 1);
      dispatch(setCartIconFlashing(true));

      setTimeout(() => {
        dispatch(setCartIconFlashing(false));
      }, 300);
    }
  };

  // Tăng số lượng sản phẩm trong giỏ hàng
  const handleIncrementQuantity = (item) => {
    if (item.quantity < 10) {
      updateCartItem(item.product._id.$oid, item.quantity + 1);
      dispatch(setCartIconFlashing(true));

      setTimeout(() => {
        dispatch(setCartIconFlashing(false));
      }, 300);
    } else {
      alert("If you want to buy more than 10 products, please contact us!");
    }
  };

  return (
    <Container className={classes.cartContainer}>
      <Row>
        <Col className={classes.cartHeader}>
          <span className={classes.cartHeaderLeft}>CART</span>
          <span className={classes.cartHeaderRight}>CART</span>
        </Col>
      </Row>
      <Row>
        <Title>SHOPPING CART</Title>
      </Row>
      {listCart.length === 0 ? (
        <p>No item in your cart</p>
      ) : (
        <Row>
          <Col md={8} className={classes.cartLeft}>
            <Table className={classes.tableCart}>
              <thead className={classes.tableHeader}>
                <tr className={classes.gray}>
                  <th>IMAGE</th>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {listCart.map((item) => (
                  <tr key={item.product._id.$oid}>
                    <td>
                      <img
                        className="w-75"
                        src={item.product.img1}
                        alt={item.product.name}
                      />
                    </td>
                    <td className={classes.productName}>{item.product.name}</td>
                    <td className={classes.gray}>
                      {Number(item.product.price).toLocaleString("vi-VN")} VND
                    </td>
                    <td>
                      <div className={classes.quantity}>
                        <button
                          className={classes.prev}
                          onClick={() => handleDecrementQuantity(item)}
                        >
                          ◂
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className={classes.next}
                          onClick={() => handleIncrementQuantity(item)}
                        >
                          ▸
                        </button>
                      </div>
                    </td>
                    <td className={classes.gray}>
                      {Number(
                        item.product.price * item.quantity
                      ).toLocaleString("vi-VN")}{" "}
                      VND
                    </td>
                    <td>
                      <button
                        className={classes.deleteBtn}
                        onClick={() => deleteCartItem(item.product._id.$oid)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className={classes.cartNavigate}>
              <button
                onClick={handleContinueShopping}
                className={classes.continueBtn}
              >
                ← Continue shopping
              </button>
              <div>
                <button
                  className="px-2 py-1"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to checkout →
                </button>
              </div>
            </div>
          </Col>
          <Col md={4} className={classes.cartTotal}>
            <Title>CART TOTAL</Title>
            <Table>
              <tbody>
                <tr>
                  <td>SUBTOTAL:</td>
                  <td className={classes.gray}>
                    {Number(totalPrice).toLocaleString("vi-VN")} VND
                  </td>
                </tr>
                <tr>
                  <td>TOTAL: </td>
                  <td className={classes.totalPrice}>
                    {Number(totalPrice).toLocaleString("vi-VN")} VND
                  </td>
                </tr>
              </tbody>
            </Table>
            <input
              type="text"
              placeholder="Enter your coupon"
              className={classes.inputCoupon}
            ></input>
            <Button className={classes.applyCoupon}>
              <FontAwesomeIcon className={classes.giftIcon} icon={faGift} />
              Apply Coupon
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
