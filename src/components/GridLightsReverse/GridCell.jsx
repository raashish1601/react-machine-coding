import styles from "./GridCell.module.scss";

function GridCell({ filled, onClick, isDisabled, label }) {
    return (
        <button
            type="button"
            aria-label={label}
            disabled={isDisabled}
            onClick={onClick}
            className={`${styles["cell"]} ${filled ? styles["cellActivated"] : ""}`}/>
    );
}

export default GridCell;