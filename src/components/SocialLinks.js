import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="#">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="#">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="#">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="#">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
