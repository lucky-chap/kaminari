"use client"

/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-relative-packages */
import BlogsGrid from "@/ui/components/BlogsGrid"

import { allPosts } from "contentlayer/generated"

export default function Home() {
  return (
    <section className="container mx-auto pb-8 text-left">
      <BlogsGrid allPosts={allPosts} />
    </section>
  )
}
