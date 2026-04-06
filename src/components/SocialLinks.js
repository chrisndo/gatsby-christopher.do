import React from 'react'
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaEnvelopeSquare,
  FaLinkedin,
} from 'react-icons/fa'
// http://react-icons.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a
        href="https://www.facebook.com/ChristopherDo"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookSquare />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/chrisndo/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/ufcdo/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="mailto:chris.n.do@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
        <FaEnvelopeSquare />
      </a>
    </li>
    <li>
      <a href="http://github.com/chrisndo/" target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
    </li>
  </ul>
)

export default SocialLinks
