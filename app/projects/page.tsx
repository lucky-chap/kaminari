import ProjectsGrid from "@/ui/components/ProjectsGrid"

export default function Home() {
  return (
    <section className="container mx-auto pb-8 text-left">
      <div className="mx-auto max-w-2xl px-2 pt-10">
        <h2 className="leading-tighter mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tighter md:text-5xl">
          <span>Projects</span>
        </h2>

        <ProjectsGrid />
      </div>
    </section>
  )
}
