
import { useState } from "react";
import { GRID_LIGHTS_CONFIG } from "../../constants/constants";
import GridCell from "./GridCell";
import styles from "./GridLightsReverse.module.scss";

function GridLightsReverse() {
    const [order, setOrder] = useState([]);
    const [isDeactivating, setIsDeactivating] = useState(false);

    const deactivateCells = () => {
        setIsDeactivating(true);
        const timer = setInterval(() => {
            setOrder((origOrder) => {
                const newOrder = origOrder.slice();
                newOrder.pop();

                if (newOrder.length === 0) {
                    clearInterval(timer);
                    setIsDeactivating(false);
                }

                return newOrder;
            });
        }, 300);
    };
    const activateCells = (index) => {
        const newOrder = [...order, index];
        setOrder(newOrder);
        // deactivate
        if (newOrder.length === GRID_LIGHTS_CONFIG.flat(1).filter(Boolean).length) {
            deactivateCells();
        }
    };

    return (
        <div className={styles["wrapper"]}>
            <div
                className={styles["wrapper_grid"]}
            >
                {GRID_LIGHTS_CONFIG.flat(1).map((value, index) => {
                    return value ? (
                        <GridCell
                            key={index}
                            label={`Cell ${index}`}
                            filled={order.includes(index)}
                            onClick={() => activateCells(index)}
                            isDisabled={order.includes(index) || isDeactivating}
                        />
                    ) : (
                        <span />
                    );
                })}
            </div>
        </div>
    );
}

export default GridLightsReverse;