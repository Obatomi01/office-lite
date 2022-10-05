import { useState, useContext, useRef, useCallback, useMemo } from "react";
// import { memo } from "react";

import IconCheck from "../assets/sign-up/icon-check.svg";

import styles from "./options.module.css";
import { MyContext } from "../store/context";

let item;
const Options = (props) => {
  // console.log("ran");
  const ctx = useContext(MyContext);
  const { optionList } = ctx;
  const [isActive, setIsActive] = useState(props.activeEl); // this itself is a problem try to save the active state state before rerendering

  console.log(isActive.id);

  const setActiveHandler = (id) => {
    console.log(id);
    const clickedElement = optionList.find((el) => el.id === id);
    setIsActive(clickedElement);
    props.onAddActiveElement(id);
  };

  // const presentOptions = useMemo(() => setActiveHandler(isActive), [isActive]);

  // console.log(presentOptions);

  const changeActiveOption = useCallback(
    () => setActiveHandler(isActive),
    [isActive]
  );

  // TODO the optionList returns to the default of the active class been on the first element. Prevent this action
  // TODO change the initial state

  return (
    <ul className={styles.options}>
      {/* <li onClick={setActiveHandler}>
        Basic Pack <span>Free</span>
      </li>
      <li onClick={setActiveHandler}>
        Pro Pack <span>$9.99</span>
      </li>
      <li onClick={setActiveHandler}>
        Ultimate Pack <span>$19.99</span>
      </li> */}
      {optionList.map((el) => (
        <li
          onClick={setActiveHandler.bind(null, el.id)}
          key={el.id}
          className="icon"
        >
          {el.mainText} {el.subText}
          {isActive.id === el.id ? <img src={IconCheck} /> : ""}
        </li>
      ))}
    </ul>
  );
};

export default Options;
