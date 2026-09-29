import { useContext } from "react";
import { CookieConsentContext } from "../context/cookie-consent.context";
import type { CookieConsentValue } from "../types";

export function useCookieConsent(): CookieConsentValue {
  const value = useContext(CookieConsentContext);

  if (value === null) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }

  return value;
}
