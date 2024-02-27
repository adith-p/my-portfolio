import { projectData } from './data.js';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <a href={project.gitHubLink} target='_blank'>
                            <div className="project-header">
                                <i className="fa-regular fa-folder-open folder-icon"></i>

                                <div className="small-icons">
                                    <i className="fa-brands fa-github"></i>
                                </div>
                            </div>
                            <h3>{project.title}</h3>
                            <br />
                            <p>{project.description}</p>
                        </a>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;