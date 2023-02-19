import React from "react";
import Product from "../components/Product";
import products from "../products";
function HomeScreen() {
  return (
    <div>
      <h1 className="text-xl font-bold">Latest Products</h1>
      <div
        className="flex flex-row flex-wrap mx-auto w-[100%]
      "
      >
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
