import React, { useState, useEffect, useMemo } from "react";
import Product from "./components/Product/Product.js";

import { Container, ContainerData } from "./style";

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [filter, setFilter] = useState("allProducts");
  const [itemsFilter, setItemsFilter] = useState(data.products);

  const filterItems = useMemo(() => {
    let newArrayItems = data?.products;
    console.log("dentro da função", newArrayItems);
    if (filter === "hasStock") {
      return (newArrayItems = newArrayItems?.filter(
        (element) => element.hasStock
      ));
    }
    return newArrayItems;
  }, [filter, data]);

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
    <Container>
      <select value={filter} onChange={({ target }) => setFilter(target.value)}>
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
          filterItems
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
    </Container>
  );
}

export default App;
