import projectList from "Projects";

import { Link } from "react-router-dom";

import "./ProjectStack.css";



export default function ProjectStack() {
    return (
        <div className="project-stack">

            {projectList.map((project, index) =>
            <div key={index} className={"project-row " + (index % 2 === 0 ? "odd" : "")}>
                <div className="project-row__content">
                    <div className="project-row__title">{project.title}</div>
                    <p className="project-row__description">
                        {project.description}
                    </p>
                    <Link to={project.navSrc} className="content-button">
                        See More Details
                    </Link>
                </div>
                <img src={project.imgSrc} alt={project.title} className="project-row__image" />
            </div>
            )}
        </div>
    );
}