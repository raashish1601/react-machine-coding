import React, { useState } from "react";
import "./SliderProgressUI.css";

function SliderProgressUI() {
    const [rangePercentage, setRangePercentage] = useState(10);

    return (
        <>
            <input
                type="range"
                id="inputHandler"
                value={rangePercentage}
                onChange={(e) => setRangePercentage(parseInt(e.target.value))}
            />
            <div className="piechart" style={{ '--percentage': `${rangePercentage}%` }}></div>
        </>
    )
}

export default SliderProgressUI;
