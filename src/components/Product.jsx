import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div
      className="m-3 xl:w-[23%] sm:w-2/5 rounded-3xl  shadow-xl
    "
    >
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className=" rounded-3xl mb-2"
        />
      </Link>
      <div className="mx-3 mb-4 leading-10">
        <Link to={`/product/${product._id}`}>
          <h1 className="text-xl font-semibold h-16">{product.name}</h1>
        </Link>
        <p className="text-orange-600 font-bold text-xl mb-2">
          ${product.price}
        </p>
        <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
        <h1>fkjhkfhksdh</h1>
      </div>
    </div>
  );
}

export default Product;
