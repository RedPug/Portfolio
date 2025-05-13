import { Link, useLocation} from 'react-router-dom';

import { useEffect, useRef} from 'react';

import './Navbar.css';


export default function Navbar() {

    const headerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
        }
    }, []);

    return (
        <header ref={headerRef}>
        <div class="navbar">
            {/* <span className="name">Rowan Richards</span> */}
            <NavButton path="/" className="name"><span >Rowan Richards</span></NavButton>
            <NavButton path="/#about">About</NavButton>
            <NavButton path="/#projects">Projects</NavButton>
            <NavButton path="/#contact">Contact</NavButton>
        </div>
        </header>
    );
}

function NavButton({path, children, className}) {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <Link to={path} className={"navbutton "+(currentPath === path ? "active" : "") + " " + className}>{children}</Link>
    );
}