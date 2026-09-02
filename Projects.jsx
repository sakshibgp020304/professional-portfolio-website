import { Link } from 'react-router-dom'
import { projects } from '../data/portfolio'
import useScrollReveal from '../hooks/useScrollReveal'
import './Projects.css'

function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <p className="eyebrow reveal">Projects</p>
        <h2 className="section-heading reveal">
          Things I've <span>built</span>
        </h2>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              className={`project-card glass-card reveal reveal-delay-${(i % 3) + 1}`}
              key={project.id}
            >
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                      <i className="fa-brands fa-github"></i> GitHub
                    </a>
                  )}
                  <Link to={`/project/${project.id}`} className="btn btn-primary btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects