import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import ProductCard from "./components/ProductCard";
import Bestselling from "./components/Bestselling";
import SuggestedGoods from "./components/SuggestedGoods";
import useProductCollection from "./hooks/useProductCollection";

const PRODUCTS_URL = "https://fakestoreapi.com/products?limit=4";
const BESTSELLING_URL = "https://fakestoreapi.com/products/category/jewelery";
const SUGGESTED_URL = "https://fakestoreapi.com/products?limit=8";

function CollectionStatus({ collection }) {
  if (collection.isLoading) {
    return <p role="status" className="mx-5">در حال بارگذاری محصولات...</p>;
  }

  if (collection.error) {
    return <p role="alert" className="mx-5 text-danger">{collection.error}</p>;
  }

  if (collection.items.length === 0) {
    return <p role="status" className="mx-5">محصولی برای نمایش یافت نشد.</p>;
  }

  return null;
}

function App() {
  const products = useProductCollection(PRODUCTS_URL);
  const jewelry = useProductCollection(BESTSELLING_URL);
  const suggested = useProductCollection(SUGGESTED_URL);

  const [quantityTotal, setQuantityTotal] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  const addToQuantityTotal = () => {
    setQuantityTotal((current) => current + 1);
  };

  const toggleLogin = () => {
    setIsLogin((current) => !current);
  };

  return (
    <div className="App" dir="rtl">
      <Header qt={quantityTotal} setL={toggleLogin} />
      <nav className="dropdown-navbar">
        <Nav />
      </nav>
      <Slider />

      <div className="product mt-5 mb-5">محصولات</div>
      <div className="d-flex flex-wrap mb-5">
        <CollectionStatus collection={products} />
        {products.items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            setQuantityT={addToQuantityTotal}
            IsLogin={isLogin}
          />
        ))}
      </div>

      <div className="product mt-5">پرفروش ترین ها</div>
      <div className="d-flex flex-wrap">
        <CollectionStatus collection={jewelry} />
        {jewelry.items.map((item) => (
          <Bestselling
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>

      <div className="product mt-5">کالاهای پیشنهادی</div>
      <div className="d-flex flex-wrap">
        <CollectionStatus collection={suggested} />
        {suggested.items.map((item) => (
          <SuggestedGoods
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
