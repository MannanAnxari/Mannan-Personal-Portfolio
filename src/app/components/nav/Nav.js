'use client'
import React, { useEffect, useState } from "react";
import { BiHomeAlt, BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiUser6Line, RiServiceLine } from "react-icons/ri";
import { useRouter,usePathname, useSearchParams } from 'next/navigation';

import nav from "./nav.module.css";

export const Nav = () => {
  const [href, useHref] = useState(window.location.hash || "#");

  const listenToPopstate = () => {
    const winPath = window.location.href;
    useHref(winPath);
  };

  console.log(href);

  useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
 }, [])

  return (
    <nav className={nav.nav}>
      <a href="#" className={`${href.endsWith("#") && nav.active} ${nav.nav_link}`}>
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        className={`${href.endsWith("#about") && nav.active} ${nav.nav_link}`}
      >
        <RiUser6Line />
      </a>
      <a
        href="#experience"
        className={`${href.endsWith("#experience") && nav.active} ${nav.nav_link}`}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={`${href.endsWith("#services") && nav.active} ${nav.nav_link}`}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={`${href.endsWith("#contact") && nav.active} ${nav.nav_link}`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
