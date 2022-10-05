import { Link } from "react-router-dom";

import HeaderLogo from "../assets/shared/logo.svg";
import styles from "./header.module.css";
import HeaderPicture from "../assets/home/illustration-charts.svg";
import HeaderPattern from "../assets/home/bg-pattern-header.svg";

const Header = () => {
  // const boxRef = useRef();

  // // wait until DOM has been rendered
  // useEffect(() => {
  //   gsap.to(boxRef.current, { rotation: "+=360" });
  // });

  return (
    <header>
      <nav className="logo">
        <img src={HeaderLogo} />
      </nav>

      <div className={styles["header-contents"]}>
        <div className={styles["header-description"]}>
          <h1>A simple solution to complex tasks is coming soon</h1>
          <p className="medium-texts">
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </p>

          <Link to="/sign-up">
            <button type="button" className="medium-texts normal-btn">
              Get started
            </button>
          </Link>
        </div>

        <div className={styles["header-images"]}>
          <img src={HeaderPattern} />
          <img src={HeaderPicture} />
        </div>
      </div>
    </header>
  );
};

export default Header;
