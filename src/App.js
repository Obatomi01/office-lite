import { Fragment } from "react";
import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/home";
import SignUp from "./pages/sign-up";

import ContextProvider from "./store/context";

// const date = ["Nov", "5", "2020"];

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
