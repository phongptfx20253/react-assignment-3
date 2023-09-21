import { Fragment } from "react";
import Banner from "../components/banner/Banner";
import Categories from "../components/categories/Categories";
import ProductList from "../components/products/ProductList";
import Subscribe from "../components/subscribe/Subscribe";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <Categories />
      <ProductList />
      <Subscribe />
    </Fragment>
  );
};

export default HomePage;
