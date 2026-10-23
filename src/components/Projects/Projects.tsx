import { useState, type CSSProperties } from 'react'
import './Projects.css'

type Project = {
  id: number
  name: string
  category: string
  description: string
  coverPhoto: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Aurora Studio',
    category: 'Brand platform',
    description:
      'A boutique creative platform for artists and brands to showcase work, launch campaigns, and manage bookings in one place.',
    coverPhoto:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'CSS', 'Figma'],
  },
  {
    id: 2,
    name: 'Northstar CRM',
    category: 'Operations dashboard',
    description:
      'A client operations dashboard that turns fragmented sales data into clear pipelines, reporting, and follow-up automation.',
    coverPhoto:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'Node', 'Charts', 'REST API'],
  },
  {
    id: 3,
    name: 'Bloom Journal',
    category: 'Wellbeing product',
    description:
      'An elegant journaling experience with mood tracking, curated prompts, and visual reflections to keep user habits meaningful.',
    coverPhoto:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Next.js', 'Tailwind', 'Supabase', 'UX Writing'],
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [tilt, setTilt] = useState({ x: 50, y: 50, rx: 0, ry: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    setTilt({
      x: `${(px * 100).toFixed(1)}%` as unknown as number,
      y: `${(py * 100).toFixed(1)}%` as unknown as number,
      rx: (0.5 - py) * 12,
      ry: (px - 0.5) * 14,
    })
  }

  const cardStyle: CSSProperties = {
    ['--mx' as string]: tilt.x,
    ['--my' as string]: tilt.y,
    ['--rx' as string]: `${tilt.rx}deg`,
    ['--ry' as string]: `${tilt.ry}deg`,
  }

  return (
    <article
      className={`story-item ${index % 2 === 0 ? 'story-left' : 'story-right'}`}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 50, y: 50, rx: 0, ry: 0 })}
      role="listitem"
    >
      <div className="story-index">0{index + 1}</div>

      <div className="story-visual">
        <img src={project.coverPhoto} alt={`${project.name} cover`} />
      </div>

      <div className="story-copy">
        <p className="story-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <ul className="tech-pills" aria-label={`${project.name} technologies`}>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="projects-container" aria-label="Project portfolio section">
      <div className="projects-header">
        <p className="eyebrow">Selected work</p>
        <h2 className="heading2">My Proudest Work?</h2>
      </div>

      <div className="projects-story" role="list" aria-label="Project list">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}