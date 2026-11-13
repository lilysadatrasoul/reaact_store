# Frontend Audit — یافته‌ها و ریسک‌ها

**Scope:** بررسی ایستای فایل‌های GitHub روی `main@2e426395...` در 2026-11-13. موارد زیر تست اجرایی نشده‌اند.

| اولویت | موضوع | شاهد در کد | اثر / پیشنهاد |
|---|---|---|---|
| P0 | `fetch` در render | `src/App.js`، هر سه fetch در بدنهٔ App | `setState` در پاسخ باعث رندر مجدد و درخواست مجدد می‌شود؛ انتقال به `useEffect` و افزودن کنترل lifecycle / error |
| P1 | list key وجود ندارد | سه `.map(item => ...)` در `src/App.js` | به هر root component یک `key={item.id}` پایدار بده |
| P1 | به‌جای `className` از `class` استفاده شده | `Header.js`, `Nav.js`, `ProductCard.js` | هشدار JSX؛ به `className` تبدیل کن |
| P1 | search نمایشی است | `Header.js`، form بدون state یا submit handler | جست‌وجوی واقعی و جلوگیری از ارسال ناخواستهٔ form لازم است |
| P1 | سبد خرید فقط شمارنده است | `App.js`, `ProductCard.js` | سبد خرید آیتم/تعداد/قیمت ندارد؛ count فقط با افزودن کارت‌های بخش اول زیاد می‌شود |
| P1 | login نمایشی است | `Header.js`, `App.js` | از اصطلاح «ورود واقعی» استفاده نکن؛ صرفاً toggle client-side |
| P1 | بارگذاری/خطای API | `App.js`؛ فقط درخواست اول `.catch` دارد | وضعیت loading/error/empty و timeout/abort مناسب اضافه شود |
| P1 | چیدمان واکنش‌گرا محدود است | `App.css`، کارت‌های با عرض 17rem و ارتفاع ثابت، `Slider.js` با ارتفاع 600px | موبایل، تبلت، overflow و ابعاد تصاویر را در مرورگر تست و اصلاح کن |
| P1 | دسترس‌پذیری و معناشناسی | `alt="..."`، آیکن قلب با `onClick`، زبان HTML انگلیسی | label مناسب، button برای favorite، keyboard focus، alt معنادار، lang=fa |
| P2 | محتوای placeholder | `Nav.js` متن انگلیسی؛ `public/index.html` title React App | منوی واقعی و عنوان/metadata فارسی تعریف کن |
| P2 | نام‌گذاری بخش‌ها با داده ناسازگار | `jewelery` به‌عنوان bestseller و نخستین 8 محصول به‌عنوان suggested | یا منطق واقعی تعریف شود یا عنوان‌های درست برای دادهٔ mock انتخاب شود |
| P2 | تکرار ساختار کارت | `ProductCard.js`, `Bestselling.js`, `SuggestedGoods.js` | یک کامپوننت قابل استفادهٔ مجدد و variants مشخص طراحی کن |
| P2 | inline styling پراکنده | سه کارت و `Slider.js` | tokens و CSS components برای یک‌دستی و responsive rules |
| P2 | CSS selector عمومی | `App.css`، `.navbar` | با Bootstrap ممکن است تداخل کند؛ نام‌های scoped انتخاب کن |
| P2 | لینک assetهای قالب که در git tree نیستند | `public/index.html` به favicon.ico/logo192.png/manifest.json اشاره می‌کند؛ زیر `public` فقط index.html مشاهده شده | بررسی 404 در runtime و اصلاح منابع، بدون حدس دربارهٔ خروجی build |
| P2 | تست‌ها در فایل‌های repository دیده نشدند | tree مخزن فاقد فایل test / spec در revision مبنا | smoke test، component tests و accessibility checks اضافه شوند |
| P2 | README عمومی CRA است | `README.md` | راه‌اندازی واقعی، هدف پروژه، screenshots و معماری را مستند کن |

## چک‌لیست QA پیشنهادی (هنوز اجرا نشده)

- نصب تمیز `npm ci` و `npm run build` بدون خطای مؤثر.
- تب Network: هر endpoint یک بار برای mount اجرا شود، نه در loop.
- تب Console: هیچ warning مربوط به key/class، خطای رندر یا runtime error باقی نماند.
- نمایش صفحه در حدود 320، 375، 768، 1024 و 1440 پیکسل؛ بدون scroll افقی ناخواسته.
- کار با keyboard، Focus، متن جایگزین تصاویر، semantic buttons و RTL.
- رفتار API هنگام load، قطع اتصال، empty response و HTTP failure.
- افزودن چندبارهٔ محصول، تغییر کارت و هم‌خوانی شمارندهٔ کل با آیتم‌ها.
- بخش login/favorite دقیقاً به اندازهٔ قابلیت واقعی معرفی شود.

**توضیح:** P0/P1/P2 اولویت پیشنهادی برای برنامه‌ریزی است، نه نتیجهٔ تست‌های خودکار.
