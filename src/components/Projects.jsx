// import { projectData } from './data.js';

// const Projects = () => {
//     return (
//         <div className="projects-container">
//             <h2>Projects</h2>
//             <div className="projects-grid">
//                 {projectData && projectData.map((project) => (
//                     <div className="project-card" key={project.id}>
//                         <a href={project.gitHubLink} target='_blank'>
//                             <div className="project-header">
//                                 <i className="fa-regular fa-folder-open folder-icon"></i>

//                                 <div className="small-icons">
//                                     <i className="fa-brands fa-github"></i>
//                                 </div>
//                             </div>
//                             <h3>{project.title}</h3>
//                             {project.liveLink && (
//                                 <a href={project.liveLink} target='_blank'>
//                                     <i className="fa-brands fa-firefox-browser"></i>
//                                 </a>
//                             )}
//                             <br />
//                             <p>{project.description}</p>
//                         </a>
//                     </div>
//                 ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default Projects;

import { projectData } from './data.js';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <i className="fa-regular fa-folder-open folder-icon"></i>
                            <div className="small-icons">
                                <a href={project.gitHubLink} target='_blank'>
                                    <i className="fa-brands fa-github"></i>
                                </a>

                                {project.liveLink && (
                                    <a href={project.liveLink} target='_blank' className='float-right'>
                                        <i className="fa-brands fa-firefox-browser"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                        <h3>
                            <a href={project.liveLink || project.gitHubLink} target='_blank'>
                                {project.title}
                            </a>
                        </h3>

                        <br />
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
