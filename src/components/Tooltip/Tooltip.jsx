import styles from "./Tooltip.module.scss";

function Tooltip({ children, message, position }) {

    const getClassName = () => {
        if (position.startsWith('top'))
            return 'top'
        if (position.startsWith('right'))
            return 'right'
        if (position.startsWith('bottom'))
            return 'bottom'
        if (position.startsWith('left'))
            return 'left'
    }

    return (
        <div className={styles['tooltip']}>
            <div className={styles['tooltip_head']}>
                {children}
                <div className={`${styles['tooltip_head--message']} ${styles[`tooltip_head--message-${getClassName()}`]}`}>
                    <div className={`${styles['tooltip_head--message--text']} ${styles[`tooltip_head--message--${position}`]}`}>
                        {message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tooltip;