// src/lib/related-posts.ts
import type { CollectionEntry } from "astro:content";

export function getRelatedPosts(
  all: CollectionEntry<"blog">[],
  current: CollectionEntry<"blog">,
  limit = 3
) {
  const currentTags = new Set(current.data.tags ?? []);
  const currentCategory = current.data.category;

  const candidates = all
    .filter((p) => p.slug !== current.slug && !p.data.draft)
    .map((p) => {
      const tags = p.data.tags ?? [];
      const shared = tags.reduce((acc, t) => acc + (currentTags.has(t) ? 1 : 0), 0);
      const categoryBoost = currentCategory && p.data.category === currentCategory ? 1 : 0;
      return { post: p, score: shared * 10 + categoryBoost };
    })
    .sort((a, b) => b.score - a.score || +new Date(b.post.data.pubDate) - +new Date(a.post.data.pubDate))
    .map((x) => x.post);

  return candidates.slice(0, limit);
}
