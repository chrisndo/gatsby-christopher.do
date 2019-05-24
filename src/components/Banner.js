import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Christopher Do</h1>
      <h3>
        I'm currently a <span>Cloud Security Engineer</span> with over 10 years of professional
        experience in many different areas of technology. I'm obsessed with technology
        and continually try to learn about new things that can make peoples lives easier.
        Cloud Enthusiast.<br/><br/>
        <a className="smoothscroll" href="#about">
          {" "}
          Start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
