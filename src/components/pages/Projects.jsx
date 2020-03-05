import React, { useEffect } from "react";
import AOS from "aos";
import projects from "../../assets/json/projects.json";

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <div className="projects">
      <div className="project-heading">Projects</div>
      <div>
        {projects &&
          projects.map(project => (
            <div className="project" key={project.name}>
              <div className="project-name" data-aos="zoom-in">
                {project.name}
              </div>
              <div className="project-desktop-image" data-aos="fade-up">
                <img src={project.project_desktop_image} alt="" />
              </div>
              <div className="project-mobile-image" data-aos="fade-up">
                <img src={project.project_mobile_image} alt="" />
              </div>
              <div className="project-description" data-aos="fade-left">
                {project.description}
              </div>
              <div className="project-tools">
                <div className="heading" data-aos="zoom-in">
                  Technologies Used
                </div>
                <div className="tools-used">
                  <ul>
                    {project.technologies.map(technology => (
                      <li data-aos="fade-up" key={technology.name}>
                        {technology.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="project-link" data-aos="fade-right">
                <div>
                  <a href={project.url}>See Project</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
