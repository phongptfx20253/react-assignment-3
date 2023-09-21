import React, { useState, useEffect } from "react";
import classes from "./ProductList.module.css";
import ProductPopup from "../popup/ProductPopup";
import { useDispatch, useSelector } from "react-redux";
import { showPopup, hidePopup } from "../../store/actions/popupActions";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const url =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();
  const popupProduct = useSelector((state) => state.popup.popupProduct);

  // Xử lý sự kiện khi người dùng nhấp vào hình ảnh sản phẩm
  const handleImageClick = (product) => {
    dispatch(showPopup(product)); // Hiển thị popup với sản phẩm tương ứng
  };

  // Xử lý sự kiện khi người dùng đóng popup
  const handleClose = () => {
    dispatch(hidePopup()); // Ẩn popup
  };

  useEffect(() => {
    // Lấy danh sách sản phẩm từ API khi component được render
    const fetchProductList = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const products = data.slice(0, 8); // Chỉ lấy 8 sản phẩm đầu tiên
      setProductList(products); // Cập nhật danh sách sản phẩm
    };
    fetchProductList();
  }, []);

  return (
    <Container className={classes.productList}>
      {/* Tiêu đề danh sách sản phẩm */}
      <div className={classes.productListTitle}>
        <div className={classes.title}>MADE THE HARD WAYS</div>
        <div className={classes.desc}>TOP TRENDING PRODUCTS</div>
      </div>
      <Row>
        {/* Hiển thị danh sách sản phẩm */}
        {productList.map((product) => (
          <Col md={3} key={product._id.$oid}>
            <div className={classes.productCard}>
              <img
                className={classes.productImg}
                src={product.img1}
                alt={product.name}
                onClick={() => handleImageClick(product)} // Xử lý sự kiện khi nhấp vào hình ảnh
              />
              <div
                className={classes.productDetails}
                onClick={() => handleImageClick(product)} // Xử lý sự kiện khi nhấp vào thông tin sản phẩm
              >
                <h4 className={classes.productTitle}>{product.name}</h4>
                <p className={classes.productPrice}>
                  {Number(product.price).toLocaleString("vi-VN")} VND
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {/* Hiển thị popup khi có sản phẩm được chọn */}
      {popupProduct && (
        <ProductPopup product={popupProduct} onClose={handleClose} />
      )}
    </Container>
  );
};

export default ProductList;
