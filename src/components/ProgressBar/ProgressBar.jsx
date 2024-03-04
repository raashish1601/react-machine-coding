import { useEffect, useState } from "react";
import { PROGRESS_BAR_MIN_VALUE, PROGRESS_BAR_MAX_VALUE } from "../../constants/constants";
import styles from './ProgressBar.module.scss';

function ProgressBar({ value = 0, onComplete = () => {} }) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(Math.max(value, PROGRESS_BAR_MIN_VALUE), PROGRESS_BAR_MAX_VALUE));

    if (value >= PROGRESS_BAR_MAX_VALUE) {
      onComplete();
    }
  }, [value]);

  return (
    <div className={styles['progress']}>
      <span
        style={{
          color: percent > 49 ? "white" : "black"
        }}
      >
        {percent.toFixed()}%
      </span>
      <div
        // style={{ width: `${percent}%` }}
        style={{
          transform: `scaleX(${percent / PROGRESS_BAR_MAX_VALUE})`,
          transformOrigin: "left"
        }}
        aria-valuemin={PROGRESS_BAR_MIN_VALUE}
        aria-valuemax={PROGRESS_BAR_MAX_VALUE}
        aria-valuenow={percent}
        role="progressbar"
      />
    </div>
  );
}

export default ProgressBar;