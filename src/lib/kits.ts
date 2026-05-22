import { categories, kits } from "@/content/kits/en";

export function getCategories() {
  return [...categories].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getKits() {
  return [...kits].sort((a, b) => {
    if (a.category === b.category) {
      return a.sortOrder - b.sortOrder;
    }

    const categoryA = getCategory(a.category)?.sortOrder ?? 0;
    const categoryB = getCategory(b.category)?.sortOrder ?? 0;

    return categoryA - categoryB;
  });
}

export function getCategory(categorySlug: string) {
  return categories.find((category) => category.slug === categorySlug);
}

export function getKitsByCategory(categorySlug: string) {
  return getKits().filter((kit) => kit.category === categorySlug);
}

export function getKit(categorySlug: string, kitSlug: string) {
  return kits.find(
    (kit) => kit.category === categorySlug && kit.slug === kitSlug,
  );
}

export function getKitPath(categorySlug: string, kitSlug: string) {
  return `/en/kits/${categorySlug}/${kitSlug}`;
}
