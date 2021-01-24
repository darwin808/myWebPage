import React from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  BrowserRouter,
  Switch,
  useHistory,
  useLocation,
  Link,
} from "react-router-dom";

import P1 from "./assets/ProjectComponents.js/P1";
import P2 from "./assets/ProjectComponents.js/P2";
import P3 from "./assets/ProjectComponents.js/P3";
import P4 from "./assets/ProjectComponents.js/P4";
import P5 from "./assets/ProjectComponents.js/P5";
import P6 from "./assets/ProjectComponents.js/P6";
import P7 from "./assets/ProjectComponents.js/P7";
import P8 from "./assets/ProjectComponents.js/P8";
import P9 from "./assets/ProjectComponents.js/P9";

import svgArrow from "./assets/svgArrow";

export default function Projects() {
  return (
    <motion.section
      className="hero is-fullheight is-primary"
      id="project-container"
      initial={{ x: "100vw", opacity: 1 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 30,
        },
      }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}>
      <div className="hero-head">
        <div className="arrow-container ml-3 mt-4">
          <Link to="/">
            <motion.button
              initial={{ y: 0, opacity: 1 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 1,
                  type: "spring",
                  stiffness: 30,
                },
              }}
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px #64ffda",
                boxShadow: "0px 0px 8px #64ffda",
              }}
              transition={{ type: "spring", stiffness: 500 }}
              className="button ml-6"
              id="button1">
              ◄ Go Back
            </motion.button>
          </Link>
        </div>

        <div className="container has-text-centered">
          {" "}
          <h1
            className="title  is-size-1 mt-4 is-family-monospace"
            id="projectName">
            Projects
          </h1>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4">
              <P6 />
            </div>
            <div class="column is-4">
              <P5 />
            </div>
            <div class="column is-4">
              <P7 />
            </div>
          </div>

          <div class="columns">
            <div class="column is-4">
              <P1 />
            </div>
            <div class="column is-4">
              <P2 />
            </div>
            <div class="column is-4">
              <P8 />
            </div>
          </div>

          <div class="columns">
            <div class="column is-4">
              <P4 />
            </div>
            <div class="column is-4">
              <P3 />
            </div>
            <div class="column is-4">
              <P9 />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
