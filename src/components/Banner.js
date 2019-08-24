import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Christopher Do</h1>
      <h3>
        <span>Cloud Security Engineer at <a href="https://www.bah.com/">Booz Allen Hamilton.</a></span>
        <br/><br/>
        <a className="smoothscroll" href="#about">
          {" "}
          Start scrolling
        </a>{" "}
        <span>and learn more</span>
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
