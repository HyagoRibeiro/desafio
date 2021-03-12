import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import ProductCart from "../ProductCart/ProductCart.js";

import { ContainerCart } from "./style";

function Cart() {
  const products = useSelector((state) => state.data);

  const totalPrice = useMemo(() => {
    let price = 0;
    // prettier-ignore
    products.map((product) => (price += product.price));
    return price;
  }, [products]);
  return (
    <ContainerCart>
      <p>Carrinho</p>
      <p>{totalPrice}</p>
      {console.log("DATA", products)}
      {products.map((product) => {
        return <ProductCart product={product} />;
      })}
    </ContainerCart>
  );
}

export default Cart;
