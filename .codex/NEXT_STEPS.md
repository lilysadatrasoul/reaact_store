# Proposed Next Steps — نقشهٔ راه پیشنهادی

> این‌ها **پیشنهاد** هستند و اجرای آن‌ها در زمان ایجاد مستندات انجام نشده است.

## مرحلهٔ 0 — پایداری پروژه (اولویت فوری)

- [x] انتقال هر سه API call از render به hook مبتنی بر `useEffect`؛ کنترل rerender، unmount و خطا (پیاده‌سازی در شاخهٔ مرحلهٔ صفر).
- [x] افزودن `key={item.id}` به سه لیست محصولات.
- [x] جایگزینی همهٔ `class`های JSX با `className` در کامپوننت‌های موجود.
- [ ] تأیید نتیجهٔ CI برای `npm ci`، tests و build و سپس smoke test واقعی مرورگر (CI اضافه شد؛ PASS هنوز تأیید نشده).
- [ ] ثبت خروجی واقعی اجرا/خطاها در `.codex/PHASE_0_IMPLEMENTATION.md` پس از اجرای CI و smoke test.

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
- **Implementation:** اصلاحات مرحلهٔ صفر روی شاخهٔ مجزا انجام شده؛ **automated tests/CI/browser verification:** تا دریافت نتایج، تأییدنشده.
- **Next recommended action:** بررسی وضعیت CI و smoke test مرحلهٔ صفر؛ سپس مرحلهٔ 1.
