import React from "react";
import { CTA } from "./CTA";
import header from "./header.module.css";
import ME from "./../../assets/me.png";
import { HeaderSocial } from "./HeaderSocial";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={header.header}>
      <div className={`container ${header.headerContainer}`}>
        <h5>Hello, I`m</h5>
        <h1>Abdul Mannan</h1>
        <h5 className="text-light">#Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className={header.me}>
          <Image src={ME} alt="ME" className={header.realMe} />
        </div>
        <a href="#contact" className={header.scrollDown}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};