import React from "react";
import logo from "../assets/images/logo.png";

function Header({ qt, isLoggedIn, onToggleLogin, query, onQueryChange }) {
  return (
    <header className="shop-header">
      <div className="shop-container shop-header__inner">
        <a className="shop-brand" href="#top" aria-label="بازگشت به بالای فروشگاه">
          <img src={logo} alt="لوگوی فروشگاه" className="shop-brand__logo" />
          <span className="shop-brand__text">
            <strong>فروشگاه آنلاین</strong>
            <small>ویترین آزمایشی</small>
          </span>
        </a>

        <form
          className="shop-search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="visually-hidden" htmlFor="shop-search-input">
            جست‌وجوی کالا
          </label>
          <input
            id="shop-search-input"
            className="shop-search__input"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="نام کالای مورد نظرت را جست‌وجو کن..."
            autoComplete="off"
          />
          <button className="shop-search__button" type="submit" aria-label="جست‌وجو">
            <i className="bi bi-search" aria-hidden="true" />
            <span>جست‌وجو</span>
          </button>
        </form>

        <div className="shop-header__actions">
          <div className="shop-cart" role="status" aria-label={`سبد خرید: ${qt} کالا`}>
            <i className="bi bi-bag" aria-hidden="true" />
            <span className="shop-cart__count">{qt.toLocaleString("fa-IR")}</span>
          </div>
          <button className="shop-login" type="button" onClick={onToggleLogin}>
            <i className="bi bi-person-circle" aria-hidden="true" />
            {isLoggedIn ? "خروج" : "ورود"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
