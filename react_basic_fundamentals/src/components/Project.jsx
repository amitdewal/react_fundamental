function Project() {
     const projects = [
      { title: "Project One", description: "This is the first project.", link: "#" },
      { title: "Project Two", description: "This is the second project.", link: "#" },
      { title: "Project Three", description: "This is the third project.", link: "#" }
   ]

    return(
         <section id='projects' className='projects-section'>
            <h2>My Projects</h2>
            <div className='projects-list'>
               {
                  projects.map((project, index) => (
                     <div key={index} className='project-item'>
                        <h3>{project.title}</h3>
                        <h3>{project.description}</h3>
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
                     </div>
                  ))}
            </div>
         </section>
    )
    
}

export default Project;