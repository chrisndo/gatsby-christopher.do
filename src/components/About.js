import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
// import resumePDF from "../assets/resume/resume.pdf";
import profilePic from "../assets/images/profile2.png";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          Highly driven engineering and technology professional with a MSEE and over 10 years of experience.
          Excellent at adapting to new technologies in a changing environment.
          Extremely resourceful, analytical, and detail-driven when managing
          and completing multiple tasks or projects efficiently.
          Excellent teamwork, leadership, and communication skills. <br /><br />
          I'm currently working at McKinsey solving all kinds of complex cloud security problems.<br /><br />Cloud Enthusiast.

        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Christopher Do</span>
              <br />
              <span>
                Alexandria, VA
              </span>
              <br />
              <span>813.990.7318</span>
              <br />
              <span>chris.n.do@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="https://docs.google.com/document/d/1LY4l4YPPRe4KwKdYZh3ujUqqtE4DXgB7UDYs8fK4aus/export?format=pdf" target="_blank" rel="noreferrer" className="button">
                <FaCloudDownloadAlt /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
