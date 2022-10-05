import React from "react";
import { useState, useEffect } from "react";

import CountDown from "./countDown";
import styles from "./footer.module.css";

const Timer = (props) => {
  const [minutes, setMinutes] = useState(props.initialMinute);
  const [seconds, setSeconds] = useState(props.initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
          //   setHours(hours);
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className={styles[props.className]}>
      <CountDown hText={props.initialDays} pText="days" />
      <CountDown hText={props.initialHours} pText="hours" />
      <CountDown hText={minutes} pText="min" />
      <CountDown hText={seconds} pText="sec" />
    </div>
  );
};

export default Timer;
