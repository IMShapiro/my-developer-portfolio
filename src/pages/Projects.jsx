import '../assets/styles/Projects.css';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { useLocation } from 'react-router-dom';

const Projects = () => {

  const location = useLocation();

  const [projects, setProjects] = useState([])
  const [limit, setLimit] = useState(undefined)

  useEffect(()=>{
    function getProjects(){
      fetch("https://api.github.com/users/IMShapiro/repos")
          .then(response => response.json())
          .then(data => {
              setProjects(data)
          })
          .catch(error => console.error(error))
    }

    if(location["pathname"] == "/"){
      setLimit(2)
    }else if(location["pathname"] == "/projects"){
      setLimit(undefined)
    }

    getProjects()
  },[location])

  return (
    <div className="container-fluid projects-container">
      <h2>Projects</h2>
      <div className="row">
        {projects.slice(0,limit).map((project, index) => (
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