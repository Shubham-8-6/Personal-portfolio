import React from "react";
import "./skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const skills = () => {
  return (
    <section id="skills">
      <h5>Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skill_container">
        <div className="skill_desLang">
          <h3>Designing Languages</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsFillPatchCheckFill  className='skill_icons'/>
             <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skill_details">
              <BsFillPatchCheckFill className='skill_icons'/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill_details">
              <BsFillPatchCheckFill className='skill_icons'/>
              <div>
              <h4>BootStrap</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skill_scriLang">
          <h3>Scripting Languages</h3>
          <div className="skill_content">

            <article className="skill_details">
              <BsFillPatchCheckFill className='skill_icons'/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill_details">
              <BsFillPatchCheckFill className='skill_icons'/>
              <div>
              <h4>React-js</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
