import React from "react";
import { ContainerProduct } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";

function Product({ product, currency, photo }) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.data);

  const addToCart = (item) => {
    dispatch({ type: "ADD_PRODUCT", item });
    localStorage.setItem("productsList", JSON.stringify([...products, item]));
  };

  return (
    <div>
      <ContainerProduct>
        <Card>
          <Card.Img style={{ height: "auto" }} src={photo} />
          <Card.Body>
            <Card.Title>{product.name ?? "-"}</Card.Title>
            <Card.Text>{product.brand ?? "-"}</Card.Text>
            <Card.Text>
              {currency} {product.price ?? "-"}
            </Card.Text>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Comprar
            </Button>
          </Card.Body>
        </Card>
      </ContainerProduct>
    </div>
  );
}

export default Product;
