import ProjectCard from 'components/ProjectCard/ProjectCard';

import projectList from 'Projects';

import './ProjectsPage.css';

export default function ProjectsPage() {
    return (
        <div id="projects" className="scroll-to-top">
            <h1>Projects</h1>
            <p>This is the projects page.</p>
            <div className="projects-grid">
                {projectList.map((project, index) => project.isFeatured ? <ProjectCard key={index} title={project.title} imgSrc={project.imgSrc} nav={project.navSrc} children={project.description} /> : <></>)}
            </div>
        </div>
    );
}