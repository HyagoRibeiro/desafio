import React, { useState, useEffect, useMemo } from 'react';
import Product from './components/Product/Product.js';

import {
  Container, 
  ContainerData } from './style'

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://www.trinto.com.br/testes/frontendjr/index.php")
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(false);
          setData(result);
        },
        (error) => {
          setLoading(false);
          setError(error);
        }
      )
  }, [])

  return (
    <Container>
      <ContainerData>
        {console.log(data)}
      </ContainerData>
    </Container>
  );
}

export default App;
