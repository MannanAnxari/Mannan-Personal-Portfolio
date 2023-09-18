import React from "react";
import "./about.css";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import ME from "../../assets/me-about.jpg";  
import Image from "next/image";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export const About = () => {

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImage">
            <Image src={ME} alt="ME" />
          </div>
        </div>
        <div className="aboutContent">
          <div className="aboutCards">
            <article className="aboutCard customHover">
              <BsAward className="aboutIco" />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>
            <article className="aboutCard customHover">
              <FiUsers className="aboutIco" />
              <h5>Skills</h5>
              <small>4+ Languages </small>
            </article>
            <a href="//github.com/MannanAnxari" className="customHover view" target="_blank">
            <article className="aboutCard">
              <AiOutlineFundProjectionScreen className="aboutIco" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            dignissimos tenetur omnis quasi laudantium rem expedita corporis ab
            modi. Omnis voluptatem at quia assumenda quas cumque explicabo quasi
            excepturi architecto.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let`s Talk
          </a>
        </div>
      </div>
    </section>
  );
};
