import './ProjectsPage.css';
import ProjectGrid from 'components/ProjectGrid/ProjectGrid';

export default function ProjectsPage() {
    return (
        <div id="projects">
            <h1>Projects</h1>
            <p>This is the projects page.</p>
            <ProjectGrid onlyFeatured={false} />
        </div>
    );
}