import React, { useState, useEffect } from "react";
import { ProductImage, ContainerProduct } from "./style";
import { useDispatch } from "react-redux";

function Product({ product, currency, photo }) {
  const dispatch = useDispatch();

  const treatedData = {
    brand: product.brand ?? "-",
    hasStock: product.hasStock ?? "-",
    name: product.name ?? "-",
    price: product.price ?? "-",
  };

  const addToCart = (item) => {
    dispatch({ type: "ADD_PRODUCT", item });
  };

  const removeToCart = (item) => {
    dispatch({ type: "REMOVE_PRODUCT", item });
  };

  return (
    <div>
      <ContainerProduct>
        {console.log(treatedData.hasStock)}
        <ProductImage src={photo} />
        <p>{treatedData.name}</p>
        <p>{treatedData.brand}</p>
        <p>{treatedData.hasStock}</p>
        <p>
          {currency} {treatedData.price}
        </p>
        <button type="button" onClick={() => addToCart(product)}>
          Comprar
        </button>
        <button type="button" onClick={() => removeToCart(product)}>
          Remover
        </button>
      </ContainerProduct>
    </div>
  );
}

export default Product;
