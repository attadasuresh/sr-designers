import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills, projects, and contact details.",
      link: "https://example.com/portfolio",
      image: "images/Screenshot 2024-12-04 105158.png",
    },
{
      title: "Reco Form",
      description: "Streamlined Forms & Elements for divers categories",
      link: "http://form-maker.bedatatech.com/",
      image: "images/image_2024_12_04T18_46_42_802Z.png",
    },
    {
      title: "Echo Chat",
      description: "A ULTIMATE MESSAGING PLATFORM",
      link: "http://echochat.bedatatech.com/",
      image: "images/image_2024_12_04T18_52_41_710Z.png",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
