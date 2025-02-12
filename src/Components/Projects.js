import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Renu beauty parlour",
      description: "we created frindly beauty parlour website",
      link: "https://beauty-parlour-xi.vercel.app/",
        image: "images/image.png",
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
      <h1 style={{textAlign:"center",fontFamily:"roboto",padding:"20px"}}>Our Client Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) =>(
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
