import React from "react";

const Education = () => (
  <div className="row education">
    <font color="#0353a3">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>University of South Florida</h3>
          <p className="info">
            Master of Science in Electrical Engineering
            <span>&bull;</span>
            <em className="date">May 2011</em>
          </p>

          <p>
            I studied Electrical Engineering with a focus on digital design from 2009 to 2011 at the
            University of South Florida (USF) in Tampa, FL.  I made some amazing connections
            with classmates and learned a lot of new stuff involving digital design and analysis
            of data using software tools.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>University of Florida</h3>
          <p className="info">
            Bachelor of Science in Electrical Engineering
            <span>&bull;</span>
            <em className="date">May 2009</em>
          </p>

          <p>
            Majored in Electrical Engineering and probably had the most fun 5 years of my life
            at the University of Florida (UF) in Gainesville, FL.  Spent my time at UF enjoying
            college sports, and was lucky to be there for two NCAA Football National Championships
            and two NCAA Mens Basketball Nation Championships, and was able to attend one of each in person.
            I specialized in digital logic and digital design for my degree, as I was extremely
            interested in playing with microprocessors and programming them to do cool things.  My favorite
            project was designing a robot that played the UF fight song and had a remote control to
            steer it, as well as sensors to avoid objects.
          </p>
        </div>
      </div>
    </div>
    </font>
  </div>
);

export default Education;
