import { Link } from "react-router-dom";

import "./ProjectWrapper.css";

export default function ProjectWrapper({children}){
    return (
        <div id="project-wrapper">
            {children}
            <div className="projects-button-container">
                <Link to="/projects" className="projects-button">View all projects</Link>
            </div>
        </div>
    )
}