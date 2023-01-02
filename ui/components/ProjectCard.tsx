import Image from "next/image"
import Link from "next/link"
import { FiGithub, FiLink } from "react-icons/fi"

import { CardProps } from "types"

export default function ProjectCard({
  src,
  alt = "Project",
  githubUrl,
  liveUrl,
  title,
  description,
}: CardProps) {
  return (
    <div className="group">
      <Link href="/projects/single">
        <div className="rounded border-2 border-transparent transition-all duration-100 ease-linear">
          <div className="h-[150px]">
            <Image
              src={src}
              alt={alt}
              className="aspect-square h-full w-full rounded object-cover"
              loading="lazy"
            />
          </div>
          <Link href="/projects/single">
            <h4 className="pt-2 text-sm font-bold text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-300">
              {title}
            </h4>
          </Link>
          <p className="py-1 font-grotesk text-sm text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-300">
            {description}
          </p>
          <div className="flex items-center pt-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group mr-2 rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
            >
              <FiGithub className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
            >
              <FiLink className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
            </a>
          </div>
        </div>
      </Link>
    </div>
  )
}
