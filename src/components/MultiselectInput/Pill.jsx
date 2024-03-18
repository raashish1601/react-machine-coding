import styles from "./Pill.module.scss";

function Pill({ image, text, onClick }) {
    return (
        <span className={styles["userPill"]} onClick={onClick}>
            <img src={image} alt={text} />
            <span>{text} &times;</span>
        </span>
    );
};

export default Pill;