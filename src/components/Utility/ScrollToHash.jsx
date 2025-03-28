import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }else{
            console.warn(`Element with id ${hash} not found.\n`);
        }
        }
    }, [location]);

    return null;
}