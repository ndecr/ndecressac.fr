import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { getStoredCookieConsent, saveCookieConsent } from "../services";
import type { CookieConsentStatus } from "../types";
import { CookieConsentContext } from "./cookie-consent.context";

export function CookieConsentProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<CookieConsentStatus>("undecided");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const storedStatus = getStoredCookieConsent();

    setStatus(storedStatus);
    setIsDialogOpen(storedStatus === "undecided");
  }, []);

  const saveStatus = useCallback((nextStatus: Exclude<CookieConsentStatus, "undecided">) => {
    saveCookieConsent(nextStatus);
    setStatus(nextStatus);
    setIsDialogOpen(false);
  }, []);

  const value = useMemo(() => ({
    status,
    isDialogOpen,
    acceptAnalytics: () => { saveStatus("accepted"); },
    rejectAnalytics: () => { saveStatus("rejected"); },
    openPreferences: () => { setIsDialogOpen(true); },
    closePreferences: () => { setIsDialogOpen(false); }
  }), [isDialogOpen, saveStatus, status]);

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}
