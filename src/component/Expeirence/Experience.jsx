import React from "react";
import "./Experience.css";
import {BsPatchCheckFill} from "react-icons/bs"

let Experience = () => {
  return (
    <section id="expirence">
      <h5>what skill i have</h5>
      <h2>My Experience</h2>

      <div className="container expirence__container">
        <div className="expirence__frontend">
          <h3 >Frontend Development</h3>
          <div className="expirence__content">

            <article className="expirence__details">
            < BsPatchCheckFill className="expirence__details-icons" />
         <div>
         <h4>HTML</h4>
            <small className="text-light">experienced</small>
         </div>
            </article>

            <article className="expirence__details">
            < BsPatchCheckFill className="expirence__details-icons" />
           <div> <h4>CSS</h4>
            <small className="text-light">Intermediate</small></div>
            </article>

            <article className="expirence__details">
            < BsPatchCheckFill className="expirence__details-icons" />
            <div><h4>JavaScript</h4>
            <small className="text-light">Intermediate</small></div>
            </article>

            <article className="expirence__details">
            < BsPatchCheckFill className="expirence__details-icons" />
          <div>  
            <h4>React.js</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
