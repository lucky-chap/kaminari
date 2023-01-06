import Image from "next/image"
import Link from "next/link"

import { PostProps } from "types"

export default function BlogCard({
  title,
  imageSrc,
  imageAlt,
  slug,
}: PostProps) {
  return (
    <div className="group">
      <Link href={`/blog/${slug}`}>
        <div className="rounded border-2 border-transparent transition-all duration-100 ease-linear">
          <div className="h-[150px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="aspect-square h-full w-full rounded object-cover"
              loading="lazy"
            />
          </div>
          <h4 className="pt-2 text-sm font-bold text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-300">
            {title}
          </h4>
          {/* <p className="py-1 font-grotesk text-xs text-gray-one/90 transition-colors duration-100 ease-linear group-hover:text-gray-300">
          {description}
        </p> */}
          <div className="flex w-full items-center justify-between pt-2">
            {/* <Link
            href="/single-blog"
            className="group flex items-center rounded bg-gray-1001 p-2 text-sm text-gray-one transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
          >
            Read
            <HiArrowRight className="ml-2 text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
          </Link> */}
            {/* <div className="flex items-center">
            <span className="text-xs font-medium text-gray-one">21</span>
            <HiOutlineEye className="ml-2 text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
          </div> */}
          </div>
        </div>
      </Link>
    </div>
  )
}
