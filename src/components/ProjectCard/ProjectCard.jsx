import { Link } from 'react-router-dom';

import './ProjectCard.css';

export default function ProjectCard({title, nav, imgSrc, children}) {
    return (
        <div className="project-card">
            <div className="project-card__content">
            <Link to={nav}>
                    <div className="project-card__title">{title}</div>
                    <img src={imgSrc} alt={title} className="project-card__image" />
                    <div>
                        {children}
                    </div>
            </Link>
            </div>
        </div>
    );
}