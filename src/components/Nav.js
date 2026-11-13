import React from "react";

const links = [
  { href: "#products", label: "محصولات" },
  { href: "#bestsellers", label: "پرفروش‌ترین‌ها" },
  { href: "#suggested", label: "کالاهای پیشنهادی" },
];

function Nav() {
  return (
    <nav className="shop-nav" aria-label="دسترسی به بخش‌های فروشگاه">
      <div className="shop-container shop-nav__inner">
        <div className="shop-nav__links">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="shop-nav__link">
              {label}
            </a>
          ))}
        </div>
        <span className="shop-nav__note">نمونهٔ آموزشی فروشگاه</span>
      </div>
    </nav>
  );
}

export default Nav;
