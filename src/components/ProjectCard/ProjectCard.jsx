import { Link } from 'react-router-dom';

import './ProjectCard.css';

export default function ProjectCard({title, nav, imgSrc, children}) {
    // const {title, description, imgSrc} = props;
    return (
        <div className="project-card">
        <Link to={nav} className="project-card__content">
                <img src={imgSrc} alt={title} className="project-card__image" />
                <h1>{title}</h1>
                <p>{children}</p>
        </Link>
        </div>
    );
}