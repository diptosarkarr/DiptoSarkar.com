import Link from 'next/link';
import React, { useState, useEffect, useMemo, useRef } from 'react';

const Navigation = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [activeLink, setActiveLink] = useState('about');
    const observer = useRef(null);

    // Use useMemo to memoize navItems array
    const navItems = useMemo(() => [
        { label: 'About Me', id: 'about' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Services', id: 'services' },
        { label: 'Resume', id: 'resume' },
        { label: 'Blog', id: 'blog' },
        { label: 'Contact', id: 'contact' },
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const headerHeight = document.getElementById('header')?.clientHeight || 0;
            setIsFixed(scrollY >= headerHeight);
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7, // 60% of element should be visible before it is considered "intersecting"
        };

        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, options);

        // Observe each section
        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.current.observe(element);
            }
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [navItems]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
        setActiveLink(id);
    };

    return (
        <div className="nav-wrapper">
            <div className={`section-nav ${isFixed ? 'fixed' : ''}`}>
                <ul className="nav">
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.id}>
                            <a
                                onClick={() => scrollToSection(item.id)}
                                className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                            >
                                <span className="nav-link-desktop">{item.label}</span>
                                <span className="nav-link-mobile">{item.label.charAt(0)}</span>
                                <span className="nav-circle"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
