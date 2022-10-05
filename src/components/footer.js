import { useRef, React, useEffect, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link } from "react-router-dom";

import styles from "./footer.module.css";
import { MyContext } from "../store/context";
import Timer from "./timer";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const ctx = useContext(MyContext);

  const curDate = new Date(); // today's date
  const countdownRef = useRef(" ");

  useEffect(() => {
    gsap.to(countdownRef.current, {
      scrollTrigger: {
        trigger: ".animate",
        onEnter: ({ progress, direction, isActive }) => {
          if (isActive) {
            gsap.fromTo(
              ".animate",
              { marginTop: "10.4rem" },
              { marginTop: "2.4rem", duration: 3 }
            );
          }
        },
      },
    });
  }, []);

  // TODO  get the count down component
  // TODO  you might need context for the days, hours, min and sec

  const curMonth = +(curDate.getMonth() + 1);
  const curYear = +curDate.getFullYear();
  const curDay = +curDate.getDate();

  const releaseDate = new Date(curYear, curMonth, curDay); // TODO this should be saved to the localstorage and fetched when reloaded

  const dateArr = releaseDate.toString().split(" ");

  const timeDifference = releaseDate.getTime() - curDate.getTime();
  // console.log(timeDifference);

  //setting the dates
  ctx.date[0] = dateArr[2];
  ctx.date[1] = dateArr[1];
  ctx.date[2] = dateArr[3];

  const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const hourDifference = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minDifference = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );

  const secDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);

  ctx.time = {
    min: minDifference,
    sec: secDifference,
    day: dayDifference,
    hour: hourDifference,
  };

  ctx.style = "home-timer";
  return (
    <section className={styles.footer}>
      <div className="container">
        <p className={styles["release-date"]}>
          Coming <span> {`${dateArr[2]} ${dateArr[1]} ${dateArr[3]}`}</span>
        </p>
      </div>

      <div
        className={`container animate ${styles["timer--container"]}`}
        ref={countdownRef}
      >
        <Timer
          className="footer__times"
          initialMinute={minDifference}
          initialSeconds={secDifference}
          initialHours={hourDifference}
          initialDays={dayDifference}
        />

        <Link to="/sign-up">
          <button type="button">Get started</button>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
