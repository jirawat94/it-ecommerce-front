import React from "react";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <div
      className="m-3 xl:w-[23%] sm:w-2/5 rounded-3xl  shadow-xl
    "
    >
      <a href={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className=" rounded-3xl mb-2"
        />
        <div className="mx-3 mb-4 leading-10">
          <h1 className="text-xl font-semibold h-16">{product.name}</h1>
          <p className="text-orange-600 font-bold text-xl mb-2">
            ${product.price}
          </p>
          <Rating
            value={product.rating}
            text={`${product.numReviews} Reviews`}
          />
        </div>
      </a>
    </div>
  );
}

export default Product;
