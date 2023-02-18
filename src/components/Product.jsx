import React from "react";

function Product({ product }) {
  return (
    <div
      className="m-3 w-1/5 rounded-3xl  shadow-xl
    "
    >
      <a href={`/product/${product._id}`} />
      <img
        src={product.image}
        alt={product.name}
        className=" rounded-3xl mb-2"
      />
      <div className="mx-3 mb-4 leading-10">
        <h1 className="text-xl font-semibold">{product.name}</h1>
        <p>
          {product.rating} Stars ({product.numReviews} Reviews)
        </p>
        <p className="text-orange-600 font-bold text-xl">${product.price}</p>
      </div>
    </div>
  );
}

export default Product;
