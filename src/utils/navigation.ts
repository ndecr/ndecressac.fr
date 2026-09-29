import type { NavigationItem } from "../types";

export function getHomepageNavigation(navigation: readonly NavigationItem[]): readonly NavigationItem[] {
  return navigation.map((item) => ({ ...item, href: `/${item.href}` }));
}
