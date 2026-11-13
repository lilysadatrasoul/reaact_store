# Project Context — وضعیت فعلی بر اساس کد

## هویت پروژه

- نام مخزن: `lilysadatrasoul/reaact_store` (املای نام مخزن عمداً همان مقدار واقعی است).
- نام پکیج در `package.json`: `my-app`، نسخه `0.1.0`، `private: true`.
- نوع محصول: نمونهٔ اولیهٔ یک صفحهٔ فروشگاه اینترنتی فارسی با جهت RTL؛ **فروشگاه کامل یا آمادهٔ تولید نیست**.
- مبنای بررسی: `main@2e426395da2316b29905f4fa37d4dea32393ad24`.
- آخرین commit مبنا: `fix heart toggler`، تاریخ 2022-03-09.

## فناوری‌های تأییدشده از package.json

- JavaScript و JSX، React `^17.0.2`، React DOM `^17.0.2`.
- Create React App / `react-scripts 5.0.0`.
- `bootstrap ^5.1.3`، `bootstrap-icons ^1.8.1`، `react-bootstrap ^2.2.0` (وجود dependency لزوماً به معنی استفادهٔ فعال از کامپوننت‌های react-bootstrap نیست).
- `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `web-vitals` در dependencyها.
- CSS عادی؛ TypeScript، React Router، Redux، Tailwind یا backend اختصاصی در فایل‌های بررسی‌شده وجود ندارند.

## ساختار اصلی

```text
public/
  index.html                 # template HTML, lang=en, title=React App
src/
  index.js                   # ReactDOM.render(<App />)
  App.js                     # state, API calls, sections
  App.css                    # .navbar, .logo, .product
  components/
    Header.js                # logo, search form, cart count, simulated login
    Nav.js                   # Bootstrap collapse/navigation placeholder
    Slider.js                # carousel with 3 local slides
    ProductCard.js           # product + local quantity + favorite toggle
    Bestselling.js           # simplified product display
    SuggestedGoods.js        # simplified product display
  assets/images/
    logo.png
    slide1.jpg, slide2.jpg, slide3.jpg
    product1.jpg ... product4.jpg
package.json
package-lock.json
README.md                      # unchanged CRA boilerplate at base revision
```

## جریان داده‌ها و رفتار فعلی

- `App.js` سه مجموعه داده را با `fetch` از Fake Store API دریافت می‌کند:
  - `https://fakestoreapi.com/products?limit=4 ` برای «محصولات» (رشته در کد یک فاصلهٔ انتهایی دارد).
  - `https://fakestoreapi.com/products/category/jewelery` برای «پرفروش‌ترین‌ها»؛ **عنوان پرفروش‌ترین واقعی نیست**، داده صرفاً دستهٔ jewelry است.
  - `https://fakestoreapi.com/products?limit=8` برای «کالاهای پیشنهادی»؛ **پیشنهاد شخصی‌سازی‌شده واقعی نیست**.
- هر سه `fetch` مستقیماً در بدنهٔ `App` قرار گرفته‌اند، نه `useEffect`؛ این نقص اولویت صفر است.
- stateهای App: `products`، `jewelry`، `suggested`، `quantityTotal`، `IsLogin`.
- `Header` شمارندهٔ کل (`qt`) و تابع toggle ورود (`setL`) را دریافت می‌کند.
- ورود/خروج تنها یک toggle محلی است؛ اعتبارسنجی، نشست و هویت کاربر وجود ندارد.
- `ProductCard` شمارندهٔ محلی `number`، افزودن به شمارندهٔ global و favorite state محلی دارد؛ نمایش قلب به `IsLogin` وابسته است.
- دکمهٔ افزودن فقط در `ProductCard`، یعنی مجموعهٔ اول وجود دارد؛ `Bestselling` و `SuggestedGoods` ویترین هستند.
- هیچ cart detail، checkout، product detail، routing، persistent cart، search results یا backend خرید در کد بررسی‌شده دیده نشد.
- صفحه در `App` با `dir="rtl"` رندر می‌شود. عنوان محصولات فارسی است اما titleهای API بدون ترجمه استفاده می‌شوند.

## اجرای محلی (اسکریپت‌های تعریف‌شده، نه تست‌شده)

```sh
npm ci
npm start
npm run build
CI=true npm test -- --watch=false
```

`npm start` در CRA معمولاً سرور توسعه را روی localhost:3000 اجرا می‌کند. اسکریپت `eject` نیز موجود است ولی **نباید** بدون درخواست مشخص اجرا شود.

## موارد نامعلوم

- هدف نهایی طراحی، هویت برند، طیف رنگ مورد نظر، صفحات مدنظر و ملاک پذیرش از مالک هنوز در کد مشخص نشده است.
- خروجی اجرای پروژه، وضعیت واقعی درخواست‌های شبکه، رفتار دقیق نسخهٔ نصب‌شده و سازگاری محیط جدید بررسی اجرایی نشده‌اند.
- وابستگی‌های قدیمی نیازمند ارزیابی سازگاری/امنیتی مستقل هستند؛ بدون audit یا تست، نتیجه‌گیری قطعی نکن.
