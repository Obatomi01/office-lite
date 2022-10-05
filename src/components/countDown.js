// component responsible for the countdown
import { useContext } from "react";

import { MyContext } from "../store/context";

import styles from "./footer.module.css";

const CountDown = (props) => {
  const ctx = useContext(MyContext);

  return (
    <div className={ctx.style}>
      <h1>{props.hText}</h1>
      <p className="small-texts">{props.pText}</p>
    </div>
  );
};

export default CountDown;
