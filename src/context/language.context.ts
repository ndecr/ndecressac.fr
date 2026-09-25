import { createContext } from "react";
import type { LanguageCode } from "../types";

export interface LanguageContextValue {
  readonly language: LanguageCode;
  readonly alternateLanguage: LanguageCode;
  readonly changeLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
