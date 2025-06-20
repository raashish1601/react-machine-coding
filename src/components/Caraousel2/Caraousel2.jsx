import React, { useState, useEffect, useRef } from 'react';

const items = [
    {
        image: "https://intellsys-optimizer.b-cdn.net/interviews/b1435960-88bd-4325-8051-6abef2b79c39/578e72e8-614f-4fc5-a355-d3d872778f16/1.png",
        text: "I am Card 1",
    },
    {
        image: "https://intellsys-optimizer.b-cdn.net/interviews/b1435960-88bd-4325-8051-6abef2b79c39/578e72e8-614f-4fc5-a355-d3d872778f16/2.png",
        text: "I am Card 2",
    },
    {
        image: "https://intellsys-optimizer.b-cdn.net/interviews/b1435960-88bd-4325-8051-6abef2b79c39/578e72e8-614f-4fc5-a355-d3d872778f16/3.png",
        text: "I am Card 3",
    },
    {
        image: "https://intellsys-optimizer.b-cdn.net/interviews/b1435960-88bd-4325-8051-6abef2b79c39/578e72e8-614f-4fc5-a355-d3d872778f16/4.png",
        text: "I am Card 4",
    }
];

function Caraousel2() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const scrollRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const startAutoSlide = () => {
        stopAutoSlide(); // Ensure no duplicate intervals
        intervalRef.current = setInterval(scrollRight, 3000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startAutoSlide();

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                scrollLeft();
            } else if (e.key === 'ArrowRight') {
                scrollRight();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            stopAutoSlide();
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div
            ref={carouselRef}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
            style={{ position: 'relative', maxWidth: '600px', margin: 'auto' }}
        >
            <div style={{ display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                <button onClick={scrollLeft} style={{ zIndex: 1, position: 'absolute', left: 0 }}>{'<'}</button>
                <div
                    style={{
                        display: 'flex',
                        transition: 'transform 0.5s ease',
                        transform: `translateX(-${currentIndex * 100}%)`,
                        width: '100%',
                    }}
                >
                    {items.map((item, index) => (
                        <div key={index} style={{ flex: '0 0 100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={item.image} alt={item.text} style={{ width: '100%', transition: 'opacity 0.5s ease' }} />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <button onClick={scrollRight} style={{ zIndex: 1, position: 'absolute', right: 0 }}>{'>'}</button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                {items.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleDotClick(index)}
                        style={{
                            cursor: 'pointer',
                            margin: '0 5px',
                            borderRadius: '50%',
                            backgroundColor: index === currentIndex ? 'blue' : 'gray',
                            width: '10px',
                            height: '10px',
                            display: 'inline-block',
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Caraousel2;
