import { personalInfo } from "../data/portfolio";
import BackToTop from "./BackToTop";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__logo">
          Sakshi<span>.</span>
        </p>

        <div className="footer__socials">
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

        <p className="footer__copy">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>

      <BackToTop />
    </footer>
  );
}

export default Footer;
