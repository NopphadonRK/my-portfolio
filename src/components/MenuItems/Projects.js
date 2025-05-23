import AllProject from './ProjectItems/AllProjects';
import './Projects.css';
import ProjectItem from './ProjectItems/ProjectItem';

function Projects () {
    const projectElements = AllProject.map((project, index) => {
        return <ProjectItem key={index} project={project}/>;
    });

    return (
        <div className='Project'>
            <div className='Project-title'>
                <h1 className='Project-title-h1'>PROJECTS</h1>
                <hr className='Project-title-line'/>
            </div>
            <div className='Project-item'>
                {projectElements}
            </div>
        </div>
    );
}

export default Projects;