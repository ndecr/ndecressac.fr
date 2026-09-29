import { useEffect, useState } from "react";
import type { PortfolioContent } from "../../../types";
import { useCookieConsent } from "../../../hooks";
import "./CookieConsent.scss";

interface CookieConsentProps {
  readonly content: PortfolioContent["cookieConsent"];
}

export function CookieConsent({ content }: CookieConsentProps) {
  const consent = useCookieConsent();
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);
  const [isAnalyticsAllowed, setIsAnalyticsAllowed] = useState(true);

  useEffect(() => {
    if (!consent.isDialogOpen) {
      return;
    }

    setIsAnalyticsAllowed(consent.status !== "rejected");
    setIsCustomizationOpen(false);
  }, [consent.isDialogOpen, consent.status]);

  if (!consent.isDialogOpen) {
    return null;
  }

  const saveChoice = (acceptAnalytics: boolean) => {
    if (acceptAnalytics) {
      consent.acceptAnalytics();
      return;
    }

    consent.rejectAnalytics();
  };

  return (
    <aside aria-labelledby="cookie-consent-title" aria-modal="true" className="cookie-consent" role="dialog">
      <div className="cookie-consent__panel">
        <p className="cookie-consent__brand">ND<span className="cookie-consent__brand-dot">.</span></p>
        <h2 className="cookie-consent__title" id="cookie-consent-title">{content.title}</h2>
        <p className="cookie-consent__description">{content.description}</p>
        {isCustomizationOpen ? (
          <div className="cookie-consent__preferences">
            <div className="cookie-consent__preference">
              <div>
                <p className="cookie-consent__preference-title">{content.requiredLabel}</p>
                <p className="cookie-consent__preference-description">{content.description}</p>
              </div>
              <span className="cookie-consent__required">{content.requiredStatus}</span>
            </div>
            <label className="cookie-consent__preference">
              <span>
                <span className="cookie-consent__preference-title">{content.analyticsLabel}</span>
                <span className="cookie-consent__preference-description">{content.analyticsDescription}</span>
              </span>
              <input
                checked={isAnalyticsAllowed}
                className="cookie-consent__toggle"
                onChange={(event) => { setIsAnalyticsAllowed(event.target.checked); }}
                type="checkbox"
              />
            </label>
          </div>
        ) : null}
        <div className="cookie-consent__actions">
          {isCustomizationOpen ? (
            <>
              <button className="cookie-consent__button cookie-consent__button--secondary" onClick={() => { setIsCustomizationOpen(false); }} type="button">{content.back}</button>
              <button className="cookie-consent__button cookie-consent__button--primary" onClick={() => { saveChoice(isAnalyticsAllowed); }} type="button">{content.savePreferences}</button>
            </>
          ) : (
            <>
              <button className="cookie-consent__button cookie-consent__button--secondary" onClick={() => { saveChoice(false); }} type="button">{content.reject}</button>
              <button className="cookie-consent__button cookie-consent__button--primary" onClick={() => { saveChoice(true); }} type="button">{content.accept}</button>
              <button className="cookie-consent__customize" onClick={() => { setIsCustomizationOpen(true); }} type="button">{content.customize}</button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
