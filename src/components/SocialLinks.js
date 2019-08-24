import React from "react";
import {
  FaFacebookOfficial,
  FaGithub,
  FaInstagram,
  FaEnvelopeSquare,
  FaLinkedinSquare
} from "react-icons/lib/fa";
// http://react-icons.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/ChristopherDo" target="_blank">
        <FaFacebookOfficial />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/chrisndo/" target="_blank">
        <FaLinkedinSquare />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/ufcdo/" target="_blank">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="mailto:chris.n.do@gmail.com" target="_blank">
        <FaEnvelopeSquare />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
