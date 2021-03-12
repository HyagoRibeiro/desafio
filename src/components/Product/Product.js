import React, { useState, useEffect } from "react";
import { ProductImage, ContainerProduct } from "./style";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Product({ product, currency, photo }) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.data);

  const treatedData = {
    brand: product.brand ?? "-",
    hasStock: product.hasStock ?? "-",
    name: product.name ?? "-",
    price: product.price ?? "-",
  };

  const addToCart = (item) => {
    dispatch({ type: "ADD_PRODUCT", item });
    localStorage.setItem("productsList", JSON.stringify([...products, item]));
  };

  return (
    <div>
      <ContainerProduct>
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
      </ContainerProduct>
    </div>
  );
}

export default Product;
