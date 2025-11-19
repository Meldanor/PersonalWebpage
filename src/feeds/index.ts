/**
 * THIS FILE ORIGINTED FROM George Song and its blog post https://gsong.dev/articles/astro-feed-unified/.
 * I'VE MODIFIED IT A LITTLE BIT TO MY LIKING
 */
import { createUrl, mdxToHtml } from "./shared";

import type { APIContext } from "astro";
import { Feed } from "feed";
import type { FeedOptions } from "feed";
import { email } from "@src/globals";
import { filterNonDraft } from "../contentCollections/utils";
import { getCollection } from "astro:content";

export async function generateFeed(context: APIContext): Promise<Feed> {
  const site = context.site!.toString();

  const feed = createFeedInstance(site);

  await addArticlesToFeed(feed, site);

  return feed;
}

function createFeedInstance(site: string): Feed {
  const feedOptions: FeedOptions = {
    title: "Mel's Meinungen",
    description:
      "Personal website of Kilian Gärtner - a software architect and gamer with humor",
    id: site,
    link: site,
    // TODO: Add support for all locales
    language: "en-US;de-DE",
    favicon: createUrl("/favicon.png", site) as string,
    copyright: `Copyright ${new Date().getFullYear()} Kilian Gärtner`,
    feedLinks: {
      rss: createUrl("/rss.xml", site) as string,
      atom: createUrl("/atom.xml", site) as string,
    },
    author: {
      name: "Kilian Gärtner",
      email: email,
    },
  };

  return new Feed(feedOptions);
}

async function addArticlesToFeed(feed: Feed, site: string): Promise<void> {
  const blogPosts = (await getCollection("blogEntries")).filter(filterNonDraft);
  const gameReviews = (await getCollection("gameReviews")).filter(
    filterNonDraft,
  );

  const posts = [...blogPosts, ...gameReviews].sort(
    (a, b) =>
      new Date(b.data.publishDate).getTime() -
      new Date(a.data.publishDate).getTime(),
  );
  for (const article of posts) {
    const link = createUrl(`/blog/${article.id}`, site) as string;

    feed.addItem({
      title: article.data.title,
      id: link,
      link,
      date: new Date(article.data.publishDate),
      description: article.data.summary,
      content: await mdxToHtml(article.body || "", site),
    });
  }
}
