import React, { useState, useEffect } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    useEffect(() => {
        const updateScrollPercent = () => {
            let pageScrolled = document.documentElement.scrollTop;
            setScrollPercent((pageScrolled / scrollableHeight) * 100);
        };

        window.addEventListener('scroll', updateScrollPercent);

        return () => {
            window.removeEventListener('scroll', updateScrollPercent);
        };
    }, []);

    return (
        <div className="scroll-indicator-container">
            <div
                className="scroll-indicator"
                style={{ width: `${scrollPercent}%` }}
            ></div>
        </div>
    );
};

export default ScrollIndicator;