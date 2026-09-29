import { getLegalContent } from "../models";
import type { LegalContent, LanguageCode } from "../types";

export function getLegalPageContent(language: LanguageCode): LegalContent {
  return getLegalContent(language);
}
