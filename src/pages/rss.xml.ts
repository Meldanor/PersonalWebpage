/**
 * THIS FILE ORIGINTED FROM George Song and its blog post https://gsong.dev/articles/astro-feed-unified/.
 * I'VE MODIFIED IT A LITTLE BIT TO MY LIKING
 */
import type { APIContext } from "astro";
import { generateFeed } from "../feeds";

export async function GET(context: APIContext) {
  const feed = await generateFeed(context);
  return new Response(feed.rss2(), {
    headers: { "Content-Type": "application/rss+xml" },
  });
}
