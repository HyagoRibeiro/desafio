import React from "react";

import { ContainerFilters, CheckBoxLabel } from "./style";

function Filters({ handleCheckBoxChange, filterCheckBox, setFilter, filter }) {
  return (
    <ContainerFilters>
      <select value={filter} onChange={({ target }) => setFilter(target.value)}>
        <option value="allProducts">Todos os produtos</option>
        <option value="hasStock">Produtos em estoque</option>
      </select>
      <CheckBoxLabel>
        <input
          name="allValue"
          type="checkbox"
          checked={!!filterCheckBox.allValue}
          onChange={handleCheckBoxChange}
        />
        Todos valores
      </CheckBoxLabel>
      <CheckBoxLabel>
        <input
          name="toFifty"
          type="checkbox"
          checked={!!filterCheckBox.toFifty}
          onChange={handleCheckBoxChange}
        />
        Até 50,00
      </CheckBoxLabel>
      <CheckBoxLabel>
        <input
          name="fromHundred"
          type="checkbox"
          checked={!!filterCheckBox.fromHundred}
          onChange={handleCheckBoxChange}
        />
        A partir de 100,00
      </CheckBoxLabel>
    </ContainerFilters>
  );
}

export default Filters;
