import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/portfolio/data.json");
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error("Erro ao encontrar projetos.", error);
      }
    }

    fetchProjects();
  }, [])

  return (
    <div className="layout">
      <section id="projects">
        <h1>PROJETOS</h1>
        <div className="project-grid">
          {projects.map((item, index) => (
            <div className="project-image" key={index}>
              <img src={item.image} alt="Project" />
              <div className="project-overlay">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <a href={item.link}><i className="bx bx-link-external"></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
