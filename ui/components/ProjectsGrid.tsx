/* eslint-disable sonarjs/no-duplicate-string */
import ProjectCard from "./ProjectCard"

import islanderImage from "../../public/assets/island.jpg"
import mountyImage from "../../public/assets/mountain.jpg"
import planetImage from "../../public/assets/planet.jpg"

export type IProjectProps = {
  src: any
  alt: string
  githubUrl: string
  liveUrl: string
  name: string
  description: string
}

const projects: IProjectProps[] = [
  {
    name: "Planetaria",
    description:
      "Creating technology to empower civilians to explore space on their own terms.",
    src: planetImage,
    alt: "Planetaria App",
    githubUrl: "https://github.com/lucky-chap/kaminari",
    liveUrl: "https://github.com/lucky-chap/kaminari",
  },
  {
    name: "Islander",
    description: "Rest and abide with island freaks like yourself. Too scared?",
    src: islanderImage,
    alt: "Islander App",
    githubUrl: "https://github.com/lucky-chap/kaminari",
    liveUrl: "https://github.com/lucky-chap/kaminari",
  },
  {
    name: "Mounty",
    description:
      "Climbing daring heights like there is no tomorrow! Yes, we dare!",
    src: mountyImage,
    alt: "Mounty App",
    githubUrl: "https://github.com/lucky-chap/kaminari",
    liveUrl: "https://github.com/lucky-chap/kaminari",
  },
]

export default function ProjectsGrid() {
  return (
    <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p: IProjectProps) => (
        <ProjectCard
          key={p.name}
          name={p.name}
          description={p.description}
          src={p.src}
          alt={p.alt}
          githubUrl={p.githubUrl}
          liveUrl={p.liveUrl}
        />
      ))}
    </div>
  )
}
