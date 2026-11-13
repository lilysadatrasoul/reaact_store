import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

const originalFetch = global.fetch;
const exampleProduct = {
  id: 1,
  title: "کالای آزمایشی",
  price: 42,
  image: "https://example.com/product.jpg",
};

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [exampleProduct],
  });
});

afterEach(() => {
  global.fetch = originalFetch;
});

test("fetches each collection once, even after a state change", async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getAllByText("کالای آزمایشی")).toHaveLength(3);
  });
  expect(global.fetch).toHaveBeenCalledTimes(3);
  expect(global.fetch.mock.calls.map(([url]) => url)).toEqual([
    "https://fakestoreapi.com/products?limit=4",
    "https://fakestoreapi.com/products/category/jewelery",
    "https://fakestoreapi.com/products?limit=8",
  ]);

  fireEvent.click(screen.getByRole("button", { name: "ورود" }));
  fireEvent.click(screen.getByRole("button", { name: "به سبد خرید اضافه کنید" }));

  expect(global.fetch).toHaveBeenCalledTimes(3);
});

test("keeps the other sections usable if one request fails", async () => {
  global.fetch.mockImplementation(async (url) => {
    if (url.includes("/category/jewelery")) {
      return { ok: false, status: 503 };
    }

    return { ok: true, json: async () => [exampleProduct] };
  });

  render(<App />);

  expect(await screen.findByRole("alert")).toHaveTextContent(
    "بارگذاری محصولات با مشکل مواجه شد"
  );
  await waitFor(() => {
    expect(screen.getAllByText("کالای آزمایشی")).toHaveLength(2);
  });
  expect(global.fetch).toHaveBeenCalledTimes(3);
});

test("aborts in-flight requests when the app unmounts", () => {
  global.fetch.mockImplementation(() => new Promise(() => {}));

  const { unmount } = render(<App />);
  expect(global.fetch).toHaveBeenCalledTimes(3);

  const signals = global.fetch.mock.calls.map(([, options]) => options.signal);
  expect(signals.every((signal) => signal.aborted === false)).toBe(true);

  unmount();

  expect(signals.every((signal) => signal.aborted === true)).toBe(true);
});
