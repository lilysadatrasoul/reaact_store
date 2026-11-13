import React from "react";
import ProductCard from "./ProductCard";

// Reuse the same storefront card design without introducing new cart behavior.
function SuggestedGoods({ id, title, price, image }) {
  return <ProductCard id={id} title={title} price={price} image={image} />;
}

export default SuggestedGoods;
