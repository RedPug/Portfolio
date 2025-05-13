import ProjectStack from 'components/ProjectStack/ProjectStack';
import './ProjectsPage.css';

export default function ProjectsPage() {
    return (
        <div id="projects">
            <h1>Projects</h1>
            <ProjectStack onlyFeatured={false} />
        </div>
    );
}