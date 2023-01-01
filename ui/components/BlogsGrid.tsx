/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/no-array-index-key */
import { CardProps } from "types"

import islanderImage from "../../public/assets/island.jpg"
import mountyImage from "../../public/assets/mountain.jpg"
import planetImage from "../../public/assets/planet.jpg"
import BlogCard from "./BlogCard"

const projects: CardProps[] = [
  {
    title: "How to use Contentlayer with Next.js 13 and TailwindCSS",
    src: planetImage,
    alt: "Planetaria App",
    githubUrl: "https://github.com/lucky-chap/kaminari",
    liveUrl: "https://github.com/lucky-chap/kaminari",
  },
  {
    title: "Making your own music player with Player.js and Remix",
    src: islanderImage,
    alt: "Islander App",
    githubUrl: "https://github.com/lucky-chap/kaminari",
    liveUrl: "https://github.com/lucky-chap/kaminari",
  },
  {
    title: "Understanding and applying database migrations easily",
    src: mountyImage,
    alt: "Mounty App",
    githubUrl: "https://github.com/lucky-chap/kaminari",
    liveUrl: "https://github.com/lucky-chap/kaminari",
  },
]

export default function BlogsGrid() {
  return (
    <div className="mx-auto max-w-2xl px-2 pt-10">
      <h2 className="leading-tighter mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tighter md:text-5xl">
        Blog
      </h2>
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2">
        {projects.map((p: CardProps, i) => (
          // <BlogCard key={i} />
          <BlogCard
            key={p.title}
            title={p.title}
            src={p.src}
            alt={p.alt}
            githubUrl={p.githubUrl}
            liveUrl={p.liveUrl}
          />
        ))}
      </div>
    </div>
  )
}
