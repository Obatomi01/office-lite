import React from "react";

const ctx = {
  date: [],
  time: {},
  style: "",
  optionList: [
    {
      id: "l1",
      className: "option",
      mainText: "Basic Pack",
      subText: "Free",
    },
    {
      id: "l2",
      className: "option",
      mainText: "Pro Pack",
      subText: "$9.99",
    },
    {
      id: "l3",
      className: "option",
      mainText: "Ultimate Pack",
      subText: "$19.99",
    },
  ],
};

export const MyContext = React.createContext(ctx);

const ContextProvider = (props) => {
  return <MyContext.Provider value={ctx}>{props.children}</MyContext.Provider>;
};

export default ContextProvider;
