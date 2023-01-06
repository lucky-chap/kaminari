/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/no-array-index-key */
import { PostProps } from "types"

import mountyImage from "../../public/assets/mountain.jpg"
import BlogCard from "./BlogCard"

export default function BlogsGrid({ allPosts }: { allPosts: PostProps[] }) {
  return (
    <div className="mx-auto max-w-2xl px-2 pt-10">
      <h2 className="leading-tighter mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tighter md:text-5xl">
        Blog
      </h2>
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2">
        {allPosts.map((p: PostProps, i) => (
          // <BlogCard key={i} />
          <BlogCard
            key={p._id}
            title={p.title}
            slug={p.slug}
            imageSrc={mountyImage}
            imageAlt={p.slug}
          />
        ))}
      </div>
    </div>
  )
}
