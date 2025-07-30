import ProjectCard from '../../../components/ProjectCard'
import { projects } from '../../../data/projects'



export default function ProjectsPage() {
  return (
    <section className="min-h-[90vh] py-10 px-4 container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-dark dark:text-white">مشاريعي</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
