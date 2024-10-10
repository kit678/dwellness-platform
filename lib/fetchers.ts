import { unstable_cache } from "next/cache";
import db from "./db";
import { and, desc, eq } from "drizzle-orm";
import { posts, sites } from "@/lib/schema";

/**
 * Fetches posts for a given domain.
 * @param domain - The domain of the site.
 * @returns An array of posts associated with the domain.
 */
export async function getPostsForSite(domain: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  return await unstable_cache(
    async () => {
      return await db
        .select({
          title: posts.title,
          description: posts.description,
          slug: posts.slug,
          image: posts.image,
          imageBlurhash: posts.imageBlurhash,
          createdAt: posts.createdAt,
        })
        .from(posts)
        .leftJoin(sites, eq(posts.siteId, sites.id))
        .where(
          and(
            eq(posts.published, true),
            subdomain
              ? eq(sites.subdomain, subdomain)
              : eq(sites.customDomain, domain),
          ),
        )
        .orderBy(desc(posts.createdAt));
    },
    [`${domain}-posts`],
    {
      revalidate: 900, // 15 minutes
      tags: [`${domain}-posts`],
    },
  )();
}