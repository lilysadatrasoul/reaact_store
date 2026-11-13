import { useEffect, useState } from "react";

const initialState = {
  items: [],
  isLoading: true,
  error: null,
};

export default function useProductCollection(url) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const controller = new AbortController();

    setState({ items: [], isLoading: true, error: null });

    async function loadProducts() {
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Products request failed: ${response.status}`);
        }

        const items = await response.json();

        if (!Array.isArray(items)) {
          throw new Error("Products response must be an array");
        }

        if (!controller.signal.aborted) {
          setState({ items, isLoading: false, error: null });
        }
      } catch (error) {
        // Ignore cancellations caused by unmounting or changing the URL.
        if (!controller.signal.aborted) {
          setState({
            items: [],
            isLoading: false,
            error: "بارگذاری محصولات با مشکل مواجه شد. لطفاً دوباره تلاش کنید.",
          });
        }
      }
    }

    loadProducts();

    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
}
