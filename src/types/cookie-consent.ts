export type CookieConsentStatus = "accepted" | "rejected" | "undecided";

export interface CookieConsentValue {
  readonly status: CookieConsentStatus;
  readonly isDialogOpen: boolean;
  readonly acceptAnalytics: () => void;
  readonly rejectAnalytics: () => void;
  readonly openPreferences: () => void;
  readonly closePreferences: () => void;
}
