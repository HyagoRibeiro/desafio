import React, { useState, useEffect } from "react";
import { ProductImage, ContainerProduct } from "./style";
import { useDispatch } from "react-redux";

function ProductCart({ product, currency }) {
  const dispatch = useDispatch();

  const treatedData = {
    brand: product.brand ?? "-",
    name: product.name ?? "-",
    price: product.price ?? "-",
  };

  const removeToCart = (item) => {
    dispatch({ type: "REMOVE_PRODUCT", item });
  };

  return (
    <div>
      <p>{treatedData.name}</p>
      <p>{treatedData.brand}</p>
      <p>
        {currency} {treatedData.price}
      </p>
      <button type="button" onClick={() => removeToCart(product)}>
        Remover
      </button>
    </div>
  );
}

export default ProductCart;
