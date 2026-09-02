import { about, personalInfo } from '../data/portfolio'
import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <p className="eyebrow reveal">About</p>
        <h2 className="section-heading reveal">
          Get to know <span>me better</span>
        </h2>

        <div className="about__grid">
          <div className="about__image-card glass-card reveal">
            <img src={personalInfo.profileImage} alt={personalInfo.name} />
          </div>

          <div className="about__content reveal reveal-delay-1">
            <h3>{about.heading}</h3>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="about__cards">
              <div className="about__mini-card glass-card">
                <i className="fa-solid fa-bullseye"></i>
                <div>
                  <h4>Objective</h4>
                  <p>{about.objective}</p>
                </div>
              </div>
              <div className="about__mini-card glass-card">
                <i className="fa-solid fa-graduation-cap"></i>
                <div>
                  <h4>Education</h4>
                  <p>{about.educationSummary}</p>
                </div>
              </div>
            </div>

            <a href={personalInfo.resumeUrl} download className="btn btn-primary">
              <i className="fa-solid fa-download"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About