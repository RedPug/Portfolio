import { Link } from "react-router-dom";



import './TableOfContents.css';

export default function TableOfContents({sections}){
    function renderSections(sections) {
        return (
            <ul className="toc-list">
                {sections.map((section, index) => (
                    <li key={`${index}`}>
                        <Link to={section.target} className="link">{section.title}</Link>
                        {section.children && section.children.length > 0 && renderSections(section.children)}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div id="table-of-contents">
            <h2>Table of Contents</h2>
            <div className="toc-items">
                {renderSections(sections)}
            </div>
        </div>
    );
}