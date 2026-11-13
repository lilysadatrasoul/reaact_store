import { useState } from "react";

function ProductCard({ id, title, price, image, setQuantityT, IsLogin }) {
  const [number, setNumber] = useState(0);
  const [fav, setFav] = useState(false);

  const addToCart = () => {
    setNumber((current) => current + 1);
    setQuantityT();
  };

  return (
    <div>
      <div className="card ms-5 me-5 border border-0" style={{ width: "17rem", height: "40rem" }}>
        <img
          src={image}
          className="card-img-top w-100 ms-5 me-5 mt-5"
          style={{ height: "17rem" }}
          alt="..."
        />
        <div className="card-body ms-5 me-5" style={{ height: "10rem" }}>
          <div className="title">{title}</div>
          <div className="price">{price}</div>
          <div className="id">{id}</div>
        </div>
        <div id="number" className="fs-3 ms-5 me-5">{number}</div>
        {IsLogin && (
          <button
            type="button"
            className="border-0 bg-transparent p-0"
            aria-label={fav ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
            aria-pressed={fav}
            onClick={() => setFav((current) => !current)}
          >
            <i className={`bi bi-heart-fill fs-4 ${fav ? "text-danger" : ""}`} aria-hidden="true" />
          </button>
        )}
        <div>
          <button
            type="button"
            id="add-basket"
            className="btn btn-primary rounded-pill ms-5 me-5"
            onClick={addToCart}
          >
            به سبد خرید اضافه کنید
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
