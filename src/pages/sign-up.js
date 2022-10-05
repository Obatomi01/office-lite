import { useContext, useRef } from "react";

import styles from "../components/sign-up.module.css";
import HeaderLogo from "../assets/shared/logo.svg";
import { MyContext } from "../store/context";
import Timer from "../components/timer";
import Form from "../components/form";

const SignUp = () => {
  const ctx = useContext(MyContext);
  // const childRef = useRef();

  // console.log(childRef);
  const { time } = ctx;

  ctx.style = "sign-up__timer";

  // const hideOptionsHandler = () => {
  //   console.log("page clicked");
  // };

  return (
    <main className={styles.container}>
      <section className={styles["left-container"]}>
        <nav className="logo">
          <img src={HeaderLogo} />
        </nav>

        <div className={styles.texts}>
          <div className={styles.text}>
            <h1>Work smarter. Save time.</h1>
            <p className="medium-texts">
              Easily manage your projects. Get on the list and receive in-app
              perks available only to early subscribers. We are moving into
              final development and getting ready for official launch soon.
            </p>

            <p className={styles["release-date"]}>
              Coming{" "}
              <span> {`${ctx.date[0]} ${ctx.date[1]} ${ctx.date[2]}`} </span>
            </p>

            <Timer
              className="sign-up__timer"
              initialMinute={time.min}
              initialSeconds={time.sec}
              initialHours={time.hour}
              initialDays={time.day}
            />
          </div>

          <Form />
        </div>
      </section>
      <div className={styles["right-container"]}></div>
    </main>
  );
};

export default SignUp;
