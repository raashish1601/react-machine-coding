import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import styles from './ProgressBarWrapper.module.scss';

function ProgressBarWrapper() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 0.1);
    }, 20);
  }, []);

  return (
    <div className={styles['progressBarWrapper']}>
      <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
}

export default ProgressBarWrapper;