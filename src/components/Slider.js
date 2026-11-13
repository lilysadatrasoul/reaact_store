import React from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

const slides = [
  {
    image: slide1,
    title: "خرید آسان از یک ویترین ساده",
    description: "محصولات متنوع را در یک نگاه ببین و انتخاب کن.",
  },
  {
    image: slide2,
    title: "انتخاب‌های تازه در هر نگاه",
    description: "به بخش محصولات سر بزن و کالاهای مختلف را مرور کن.",
  },
  {
    image: slide3,
    title: "دنیایی از کالاها برای کشف",
    description: "این فروشگاه یک نمونهٔ نمایشی برای تمرین React است.",
  },
];

function Slider() {
  return (
    <section className="shop-hero shop-container" aria-label="ویترین تصویری فروشگاه">
      <h1 className="visually-hidden">فروشگاه آنلاین نمونه</h1>
      <div id="shopHeroCarousel" className="carousel slide">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`carousel-item${index === 0 ? " active" : ""}`}
            >
              <div className="shop-hero__slide">
                <img src={slide.image} className="shop-hero__image" alt="" />
                <div className="shop-hero__overlay">
                  <p className="shop-hero__eyebrow">فروشگاه نمونه</p>
                  <h2 className="shop-hero__title">{slide.title}</h2>
                  <p className="shop-hero__description">{slide.description}</p>
                  <a className="shop-hero__link" href="#products">مشاهدهٔ محصولات</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev shop-hero__control"
          type="button"
          data-bs-target="#shopHeroCarousel"
          data-bs-slide="prev"
          aria-label="اسلاید قبلی"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>
        <button
          className="carousel-control-next shop-hero__control"
          type="button"
          data-bs-target="#shopHeroCarousel"
          data-bs-slide="next"
          aria-label="اسلاید بعدی"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

export default Slider;
