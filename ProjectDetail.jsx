import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/portfolio'
import './ProjectDetail.css'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <section className="project-detail">
        <div className="container">
          <p>Project not found.</p>
          <Link to="/" className="btn btn-primary">Back to home</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="project-detail">
      <div className="container">
        <Link to="/#projects" className="project-detail__back">
          <i className="fa-solid fa-arrow-left"></i> Back to projects
        </Link>

        <div className="project-detail__hero glass-card">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-detail__body">
          <h1>{project.title}</h1>
          <p className="project-detail__desc">{project.longDescription}</p>

          <div className="project-detail__tech">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <h3>Key Features</h3>
          <ul className="project-detail__features">
            {project.features.map((f) => (
              <li key={f}>
                <i className="fa-solid fa-check"></i> {f}
              </li>
            ))}
          </ul>

          <div className="project-detail__actions">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                <i className="fa-brands fa-github"></i> View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail