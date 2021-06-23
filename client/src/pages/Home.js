import React from "react";
/// import React, { useState } from "react"; instructions never said to remove but i did see above made erros go buh bye
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Home;
