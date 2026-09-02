import { education } from '../data/portfolio'
import useScrollReveal from '../hooks/useScrollReveal'
import './Education.css'

function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" ref={ref}>
      <div className="container">
        <p className="eyebrow reveal">Education</p>
        <h2 className="section-heading reveal">
          My academic <span>journey</span>
        </h2>

        <div className="timeline">
          {education.map((item, i) => (
            <div className={`timeline__item reveal reveal-delay-${(i % 3) + 1}`} key={item.course}>
              <div className="timeline__dot"></div>
              <div className="timeline__card glass-card">
                <span className="timeline__year">{item.year}</span>
                <h3>{item.course}</h3>
                <p className="timeline__institute">{item.institute}</p>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education