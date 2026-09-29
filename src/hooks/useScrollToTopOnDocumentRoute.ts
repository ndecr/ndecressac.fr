import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const documentRoutes = new Set(["/mentions-legales/", "/cv/"]);
const useDocumentRouteEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function useScrollToTopOnDocumentRoute() {
  const { pathname } = useLocation();

  useDocumentRouteEffect(() => {
    if (!documentRoutes.has(pathname)) {
      return;
    }

    const scrollToTop = () => {
      const focusedElement = document.activeElement;

      if (focusedElement instanceof HTMLElement) {
        focusedElement.blur();
      }

      window.scrollTo({ behavior: "instant", left: 0, top: 0 });
    };

    scrollToTop();
    const animationFrameId = window.requestAnimationFrame(scrollToTop);
    const deferredScrollId = window.setTimeout(scrollToTop, 120);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.clearTimeout(deferredScrollId);
    };
  }, [pathname]);
}
