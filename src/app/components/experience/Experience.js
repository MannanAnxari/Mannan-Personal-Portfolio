import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experienceContainer">
        <div className="experienceFrontEnd">
          <h3>Frontend Development</h3>
          <div className="experienceContent">
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>React JS/Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>Next JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>Dart (Flutter)</h4>
                <small className="text-light">Personal Projects</small>
              </div>
            </article>
          </div>
        </div>
        {/* End Frontend  */}
        <div className="experienceBackEnd">
          <h3>Backend Development</h3>
          <div className="experienceContent">
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className="experienceDetailsIco" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
