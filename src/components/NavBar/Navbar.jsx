import { Link, useLocation} from 'react-router-dom';

import './Navbar.css';


export default function Navbar() {

    return (
        <header>
        <div class="navbar">
            <span className="name">Rowan Richards</span>
            <NavButton path="/home">Home</NavButton>
            <NavButton path="/about">About</NavButton>
            <NavButton path="/projects">Projects</NavButton>
        </div>
        </header>
    );
}

function NavButton({path, children}) {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <Link to={path} className={"navbutton "+(currentPath === path ? "active" : "")}>{children}</Link>
    );
}