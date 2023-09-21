import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./CheckOut.module.css";
import Button from "../button/Button";
import Title from "../title/Title";
import Table from "react-bootstrap/Table";

const CheckOut = () => {
  const listCart = useSelector((state) => state.cart.listCart);
  const totalPrice = listCart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <Container className={classes.checkoutContainer}>
      <Row>
        <Col className={classes.checkoutHeader}>
          <span className={classes.checkoutHeaderLeft}>CHECKOUT</span>
          <span className={classes.checkoutHeaderRight}>
            HOME / CART / <span className={classes.gray}>CHECKOUT</span>
          </span>
        </Col>
      </Row>
      <Row>
        <Title>BILLING DETAILS</Title>
      </Row>
      {listCart.length === 0 && <p>No item in your cart</p>}
      {listCart.length !== 0 && (
        <Row>
          <Col md={7} className="m-0 p-0">
            <form className={classes.billingDetails}>
              <div>FULL NAME:</div>
              <input
                type="text"
                placeholder="Enter Your Full Name Here!"
                className={classes.inputFullName}
              />
              <div>EMAIL:</div>
              <input
                type="text"
                placeholder="Enter Your Email Here!"
                className={classes.inputEmail}
              />
              <div>PHONE NUMBER:</div>
              <input
                type="text"
                placeholder="Enter Your Phone Number Here!"
                className={classes.inputPhone}
              />
              <div>ADDRESS:</div>
              <input
                type="text"
                placeholder="Enter Your Address Here!"
                className={classes.inputAddress}
              />
              <Button>Place Order</Button>
            </form>
          </Col>
          <Col md={5} className={classes.cartTotal}>
            <Title className={classes.checkoutTotalTitle}>YOUR ORDER</Title>
            <Table className={classes.checkoutTable}>
              <tbody>
                {listCart.map((item) => (
                  <tr key={item.product._id.$oid}>
                    <td>
                      <strong>{item.product.name}</strong>
                    </td>
                    <td className={classes.gray}>
                      {Number(item.product.price).toLocaleString("vi-VN")}
                      {` VND x ${item.quantity}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className={classes.checkoutTotal}>
              <div>TOTAL</div>
              <div>{Number(totalPrice).toLocaleString("vi-VN")} VND</div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CheckOut;
