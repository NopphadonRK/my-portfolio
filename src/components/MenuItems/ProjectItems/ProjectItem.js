import "./ProjectItem.css";

function ProjectItem (props) {
    const {project} = props;
    return(
        <div className="ProjectItem">
            <div className="ProjectItem-title">
                <h2 className="ProjectItem-h2">{project.projName}</h2>
            </div>
            <div className="ProjectItem-text">
                <p className="ProjectItem-p">{project.projDescription}</p>
            </div>
        </div>
    );
}

export default ProjectItem;