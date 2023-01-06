/* eslint-disable @typescript-eslint/ban-ts-comment */

// Inspired by Delba Oliveira (https://delba.dev)

/* eslint-disable no-underscore-dangle */
import { defineDocumentType } from "contentlayer/source-files"
import GithubSlugger from "github-slugger"
// esbuild doesn't support module aliases 😤🤌
// https://github.com/evanw/esbuild/issues/394
// https://github.com/contentlayerdev/contentlayer/issues/238
import { formatShortDate } from "../../lib/formatShortDate"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string" },
    status: { type: "enum", options: ["draft", "published"], required: true },
  },
  computedFields: {
    headings: {
      type: "json",
      resolve: async (doc) => {
        // use same package as rehypeSlug so toc and sluggified headings match
        // https://github.com/rehypejs/rehype-slug/blob/main/package.json#L36
        const slugger = new GithubSlugger()

        // https://stackoverflow.com/a/70802303
        const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g

        return Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag
            const content = groups?.content
            return {
              heading: flag?.length,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            }
          },
        )
      },
    },
    tweetIds: {
      type: "json",
      resolve: (doc) => {
        const tweetMatches = doc.body.raw.match(
          /<StaticTweet\sid="[0-9]+"[\s\S]*?\/>/g,
        )
        const tweetIDs = tweetMatches?.map(
          (tweet: any) => tweet.match(/[0-9]+/g)[0],
        )
        return tweetIDs ?? []
      },
    },
    publishedAtFormatted: {
      type: "string",
      resolve: (doc) => formatShortDate(doc.publishedAt),
    },
    slug: {
      type: "string",
      resolve: (doc) =>
        doc._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
  },
}))
