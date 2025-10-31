function About(props) {
    return(
         <section id='about' className='about-section'>

            <h2>About Me</h2>
            <p>
               Hello! I am {props.name}, a {props.profession} with a passion for creating innovative solutions and learning new technologies.
            </p>
         </section>
    )
    
}

export default About;