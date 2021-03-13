import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

import { ContainerProductCart, TextProduct } from "./style";

function ProductCart({ product, currency, index }) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.data);

  const removeFromCart = () => {
    const newListProducts = [...products.filter((_, idx) => idx !== index)];
    dispatch({ type: "SET_CURRENT_CART", products: newListProducts });
    localStorage.setItem("productsList", JSON.stringify(newListProducts));
  };

  return (
    <ContainerProductCart>
      <div>
        <TextProduct>
          <strong>Produto:</strong> {product.name ?? "-"}
        </TextProduct>
        <TextProduct>
          <strong>Marca:</strong> {product.brand ?? "-"}
        </TextProduct>
        <TextProduct>
          <strong>Valor:</strong> {currency} {product.price ?? "-"}
        </TextProduct>
      </div>
      <div>
        <Button variant="danger" onClick={() => removeFromCart()}>
          Remover
        </Button>
      </div>
    </ContainerProductCart>
  );
}

export default ProductCart;
