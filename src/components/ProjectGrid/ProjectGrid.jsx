import ProjectCard from "components/ProjectCard/ProjectCard";
import projectList from "Projects";


export default function ProjectGrid({onlyFeatured}){
    return (
        <div className="projects-grid">
            {projectList.map((project, index) => (project.isFeatured || !onlyFeatured)  ? <ProjectCard key={index} title={project.title} imgSrc={project.imgSrc} nav={project.navSrc} children={project.description} /> : <></>)}
        </div>
    )
}