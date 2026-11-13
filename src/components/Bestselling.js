import React from "react";
import ProductCard from "./ProductCard";

// Presentational card: only the primary Products section has cart actions for now.
function Bestselling({ id, title, price, image }) {
  return <ProductCard id={id} title={title} price={price} image={image} />;
}

export default Bestselling;
