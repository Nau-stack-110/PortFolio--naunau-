import { useEffect, useState } from 'react';

export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem("theme") || 
            (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
        } catch {
            return "light";
        }
    })

    useEffect(() => {
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        } try {
            localStorage.setItem("theme", theme);
        } catch { /* empty */ }
    }, [theme]);

    return {theme, setTheme};
}