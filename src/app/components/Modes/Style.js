import React from "react";
import "./Style.css";

export const Style = ({ mode, setTheme, dispatch }) => {
  return (
    <>
      <div className="iphone">
        <div
          className="trigger"
          onClick={() => dispatch(setTheme(mode === "dark" ? "light" : "dark"))}
        ></div>
        <div className="overlay"></div>
      </div>
    </>
  );
};
