import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import React from "react";
import { useState, useContext, useRef, useEffect } from "react";

import ArrowDown from "../assets/sign-up/chevron-down-solid.svg";
import ArrowUp from "../assets/sign-up/chevron-up-solid.svg";
import IconCross from "../assets/sign-up/icon-cross.svg";

import "./form.module.css";
import Options from "./options";
import { MyContext } from "../store/context";
import { _parseRelative } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);
const Form = () => {
  const ctx = useContext(MyContext);
  const { optionList } = ctx;

  const [showOptions, setShowOptions] = useState(false);
  const [curOption, setCurOption] = useState(optionList[0]);

  const [textErrorState, setTextErrorState] = useState(false);
  const [emailErrorState, setEmailErrorState] = useState(false);
  const [numberErrorState, setNumberState] = useState(false);

  const initialNameRef = useRef();
  const initialEmailRef = useRef();
  const initialPhoneNumberRef = useRef();
  const initialCompanyRef = useRef();

  const showOptionsHandler = () => {
    setShowOptions(!showOptions);
  };

  const addActiveElementHandler = (id) => {
    const clickedElement = optionList.find((el) => el.id === id);
    setCurOption(clickedElement);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("button clicked");
    console.log(
      (initialNameRef.current.value === initialEmailRef.current.value) === ""
    );
    if (initialNameRef.current.value === "") {
      setTextErrorState(true);

      if (initialEmailRef.current.value === "") {
        setEmailErrorState(true);

        if (initialPhoneNumberRef.current.value === "") {
          {
            setNumberState(true);
            return;
          }
        }
      }
    }

    alert("Form submitted");

    initialNameRef.current.value =
      initialEmailRef.current.value =
      initialPhoneNumberRef.current.value =
        "";
  };

  // TODO i want to use useReducer to handle the error states

  const returnToNormalTextState = () => {
    console.log("button clicked");
    setTextErrorState(false);
  };

  const returnToNormalMailState = () => {
    setEmailErrorState(false);
  };

  const returnToNormalNumberState = () => {
    setNumberState(false);
  };

  const displayCorrespondingError = (text, clickFunction) => {
    return (
      <p className="error-text">
        {text}
        <span>
          <img onClick={clickFunction} src={IconCross} />
        </span>
      </p>
    );
  };

  // const mm = gsap.matchMedia();
  // useEffect(() => {
  //   mm.add("(min-width: 1000px)", () => {
  //     mm.kill();
  //     gsap.fromTo("form", { xPercent: 100 }, { xPercent: 0, duration: 4 });
  //   });

  //   mm.add("(max-width: 1000px)", () => {
  //     mm.kill();
  //     gsap.fromTo(
  //       "form",
  //       { xPercent: 0 },
  //       { xPercent: -135, yPercent: 50, duration: 4 }
  //     );
  //     // gsap.set("form", {
  //     //   x: "0rem",
  //     //   y: "25rem",
  //     //   // left: "50%",
  //     //   // top: "50%",
  //     // });
  //   });
  // }, []);

  return (
    <form onSubmit={submitFormHandler}>
      {textErrorState ? (
        displayCorrespondingError(
          "Please fill this field",
          returnToNormalTextState
        )
      ) : (
        <input placeholder="Name" type="name" ref={initialNameRef} />
      )}

      {emailErrorState ? (
        displayCorrespondingError(
          "Please fill this mail field",
          returnToNormalMailState
        )
      ) : (
        <input placeholder="Email Address" type="email" ref={initialEmailRef} />
      )}

      <p className="icon" onClick={showOptionsHandler}>
        {curOption.mainText} {curOption.subText}
        <span>
          <img
            className="icon-arrow"
            src={!showOptions ? ArrowDown : ArrowUp}
            onClick={showOptionsHandler}
          />
        </span>
      </p>

      {showOptions && (
        <Options
          onAddActiveElement={addActiveElementHandler}
          activeEl={curOption}
        />
      )}

      {numberErrorState ? (
        displayCorrespondingError(
          "Please fill this field",
          returnToNormalNumberState
        )
      ) : (
        <input placeholder="Phone Number" ref={initialPhoneNumberRef} />
      )}
      <input placeholder="Company" ref={initialCompanyRef} />
      <button type="submit" className="medium-texts normal-btn">
        Get on the list
      </button>
    </form>
  );
};

export default Form;
