import { Link, useLocation} from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
    const location = useLocation();
    const path = location.pathname;
    console.log(path);

    return (
        <nav class="navbar">
            <span className="name">Rowan Richards</span>
            <Link to="/" className={"navbutton "+(path==="/" ? "active":"")}>Home</Link>
            <Link to="/about" className={"navbutton "+(path==="/about" ? "active":"")}>About</Link>
        </nav>
    );
}