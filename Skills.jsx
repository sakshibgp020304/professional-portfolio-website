import { skills } from '../data/portfolio'
import useScrollReveal from '../hooks/useScrollReveal'
import './Skills.css'

function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <p className="eyebrow reveal">Skills</p>
        <h2 className="section-heading reveal">
          What I <span>work with</span>
        </h2>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <div
              className={`skill-card glass-card reveal reveal-delay-${(i % 3) + 1}`}
              key={skill.name}
            >
              <div className="skill-card__top">
                <i className={skill.icon}></i>
                <h3>{skill.name}</h3>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-bar__fill"
                  style={{ '--target': `${skill.level}%` }}
                >
                  <span className="skill-bar__label">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills