/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

"use client"

import Link from "next/link"

import { useMDXComponent } from "next-contentlayer/hooks"

import { MdOutlineKeyboardBackspace } from "react-icons/md"

import { PostProps } from "types"
import { components } from "@/ui/components/MDXComponents"
import { allPosts } from "contentlayer/generated"

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p: PostProps) => p.slug === params.slug)

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <section className="mx-auto max-w-2xl px-2 pt-10">
      <Link
        href="/blog"
        className="group inline-flex rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
      >
        <MdOutlineKeyboardBackspace className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
      </Link>
      <div className="pt-5">
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold leading-snug tracking-tighter md:text-5xl">
          {post.title}
        </h2>
        <p className="mx-auto my-3 max-w-2xl text-base font-medium italic leading-snug tracking-tighter text-gray-one md:text-lg">
          {post.description}
        </p>
        <div className="mx-auto mt-8 grid max-w-4xl text-gray-one">
          <MDXContent
            components={{
              ...components,
            }}
          />
        </div>
      </div>
    </section>
  )
}
