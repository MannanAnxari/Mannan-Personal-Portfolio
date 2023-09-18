import React from "react";
// import CV from "./../../assets/cv.pdf";
import header from "./header.module.css";

export const CTA = () => {
  return (
    <div className={header.cta}>
      <a href={"CV"} download className="btn view">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">Let`s Talk</a>
    </div>
  );
};
