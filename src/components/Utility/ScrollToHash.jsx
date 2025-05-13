import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        const handleHashChange = () => {
            const hash = location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    //add delay to allow for navigation to complete before scrolling.
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                } else {
                    console.warn(`Element with id ${hash} not found.\n`);
                }
            }
        };

        // Run on initial load
        handleHashChange();

        // Listen for hash changes
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [location]);

    return null;
}