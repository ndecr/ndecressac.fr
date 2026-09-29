import type { CookieConsentStatus } from "../types";

const cookieConsentStorageKey = "ndecressac-cookie-consent";

export function getStoredCookieConsent(): CookieConsentStatus {
  if (typeof window === "undefined") {
    return "undecided";
  }

  const storedStatus = window.localStorage.getItem(cookieConsentStorageKey);

  return storedStatus === "accepted" || storedStatus === "rejected" ? storedStatus : "undecided";
}

export function saveCookieConsent(status: Exclude<CookieConsentStatus, "undecided">): void {
  window.localStorage.setItem(cookieConsentStorageKey, status);
}
