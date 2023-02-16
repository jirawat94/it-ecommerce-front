import React from "react";
import Product from "../components/Product";
import products from "../products";
function HomeScreen() {
  return (
    <div>
      <h1>Latest Products</h1>
      <div>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
