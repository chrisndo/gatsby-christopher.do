import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Christopher Do</h1>
      <h3>
        <span>Cloud Security Engineer</span> at <a href="https://www.bah.com/">Booz Allen Hamilton.</a>
        <br/><br/>
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
