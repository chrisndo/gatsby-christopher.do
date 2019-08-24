import React from "react";

const Work = () => (
  <div className="row work">
  <font color="#0353a3">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Booz Allen Hamilton</h3>
          <p className="info">
            Cloud Security Engineer
            <span>&bull;</span>
            <em className="date">September 2018 - Present</em>
          </p>

          <p><ul>
          <li>• Responsible for managing security operations and compliance for a federal client utilizing Amazon Web Services (AWS) to provide a cloud Platform as a Service (PaaS) to various customers for developing, running, and managing applications.</li>
          <li>• Worked to ensure FISMA and FedRAMP compliance by adhering to NIST 800-53 as well as other agency requirements, focusing on container (Docker) security/compliance.</li>
          <li>• Implemented and automated processes to streamline vulnerability management using Google Apps Scripts, ingesting vulnerability report data into Google Sheets to analyze and create various POA&M tickets and assigning them to the respective parties for remediation.</li>
          <li>• Worked with product teams to architect secure systems and provide guidance on risk management.</li>
          <li>• Helped to maintain security and compliance documentation for various system packages.</li>
          <li>• Provided continuous monitoring support to enforce agency and program policies are met and the security posture is at an acceptable risk level.</li>
          <br/>
          <li>• Tools used: Jira, Confluence, G Suite (Google), Tenable Nessus/Security Center, Twistlock, Netsparker, AWS S3/EC2, Google Apps Scripts (Javascript based), ServiceNow</li>
          </ul>
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>United States Patent and Trademark Office</h3>
          <p className="info">
            IT Specialist / IT Management
            <span>&bull;</span>
            <em className="date">April 2016 - September 2018</em>
          </p>

          <p><ul>
          <li>• Information Systems Security Officer – Served as assistant ISSO for our division.
          Involved POA&M Remediation, vulnerability scan analysis, baseline requirements, coordination of NIST and FedRAMP Requirements.
          Maintained system boundary for proper patching and controls to meet compliance guidelines. Enforced USGCB Standards. Assisted in Security Impact Analysis and software testing.</li>
          <li>• Agile – Product Owner and Scrum Master experience working with development team, operations team, and customers to facilitate and encourage Agile methodologies using the Scrum Framework.</li>
          <li>• Desktop Engineering – Managed incoming support tickets and managed a group of contractors to assist in resolving any issues that users had. This involved consulting with manufacturers and vendors to find solutions. Also worked with Active Directory (AD) and Group Policy Objects (GPO’s).</li>
          <li>• Technical Lead/Administrator – Served as the administrator for Symantec Endpoint Protection and Commvault Backup & Recovery solutions. Worked on the system architecture as well as the policies required to meet our needs. Consulted with various groups to gather requirements, including server, network, storage, and hardware teams.</li>
          <li>• Project Management – Consulted on various projects in order to determine requirements, perform market research, create matrices, consult with vendors, perform cost analysis, developed architecture, implemented solutions, and closed out projects. Very familiar with the systems development life cycle (SDLC), and have worked on the following projects: Windows 10, Symantec Endpoint Protection, Commvault Data Backup, BelArc, Skype for Business, and government in-house applications (GOTS/AIS).</li>
          <br/>
          <li>• Tools: MS Office 365 Suite, MS Windows 7/10, MS Server 2008/2016, MS SharePoint, MS SCCM, Commvault Data Backup, Remedy ITSM, Rally</li>
          </ul>

          </p>
        </div>
      </div>
    </div>
    </font>
  </div>
);

export default Work;
