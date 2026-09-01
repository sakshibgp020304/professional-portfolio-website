import { useState } from 'react'
import { personalInfo } from '../data/portfolio'
import useScrollReveal from '../hooks/useScrollReveal'
import './Contact.css'

function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens the user's mail client pre-filled with the form content.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <p className="eyebrow reveal">Contact</p>
        <h2 className="section-heading reveal">
          Let's <span>work together</span>
        </h2>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <a className="contact__box glass-card" href={`mailto:${personalInfo.email}`}>
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>{personalInfo.email}</p>
              </div>
            </a>

            <a className="contact__box glass-card" href={`tel:${personalInfo.phone}`}>
              <i className="fa-solid fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>{personalInfo.phoneDisplay}</p>
              </div>
            </a>

            <a
              className="contact__box glass-card"
              href={personalInfo.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </a>
          </div>

          <form className="contact__form glass-card reveal reveal-delay-1" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Tell me about your project..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="fa-solid fa-paper-plane"></i> Send Message
            </button>

            {status === 'sent' && <p className="contact__status">Your email app should now be open — send when ready!</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact