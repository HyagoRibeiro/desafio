import React, { useState, useEffect, useMemo } from "react";
import Product from "./components/Product/Product.js";
import Cart from "./components/Cart/Cart.js";
import { Provider } from "react-redux";

import store from "./store/index";

import { Container, ContainerData } from "./style";

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [filter, setFilter] = useState("allProducts");
  const [filterCheckBox, setFilterCheckBox] = useState({});

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

  const handleInputChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    console.log("target", target);

    setFilterCheckBox({
      [name]: value,
    });
  };

  useEffect(() => {
    fetch("https://www.trinto.com.br/testes/frontendjr/index.php")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(false);
          setData(result);
        },
        (error) => {
          setLoading(false);
          setError(error);
        }
      );
  }, []);

  return (
    <Provider store={store}>
      <Container>
        <label>
          <input
            name="allValue"
            type="checkbox"
            checked={filterCheckBox.allValue}
            onChange={handleInputChange}
          />
          Todos valores
        </label>
        <label>
          <input
            name="toFifty"
            type="checkbox"
            checked={filterCheckBox.toFifty}
            onChange={handleInputChange}
          />
          Até 50,00
        </label>
        <label>
          <input
            name="fromHundred"
            type="checkbox"
            checked={filterCheckBox.fromHundred}
            onChange={handleInputChange}
          />
          A partir de 100,00
        </label>
        <select
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
        >
          <option value="allProducts">Todos os produtos</option>
          <option value="hasStock">Produtos em estoque</option>
        </select>
        <ContainerData>
          {console.log(
            data,
            typeof data,
            "FILTER",
            filter,
            "items filtrados",
            filterItems,
            "CHECK",
            filterCheckBox
          )}
          {<Cart />}
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
      </Container>
    </Provider>
  );
}

export default App;
