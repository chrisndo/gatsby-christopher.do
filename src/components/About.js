import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import resumePDF from "../assets/resume/resume.pdf";
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
        Excellent teamwork, leadership, and communication skills. <br/><br/>
        I'm currently working at Deloitte and I'm learning tons of
        cool things surrounding cloud architecture and security engineering.<br/><br/>Cloud Enthusiast.

        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Christopher Do</span>
              <br />
              <span>
                Arlington, VA
              </span>
              <br />
              <span>(813)990-7318</span>
              <br />
              <span>chris.n.do@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href={resumePDF} target="_blank" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
