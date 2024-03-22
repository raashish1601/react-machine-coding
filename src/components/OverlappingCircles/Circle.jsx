import { CIRCLE_RADIUS } from "../../constants/constants";

function Circle ({ x, y, bgColor }) {
    const top = y - CIRCLE_RADIUS;
    const left = x - CIRCLE_RADIUS;
    return (
        <div
            style={{
                position: 'absolute',
                top: top,
                left: left,
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: bgColor,
            }}
        >
        </div>
    );
}

export default Circle;