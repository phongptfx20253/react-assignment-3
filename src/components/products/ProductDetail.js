import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./ProductDetail.module.css";
import ProductItem from "./ProductItem";
import Button from "../button/Button";
import Title from "../title/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  updateCart,
  setCartIconFlashing,
} from "../../store/actions/cartActions";

const url =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

const ProductDetail = () => {
  const { productId } = useParams(); // lấy id sản phẩm từ Router
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImg, setSelectedImg] = useState("");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.listCart);

  const handleAddToCart = (product) => {
    const cartItem = listCart.find(
      (item) => item.product?._id?.$oid === product?._id?.$oid
    );
    if (cartItem) {
      dispatch(updateCart(product?._id?.$oid, cartItem.quantity + quantity));
    } else {
      dispatch(addToCart(product, quantity));
    }
    dispatch(setCartIconFlashing(true));

    setTimeout(() => {
      dispatch(setCartIconFlashing(false));
    }, 300);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const productData = data.find((p) => {
        const id = p._id.$oid;
        return id === productId;
      });
      setProduct(productData);
      const relatedProductsData = data.filter((p) => {
        const id = p._id.$oid;
        return p.category === productData.category && id !== productId;
      });
      setRelatedProducts(relatedProductsData);
    };
    fetchProduct();
  }, [productId]);

  return (
    <Container className={classes.container}>
      <Row className="mt-5 mb-5">
        <Col md={6}>
          <Row>
            <Col
              md={2}
              className="p-0 m-0 d-flex flex-column justify-content-center align-item-center"
            >
              {/* Hiển thị hình ảnh sản phẩm và cho phép chọn hình ảnh */}
              <img
                className={`${classes.productImg} mb-2`}
                src={product.img1}
                alt={product.name}
                onClick={(e) => setSelectedImg(product.img1)}
              />
              <img
                className={`${classes.productImg} mb-2`}
                src={product.img2}
                alt={product.name}
                onClick={(e) => setSelectedImg(product.img2)}
              />
              <img
                className={`${classes.productImg} mb-2`}
                src={product.img3}
                alt={product.name}
                onClick={(e) => setSelectedImg(product.img3)}
              />
              <img
                className={`${classes.productImg} mb-2`}
                src={product.img4}
                alt={product.name}
                onClick={(e) => setSelectedImg(product.img4)}
              />
            </Col>
            <Col md={10} className=" m-0 p-0">
              {/* Hiển thị hình ảnh sản phẩm được chọn */}
              <img
                className={`${classes.productImg} p-3`}
                src={selectedImg || product.img1}
                alt={product.name}
              />
            </Col>
          </Row>
        </Col>
        <Col md={6} className={`${classes.productInfo} mb-5`}>
          {/* Hiển thị thông tin sản phẩm */}
          <h2>{product.name}</h2>
          <h5 className={classes.productPrice}>
            {Number(product.price).toLocaleString("vi-VN")} VND
          </h5>
          <p className={classes.short_desc}>{product.short_desc}</p>
          <div className="mb-4">
            <strong>CATEGORY: </strong>
            {product.category}
          </div>
          <div className={classes.quantity}>
            <div className={classes.quantityLeft}>
              <span className="mx-md-4 mx-xs-2">QUANTITY</span>
              {/* Điều chỉnh số lượng sản phẩm */}
              <button
                className={classes.prev}
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? prev : prev - 1))
                }
              >
                {`◂`}
              </button>
              {quantity}
              <button
                className={classes.next}
                onClick={() => setQuantity((prev) => prev + 1)}
              >{`▸`}</button>
            </div>
            {/* Thêm sản phẩm vào giỏ hàng */}
            <Button onClick={() => handleAddToCart(product)}>
              Add to cart
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        {/* Hiển thị mô tả sản phẩm */}
        <Button>DESCRIPTION</Button>
        <Title>PRODUCT DESCRIPTION</Title>
        <div className={classes.longDesc}>{product.long_desc}</div>
      </Row>
      <Row className={classes.relatedProducts}>
        <Col className="mb-3">
          <Title>RELATED PRODUCTS</Title>
        </Col>
      </Row>
      <Row>
        {/* Hiển thị sản phẩm liên quan */}
        {relatedProducts &&
          relatedProducts.map((product) => (
            <Col md={3} key={product._id.$oid}>
              <Link
                className={classes.catLink}
                to={`/detail/${product._id.$oid}`}
                onClick={(e) => setSelectedImg(product.img1)}
              >
                <ProductItem
                  className={classes.catProductItem}
                  product={product}
                />
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ProductDetail;
