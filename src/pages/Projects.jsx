import '../assets/styles/Projects.css';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {

  const [projects, setProjects] = useState([])

  useEffect(()=>{
    function getProjects(){
      fetch("https://api.github.com/users/IMShapiro/repos")
          .then(response => response.json())
          .then(data => {
              setProjects(data)
              console.log(data)
          })
          .catch(error => console.error(error))
    }

    getProjects()
  },[])

  return (
    <div className="container-fluid projects-container">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;