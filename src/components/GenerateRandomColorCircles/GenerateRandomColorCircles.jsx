import React, { useState } from "react";
import styles from './GenerateRandomColorCircles.module.scss';

function GenerateRandomColorCircles() {
    const [circles, setCircles] = useState([]);

    const handleClick = (event) => {
        const { clientX, clientY } = event;
        const color = getRandomColor();
        const circle = { id: Date.now(), x: clientX, y: clientY, color };
        setCircles((prevCircles) => [...prevCircles, circle]);
    };
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className={styles['randomColorCirclesWrapper']} onClick={handleClick}>
            Click anywhere on screen to see magic!!!
            {circles.map((circle) => (
                <div
                    key={circle.id}
                    style={{
                        position: "absolute",
                        left: circle.x - 31 ,
                        top: circle.y - 233,
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: circle.color,
                    }}
                ></div>
            ))}
        </div>
    );
}

export default GenerateRandomColorCircles;
