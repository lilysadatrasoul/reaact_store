import { useState } from "react";

const formatPrice = (value) =>
  new Intl.NumberFormat("fa-IR", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(Number(value) || 0);

function ProductCard({
  title,
  price,
  image,
  setQuantityT,
  IsLogin = false,
  showActions = false,
}) {
  const [quantity, setQuantity] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const addToCart = () => {
    setQuantity((current) => current + 1);
    if (setQuantityT) setQuantityT();
  };

  return (
    <article className="shop-card">
      <div className="shop-card__media">
        <img
          src={image}
          alt={`تصویر محصول ${title}`}
          className="shop-card__image"
          loading="lazy"
        />
        {showActions && IsLogin && (
          <button
            type="button"
            className="shop-card__favorite"
            aria-label={favorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
            aria-pressed={favorite}
            onClick={() => setFavorite((current) => !current)}
          >
            <i
              className={`bi ${favorite ? "bi-heart-fill" : "bi-heart"}`}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      <div className="shop-card__details">
        <h3 className="shop-card__title" title={title} dir="auto">{title}</h3>
        <p className="shop-card__price" dir="ltr">{formatPrice(price)}</p>

        {showActions && (
          <div className="shop-card__actions">
            <span className="shop-card__quantity" aria-live="polite">
              تعداد: {quantity.toLocaleString("fa-IR")}
            </span>
            <button
              type="button"
              className="shop-card__add"
              onClick={addToCart}
            >
              <i className="bi bi-bag-plus" aria-hidden="true" />
              به سبد خرید اضافه کنید
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
