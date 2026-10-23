import { useState, type CSSProperties } from 'react'
import './Projects.css'
import projectsJson from '../../data/projects.json'

type Project = {
  id: number
  name: string
  category: string
  description: string
  coverPhoto: string
  technologies: string[]
}

const projects: Project[] = projectsJson

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