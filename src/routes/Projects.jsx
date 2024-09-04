import '../assets/styles/Projects.css';

const projects = [
  {
    title: "Snake Game",
    description: "A classic Snake game built with JavaScript, HTML5, and CSS3. The game includes features like increasing difficulty and a high score tracker.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    image: "public/images/snake-project.png",
    liveDemo: "https://snake-game.pages",
    github: "https://github.com/IMShapiro/snake-game"
  },
  {
    title: "E-commerce Website",
    description: "A fully functional e-commerce website with features like product management, shopping cart, and secure payment gateway integration.",
    technologies: ["React", "Node.js", "Firebase"],
    image: "public/images/ecommerce-project.jpeg",
    liveDemo: "https://packaging-guy.pages.dev/",
    github: ""
  },
];

const Projects = () => {
  return (
    <div className="container-fluid projects-container">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card bg-dark text-light">
              <img src={project.image} alt={project.title} className="card-img-top img-fluid rounded-top"/>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <div className="mb-3">
                  {project.technologies.map((tech, index) => (
                    <span className="badge me-2" key={index}>{tech}</span>
                  ))}
                </div>
                <div className="d-flex justify-content-between">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;