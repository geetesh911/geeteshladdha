import React, { Fragment, useEffect } from "react";
import resume from "../../assets/json/resume.json";
import AOS from "aos";

export const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const {
    personal_details,
    objectives,
    education,
    projects,
    skills,
    certificates,
  } = resume;
  const { name, address, mobile, email } = personal_details;

  const progressBarColors = [
    "#007bff",
    "#fd7e14",
    "#dc3545",
    "#28a745",
    "#20c997",
    "#6f42c1",
  ];

  return (
    <div className="resume">
      <div className="intro">
        <div className="name">
          <strong>{name}</strong>
        </div>
        <div className="address">{address}</div>
        <div className="mobile">{mobile}</div>
        <div className="resume-email">
          <a href={`mailto:${email}?Subject=Hello`}>{email}</a>
        </div>
      </div>

      <div className="objectives">
        <div className="resume-heading" data-aos="zoom-in">
          Objectives
        </div>
        <ul>
          {objectives &&
            objectives.map((objective) => (
              <li key={objective} className="objective" data-aos="fade-up">
                {objective}
              </li>
            ))}
        </ul>
      </div>
      <div className="education">
        <div className="resume-heading" data-aos="zoom-in">
          Education
        </div>
        <div className="education-section" data-aos="fade-up">
          {education &&
            education.map((section) => (
              <Fragment key={section.course}>
                <div className="course">
                  {section.status === "pursuing"
                    ? `Pursuing ${section.course}`
                    : section.course}
                </div>
                <div className="span">{section.span}</div>
                <div className="institution">{section.institution}</div>
                {section.marks.map((mark, index) => (
                  <Fragment key={`${index}`}>
                    {mark.class && (
                      <div className="mark-class">
                        <strong>{mark.class}</strong>
                      </div>
                    )}
                    <div className="mark-type">
                      <strong>{mark.type}:</strong>
                    </div>
                    <div className="mark">{mark.mark}</div>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          <div className="resume-projects">
            <div className="resume-heading" data-aos="zoom-in">
              Projects
            </div>
            <div className="project-section" data-aos="fade-up">
              {projects &&
                projects.map((project) => (
                  <Fragment key={project.name}>
                    <div className="project-name" data-aos="fade-up">
                      {project.name}
                    </div>
                    <div className="project-url" data-aos="fade-up">
                      <a href={project.url}>{project.url}</a>
                    </div>
                    <div className="project-span" data-aos="fade-up">
                      {project.span}
                    </div>
                    <div className="project-description" data-aos="fade-up">
                      {project.description}
                    </div>
                    <div className="project-button" data-aos="fade-up">
                      <a href={project.url}>See Project</a>
                    </div>
                  </Fragment>
                ))}
            </div>
          </div>
          <div className="skills">
            <div className="resume-heading" data-aos="zoom-in">
              Skills
            </div>
            <div className="skill-list" data-aos="fade-up">
              <ul>
                {skills &&
                  skills.map((skill) => (
                    <li className="skillset" key={skill.name}>
                      <div className="skill" data-aos="fade-up">
                        {skill.name}
                      </div>
                      <div className="level" data-aos="fade-up">
                        <div className="progress" data-aos="fade-left">
                          <div
                            max="100"
                            className="skill-progress"
                            style={{
                              width: `${skill.mark}%`,
                              height: "20px",
                              background:
                                progressBarColors[Math.ceil(Math.random() * 5)],
                            }}
                          ></div>
                          <div className="skill-percentage">
                            {`${skill.mark}%`}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="certificates">
              <div className="resume-heading" data-aos="zoom-in">
                Certificates
              </div>
              <div data-aos="fade-up">
                {certificates &&
                  certificates.map((certificate) => (
                    <Fragment key={certificate.description}>
                      <div className="certificate-name">
                        {certificate.certificate}
                      </div>
                      <div className="certificate-date">{certificate.date}</div>
                      <div className="certificate-description">
                        {certificate.description}
                      </div>
                      <div className="certificate-issuer">
                        {certificate.issuer}
                      </div>
                    </Fragment>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
