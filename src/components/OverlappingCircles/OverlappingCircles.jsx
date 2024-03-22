import { useState } from "react";
import Circle from "./Circle";
import { CIRCLE_RADIUS } from "../../constants/constants";

function OverlappingCircles() {
    const [circleCords, setCircleCords] = useState([]);

    const generateRandomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
        // const letters = "0123456789ABCDEF";
        // let color = "#";
        // for (let i = 0; i < 6; i++) {
        //     color += letters[Math.floor(Math.random() * 16)];
        // }
        // return color;
    }

    const isCircleOverlapping = (currX, currY, prevX, prevY) => {
        const dist = ((currX - prevX) * (currX - prevX)) + ((currY - prevY) * (currY - prevY))
        return (dist <= ((CIRCLE_RADIUS + CIRCLE_RADIUS) * (CIRCLE_RADIUS + CIRCLE_RADIUS)))
    }

    const clickHandler = (event) => {
        const currX = event.clientX;
        const currY = event.clientY;
        let color = "cyan"
        setCircleCords((prevState) => {
            for (let i of prevState) {
                if (isCircleOverlapping(currX, currY, i.x, i.y)) {
                    color = generateRandomColor()
                    break
                }
            }
            return [
                ...prevState,
                { x: currX, y: currY, key: Date.now(), color: color }
            ]
        })
    }

    return (
        <div onClick={clickHandler} style={{ width: "100vw", height: "100vh" }}>
            <h1 style={{ textAlign: "center" }}>Hello</h1>
            {
                circleCords.map((item) => {
                    return (
                        <Circle
                            x={item.x}
                            y={item.y}
                            key={item.key}
                            bgColor={item.color}
                        />
                    )
                })
            }
        </div>
    );
};

export default OverlappingCircles;