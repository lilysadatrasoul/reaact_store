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

function filterProducts(items, query) {
  const search = query.trim().toLocaleLowerCase();
  if (!search) return items;

  return items.filter((item) =>
    String(item.title || "").toLocaleLowerCase().includes(search)
  );
}

function CollectionStatus({ collection, items, query }) {
  if (collection.isLoading) {
    return <p role="status" className="shop-status">در حال بارگذاری محصولات...</p>;
  }

  if (collection.error) {
    return <p role="alert" className="shop-status shop-status--error">{collection.error}</p>;
  }

  if (collection.items.length === 0) {
    return <p role="status" className="shop-status">محصولی برای نمایش یافت نشد.</p>;
  }

  if (items.length === 0 && query.trim()) {
    return <p role="status" className="shop-status">محصولی مطابق جست‌وجوی شما پیدا نشد.</p>;
  }

  return null;
}

function ProductSection({
  id,
  title,
  description,
  collection,
  items,
  CardComponent,
  onAddToCart,
  isLoggedIn,
  query,
}) {
  return (
    <section id={id} className="shop-section shop-container" aria-labelledby={`${id}-heading`}>
      <div className="shop-section__header">
        <div>
          <h2 id={`${id}-heading`} className="shop-section__title">{title}</h2>
          <p className="shop-section__description">{description}</p>
        </div>
        {!collection.isLoading && !collection.error && (
          <span className="shop-section__count">{items.length.toLocaleString("fa-IR")} کالا</span>
        )}
      </div>
      <div className="shop-grid">
        <CollectionStatus collection={collection} items={items} query={query} />
        {items.map((item) => (
          <CardComponent
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            setQuantityT={onAddToCart}
            IsLogin={isLoggedIn}
            showActions={Boolean(onAddToCart)}
          />
        ))}
      </div>
    </section>
  );
}

function App() {
  const products = useProductCollection(PRODUCTS_URL);
  const jewelry = useProductCollection(BESTSELLING_URL);
  const suggested = useProductCollection(SUGGESTED_URL);

  const [quantityTotal, setQuantityTotal] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const addToQuantityTotal = () => {
    setQuantityTotal((current) => current + 1);
  };

  const toggleLogin = () => {
    setIsLogin((current) => !current);
  };

  return (
    <div className="App" id="top" dir="rtl">
      <Header
        qt={quantityTotal}
        isLoggedIn={isLogin}
        onToggleLogin={toggleLogin}
        query={searchQuery}
        onQueryChange={setSearchQuery}
      />
      <Nav />

      <main>
        <Slider />
        <ProductSection
          id="products"
          title="محصولات"
          description="نگاهی به کالاهای موجود در ویترین فروشگاه"
          collection={products}
          items={filterProducts(products.items, searchQuery)}
          CardComponent={ProductCard}
          onAddToCart={addToQuantityTotal}
          isLoggedIn={isLogin}
          query={searchQuery}
        />
        <ProductSection
          id="bestsellers"
          title="پرفروش‌ترین‌ها"
          description="نمایش آزمایشی محصولات دستهٔ زیورآلات"
          collection={jewelry}
          items={filterProducts(jewelry.items, searchQuery)}
          CardComponent={Bestselling}
          query={searchQuery}
        />
        <ProductSection
          id="suggested"
          title="کالاهای پیشنهادی"
          description="محصولاتی دیگر برای مرور و آشنایی"
          collection={suggested}
          items={filterProducts(suggested.items, searchQuery)}
          CardComponent={SuggestedGoods}
          query={searchQuery}
        />
      </main>

      <footer className="shop-footer">
        <div className="shop-container">
          <p>فروشگاه نمونه — پروژهٔ آموزشی React</p>
          <small>اطلاعات محصولات آزمایشی است و امکان خرید یا پرداخت واقعی وجود ندارد.</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
