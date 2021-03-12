import React, { useState, useEffect } from 'react';
import {
    ProductImage,
    ContainerProduct} from './style';

function Product({product, currency, photo}) {

    const treatedData = {
        brand: product.brand ?? '-',
        hasStock: product.hasStock ?? '-',
        name: product.name ?? '-',
        price: product.price ?? '-'
    }

  return (
    <div>
        <ContainerProduct>
            {console.log(treatedData.hasStock)}
            <ProductImage src={photo} />
            <p>{treatedData.brand}</p>
            <p>{treatedData.hasStock}</p>
            <p>{treatedData.name}</p>
            <p>{currency} {treatedData.price}</p>
            <button>Comprar</button>
        </ContainerProduct>
    </div>
  );
}

export default Product;
