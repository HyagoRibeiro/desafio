import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import ProductCart from "../ProductCart/ProductCart.js";

import { Button } from "react-bootstrap";

import { ContainerCart, HeaderCart, TitleCart, ProductsGroup } from "./style";

function Cart({ closeCart, currency }) {
  const products = useSelector((state) => state.data);

  const totalPrice = useMemo(() => {
    let price = 0;
    products.map((product) => (price += product?.price));
    return price;
  }, [products]);

  return (
    <ContainerCart>
      <HeaderCart>
        <div>
          <TitleCart>Carrinho</TitleCart>
        </div>
        <Button variant="secondary" onClick={closeCart}>
          Close
        </Button>
      </HeaderCart>
      <p>
        <strong>Valor total: </strong> {currency} {totalPrice}
      </p>
      <ProductsGroup>
        {products.map((product, index) => {
          return (
            <ProductCart
              key={index}
              index={index}
              product={product}
              currency={currency}
            />
          );
        })}
      </ProductsGroup>
    </ContainerCart>
  );
}

export default Cart;
