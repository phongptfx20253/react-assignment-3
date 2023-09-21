import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./Shop.module.css";
import { Link } from "react-router-dom";
import ProductItem from "../products/ProductItem";

const url = `https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74`;

const Shop = () => {
  // Khởi tạo các trạng thái
  const [products, setProducts] = useState([]); // Danh sách sản phẩm
  const [category, setCategory] = useState("all"); // Danh mục sản phẩm được chọn
  const [searchTerm, setSearchTerm] = useState(""); // Từ khóa tìm kiếm
  const [sortOption, setSortOption] = useState("default"); // Lựa chọn sắp xếp

  // Gọi API và lấy dữ liệu sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Xử lý sự kiện thay đổi danh mục sản phẩm
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearchTerm("");
  };

  // Xử lý sự kiện thay đổi từ khóa tìm kiếm
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Xử lý sự kiện thay đổi lựa chọn sắp xếp
  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  // Lọc sản phẩm dựa trên danh mục và từ khóa tìm kiếm
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sắp xếp sản phẩm dựa trên lựa chọn sắp xếp
  const sortedProducts = [...searchedProducts].sort((a, b) => {
    if (sortOption === "default") return 0;
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <Container className={classes.catContainer}>
      <Row>
        <Col className={classes.catHeader}>
          <span className={classes.catHeaderLeft}>SHOP</span>
          <span className={classes.catHeaderRight}>SHOP</span>
        </Col>
      </Row>
      <Row>
        <Col md={3} className={classes.categories}>
          <h4>CATEGORIES</h4>
          <ul className={classes.catList}>
            <span>APPLE</span>
            <li onClick={() => handleCategoryChange("all")}>All</li>
            <li onClick={() => handleCategoryChange("iphone")}>iPhone</li>
            <li onClick={() => handleCategoryChange("ipad")}>iPad</li>
            <li onClick={() => handleCategoryChange("macbook")}>Macbook</li>
            <span>WIRELESS</span>
            <li onClick={() => handleCategoryChange("airpod")}>Airpod</li>
            <li onClick={() => handleCategoryChange("watch")}>Watch</li>
            <span>OTHER</span>
            <li onClick={() => handleCategoryChange("mouse")}>Mouse</li>
            <li onClick={() => handleCategoryChange("keyboard")}>Keyboard</li>
            <li onClick={() => handleCategoryChange("other")}>Other</li>
          </ul>
        </Col>
        <Col md={9} className={classes.catContent}>
          <div className={classes.catSearch}>
            <input
              type="text"
              placeholder="Enter Search Here!"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <select value={sortOption} onChange={handleSortOptionChange}>
              <option value="default">Default sorting</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
          <div className={classes.catProduct}>
            {sortedProducts.length === 0 && <p>No products found.</p>}
            {sortedProducts.map((product) => (
              <Col md={4} key={product._id.$oid}>
                <Link
                  className={classes.catLink}
                  to={`/detail/${product._id.$oid}`}
                >
                  <ProductItem
                    className={classes.catProductItem}
                    key={product._id.$oid}
                    product={product}
                  />
                </Link>
              </Col>
            ))}
          </div>
          <div className={classes.catPagination}>
            <div>
              <button>{"«"}</button>
              {filteredProducts.length !== 0 && (
                <button style={{ backgroundColor: "black", color: "white" }}>
                  1
                </button>
              )}
              <button>{"»"}</button>
            </div>
            <span>
              Showing 1-{sortedProducts.length} of {sortedProducts.length}{" "}
              results
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
