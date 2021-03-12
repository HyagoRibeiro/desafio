import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const data = useSelector((state) => state.data);
  return (
    <div>
      sdsad
      {console.log("DATA", data)}
    </div>
  );
}

export default Cart;
