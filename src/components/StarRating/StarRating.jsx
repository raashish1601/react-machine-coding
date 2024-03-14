import { useState } from "react";
import styles from './StarRating.module.scss';

function StarRating() {
    const [selectedStarsCount, setSelectedStarsCount] = useState(0);

    return (
        <div className={styles['starsContainer']}>
            Star Rating
            <div className={styles['starsContainer_stars']}>
                {[...Array(5)].map((_, index) => {
                    return <span className={styles['starsContainer_stars']} onClick={() => setSelectedStarsCount(index + 1)} key={index}>&#9733;</span>
                })}
            </div>
            Rating Count: {selectedStarsCount}
        </div>
    )
}

export default StarRating;