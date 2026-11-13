# Proposed Next Steps — نقشهٔ راه پیشنهادی

> این‌ها **پیشنهاد** هستند و اجرای آن‌ها در زمان ایجاد مستندات انجام نشده است.

## مرحلهٔ 0 — پایداری پروژه (اولویت فوری)

- [ ] انتقال هر سه API call از render به `useEffect` یا یک hook دادهٔ مشخص؛ کنترل rerender، unmount و خطا.
- [ ] افزودن `key={item.id}` به سه لیست محصولات.
- [ ] جایگزینی همهٔ `class`های JSX با `className`.
- [ ] بررسی نتیجهٔ `npm ci`، `npm run build` و smoke test واقعی مرورگر.
- [ ] مستندسازی خطاهای واقعی runtime به‌جای حدس.

## مرحلهٔ 1 — بهبود تجربهٔ فروشگاه

- [ ] تعریف هدف طراحی و هویت بصری (نوع فروشگاه، رنگ‌ها، فونت، سطح شباهت به فروشگاه واقعی).
- [ ] بازطراحی Header: لوگوی متناسب، جست‌وجوی کنترل‌شده، سبد خرید و mobile layout.
- [ ] اصلاح منوی `Nav` و حذف محتوای Bootstrap placeholder.
- [ ] اسلایدر responsive با نسبت تصویر مناسب و controls قابل استفاده.
- [ ] ایجاد ProductCard مشترک با layout، title truncation، image fitting، price و actions یک‌دست.
- [ ] چیدمان شبکه‌ای محصولات و بررسی breakpointهای موبایل/تبلت/دسکتاپ.
- [ ] اصلاح `<html lang="fa" dir="rtl">`، عنوان صفحه و metadata.

## مرحلهٔ 2 — رفتارهای فروشگاهی (پس از مشخص شدن Scope)

- [ ] تعریف state سبد خرید به صورت item/quantity، نه فقط عدد؛ تصمیم دربارهٔ persistence.
- [ ] تعریف رفتار علاقه‌مندی‌ها و سیاست login؛ مشخص کردن mock یا auth واقعی.
- [ ] جست‌وجو/فیلتر کاربردی با UX برای نتایج خالی.
- [ ] تعیین اینکه «پرفروش‌ترین‌ها» و «پیشنهادی‌ها» از چه داده‌ای تغذیه می‌شوند.
- [ ] وضعیت loading/error/retry برای همهٔ APIها؛ رفع hard-coded assumptions.
- [ ] در صورت نیاز routing، صفحهٔ جزئیات کالا و checkout؛ این قابلیت‌ها هنوز در scope تأییدشده نیستند.

## مرحلهٔ 3 — کیفیت و نگهداری

- [ ] تست component/state برای Header، ProductCard و data fetching.
- [ ] بررسی a11y: keyboard navigation، contrast، alt و labels.
- [ ] audit وابستگی‌ها و برنامهٔ ارتقا با سنجش ریسک سازگاری.
- [ ] جایگزینی README عمومی CRA با مستندات واقعی و تصاویر پس از تأیید UI.

## وضعیت

- **Inspection:** انجام‌شده (static source review).
- **Documentation:** ایجاد پوشهٔ `.codex` در این تغییر.
- **Implementation / tests / visual approval:** انجام‌نشده.
- **Next recommended action:** مرحلهٔ 0، شروع با رفع fetch در render.
