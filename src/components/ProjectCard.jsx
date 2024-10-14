function ProjectCard({project}){
    return(
        <div className="col-md-6 mb-4">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-text">{project.description}</p>

                <div className="d-flex justify-content-between">
                  {project.homepage && <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success">Live Demo</a>}
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">GitHub</a>
                </div>

                <div className="mb-3">
                  {project.topics.map((topic, index) => (
                    <span className="badge me-2" key={index}>{topic}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
    )
}

export default ProjectCard;