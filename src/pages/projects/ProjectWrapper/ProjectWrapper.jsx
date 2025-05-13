import { Link } from "react-router-dom";

import banner from "assets/projects/shared/media/blueprint-background-tile.jpg";

import "./ProjectWrapper.css";

export default function ProjectWrapper({children, title}){
    return (
        <div id="project-page">
            <div id="project-wrapper">
                <div className="banner">
                    <div className="banner-inner" style={{backgroundImage:`url(${banner})`}}>
                        <div className="banner-header">
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>

                <hr className="big"/>

                {children}
                
                <div className="projects-button-container">
                    <Link to="/#projects" className="projects-button">Go Back</Link>
                </div>
            </div>
        </div>
    )
}