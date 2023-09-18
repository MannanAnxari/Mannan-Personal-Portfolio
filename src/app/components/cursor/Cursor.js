// "use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./cursor.css";
import view from "../../assets/cursorView.svg";
import Image from "next/image";

export const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("customCursor");
    const links = document.querySelectorAll("a, button, .customHover");
    const cursorText = document.querySelector(".customView");
    const cursorTextImg = document.querySelector(".customView > img");

    const mouseMoveEvent = (evt) => {
      const { clientX, clientY } = evt;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const mouseEnterEvent = (evt) => {
      const link = evt.target;

      if (link.classList.contains("view")) {
        // cursorText.style.display = "block";
        cursorTextImg.style.transform =
          "translate(1px, -1px) skew(-5deg, -5deg)";
        cursorTextImg.style.opacity = 1;
      }

      gsap.to(cursor, { scale: 4 });
    };

    const mouseLeaveEvent = (evt) => {
      //   cursorText.style.display = "none";
      cursorTextImg.style.opacity = 0;
      cursorTextImg.style.transform =
        "translate(-22px, 22px) skew(-54deg, -54deg)";
      gsap.to(cursor, { scale: 1 });
    };

    document.addEventListener("mousemove", mouseMoveEvent);

    links.forEach((link) => {
      link.addEventListener("mouseenter", mouseEnterEvent);
      link.addEventListener("mouseleave", mouseLeaveEvent);
    });
  }, []);

  return (
    <div className="customCursor" id="customCursor">
      <span className="customView">
        <Image src={view} className="viewImage" />
      </span>
    </div>
  );
};
