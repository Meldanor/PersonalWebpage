import type { CollectionEntry } from "astro:content";

export function filterNonDraft(
  entry: CollectionEntry<"gameReviews"> | CollectionEntry<"blogEntries">,
) {
  return entry.data.draft === false;
}

export function getLanguageEmoji(
  entry: CollectionEntry<"gameReviews"> | CollectionEntry<"blogEntries">,
): string {
  if (entry.data.language === "de") {
    return "🇩🇪";
  } else if (entry.data.language === "en") {
    return "🇬🇧";
  } else {
    throw "Unhandled arm in if-else for lang";
  }
}
