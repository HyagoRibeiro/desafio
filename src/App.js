import React, { useState, useEffect, useMemo } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";

import Product from "./components/Product/Product.js";
import { Navbar } from "react-bootstrap";
import Cart from "./components/Cart/Cart.js";
import Filter from "./components/Filters/Filters.js";
import { Basket2Fill } from "react-bootstrap-icons";

import {
  Container,
  ContainerData,
  ButtonCart,
  AlignContent,
  TitleNavBar,
} from "./style";

function App() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [filter, setFilter] = useState("allProducts");
  const [filterCheckBox, setFilterCheckBox] = useState({ allValue: true });
  const dispatch = useDispatch();

  const filterItems = useMemo(() => {
    let newArrayItems = data?.products;
    if (filter === "hasStock") {
      newArrayItems = newArrayItems?.filter((element) => element.hasStock);
    }

    if (filterCheckBox.allValue) {
      newArrayItems = newArrayItems?.filter((element) => element.price);
    }

    if (filterCheckBox.toFifty) {
      newArrayItems = newArrayItems?.filter((element) => element.price <= 50);
    }

    if (filterCheckBox.fromHundred) {
      newArrayItems = newArrayItems?.filter((element) => element.price >= 100);
    }

    return newArrayItems;
  }, [filter, data, filterCheckBox]);

  const handleCheckBoxChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFilterCheckBox({
      [name]: value,
    });
  };

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("productsList")) || [];
    dispatch({ type: "SET_CURRENT_CART", products });
  }, [dispatch]);

  useEffect(() => {
    fetch("https://www.trinto.com.br/testes/frontendjr/index.php")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(false);
          setData(result);
        },
        () => {
          setLoading(false);
        }
      );
  }, []);

  return (
    <Container>
      <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <TitleNavBar>Teste Trinto!</TitleNavBar>
        </Navbar.Brand>
      </Navbar>
      <AlignContent>
        <Filter
          filter={filter}
          setFilter={setFilter}
          handleCheckBoxChange={handleCheckBoxChange}
          filterCheckBox={filterCheckBox}
        />
        <ContainerData>
          <ButtonCart onClick={() => setOpen(!open)}>
            <Basket2Fill color="#fff" size={30} />
          </ButtonCart>
          {open && (
            <Cart currency={data.currency} closeCart={() => setOpen(!open)} />
          )}
          {!loading &&
            filterItems?.map((item) => {
              return (
                <Product
                  key={item.id}
                  product={item}
                  photo="https://picsum.photos/400"
                  currency={data.currency}
                />
              );
            })}
        </ContainerData>
      </AlignContent>
    </Container>
  );
}

export default App;
