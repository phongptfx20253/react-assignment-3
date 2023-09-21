import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./NavBar.module.css";
// Import bootstrap
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const isCartIconFlashing = useSelector(
    (state) => state.cart.isCartIconFlashing
  );

  const handleLogout = () => {
    dispatch({ type: "ON_LOGOUT" });
    localStorage.removeItem("currentUser");
  };

  const cartClasses = `${isCartIconFlashing ? classes.bump : ""}`;

  return (
    <Container className={`${classes.navContainer} p-md-4`}>
      <Row className={classes.navbarList}>
        <Col md={4} className={classes.navLeft}>
          {/* Liên kết đến trang chủ */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>{" "}
          {/* Liên kết đến trang Shop */}
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Shop
          </NavLink>
        </Col>

        <Col md={4} className={classes.navCenter}>
          BOUTIQUE
        </Col>

        <Col md={4} className={classes.navRight}>
          {" "}
          {/* Liên kết đến trang Cart */}
          <div className={`${cartClasses} ${classes.cartBump}`}>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <FontAwesomeIcon className={classes.navIcon} icon={faCartPlus} />
              Cart
            </NavLink>
          </div>
          {currentUser ? (
            // Nếu người dùng đã đăng nhập
            <>
              <FontAwesomeIcon className={classes.navIcon} icon={faUser} />
              <span>{currentUser.fullName}</span>
              <FontAwesomeIcon
                className={classes.faCaretDown}
                icon={faCaretDown}
              />
              {/* Nút Logout */}
              <button className={classes.logoutBtn} onClick={handleLogout}>
                {" "}
                (Logout)
              </button>
            </>
          ) : (
            // Nếu người dùng chưa đăng nhập
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <FontAwesomeIcon className={classes.navIcon} icon={faUser} />
              Login
            </NavLink>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default NavBar;
