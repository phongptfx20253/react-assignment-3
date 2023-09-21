import React from "react";

import classes from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  const productClasses = `${classes.productCard} ${classes.zoom}`;
  return (
    <div key={product._id} className={productClasses}>
      <img
        className={classes.productImg}
        src={product.img1}
        alt={product.name}
      />
      <div className={classes.productDetails}>
        <h4 className={classes.productTitle}>{product.name}</h4>
        <p className={classes.productPrice}>
          {Number(product.price).toLocaleString("vi-VN")} VND
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
