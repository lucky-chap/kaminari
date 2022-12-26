import Image from "next/image"
import { FiGithub, FiLink } from "react-icons/fi"

import { type IProjectProps } from "./ProjectsGrid"

export default function ProjectCard({
  src,
  alt = "Project",
  githubUrl,
  liveUrl,
  name,
  description,
}: IProjectProps) {
  return (
    <div className="group group rounded border-2 border-gray-1001 bg-gray-1000 p-4">
      <div className="h-[150px]">
        <Image
          src={src}
          alt={alt}
          className="aspect-square h-full w-full rounded object-cover"
          priority
        />
      </div>
      <h4 className="pt-2 text-sm font-bold text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-300">
        {name}
      </h4>
      <p className="py-1 font-grotesk text-xs text-gray-one/90 transition-colors duration-100 ease-linear group-hover:text-gray-300">
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
  )
}
