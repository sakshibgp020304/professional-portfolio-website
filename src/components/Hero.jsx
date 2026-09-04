import { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolio";
import "./Hero.css";

const roles = [
  "Java Full Stack Developer",
  "React.js Developer",
  "Frontend Enthusiast",
];

function useTypewriter(words, speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting
              ? current.slice(0, t.length - 1)
              : current.slice(0, t.length + 1),
          );
        },
        deleting ? speed / 2 : speed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--cyan"></span>
        <span className="hero__orb hero__orb--violet"></span>
        <div className="hero__grid"></div>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Hello, it's me</p>
          <h1 className="hero__name">{personalInfo.name}</h1>
          <h2 className="hero__role">
            {typed}
            <span className="hero__cursor">|</span>
          </h2>
          <p className="hero__intro">{personalInfo.intro}</p>

          <div className="hero__actions">
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn btn-primary"
            >
              <i className="fa-solid fa-download"></i> Download Resume
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="social-text"
            >
              LC
            </a>

            <a
              href={personalInfo.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-text"
            >
              FB
            </a>
          </div>
        </div>

        <div className="hero__image-wrap">
          <div className="hero__image-glow"></div>
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
