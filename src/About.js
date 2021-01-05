import React from "react";
import svgArrow from "./assets/svgArrow";
import { AnimatePresence, motion } from "framer-motion";
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
function About() {
  return (
    <motion.div
      className="hero is-fullheight is-primary "
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
      <div className="hero-head mt-6">
        <Link to="/">
          <motion.button
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
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
        <div className="container has-text-centered">
          <h1 className="title  is-size-1 pt-6 mt-6" id="aboutitle">
            About me
          </h1>
        </div>
      </div>

      <div className="hero-body has-text-justified ">
        <div className="container has-text-justified">
          <p className="aboutP1 is-size-5 mb-5 " id="aboutP1">
            Hello! I'm <span id="myname">Darwin</span>, an electronics and
            communications engineer that has a passion on{" "}
            <span id="frontend">front end web development.</span> I enjoy
            creating things that live on the internet, whether that be websites,
            applications, or anything in between. My goal is to always build
            products that provide pixel-perfect, performant experiences.
          </p>

          <p className="is-size-5 mb-5" id="aboutP1">
            When I'm not on the computer, I enjoy lifting weights, running, and
            petting dogs.
          </p>

          <p className="is-size-5 mb-2" id="aboutP1">
            Here are a few technologies I've been working with recently:
          </p>

          <div>
            <div className="columns" id="techisusename">
              <div className="column is-4">
                <h3 className="techsiuse">
                  <span id="arrowname">►</span>{" "}
                  <span className="techname2">JavaScript (ES6+)</span>
                </h3>
                <h3 className="techsiuse">
                  <span id="arrowname">►</span>{" "}
                  <span className="techname2">React</span>
                </h3>
                <h3 className="techsiuse">
                  <span id="arrowname">►</span>{" "}
                  <span className="techname2"> Node.js</span>
                </h3>
              </div>
              <div className="column is-4">
                <div className="techiuse">
                  <span id="arrowname">►</span>{" "}
                  <span className="techname2">HTML & CSS</span>
                </div>
                <div className="techiuse">
                  <span id="arrowname">►</span>{" "}
                  <span className="techname2">Vue</span>
                </div>
                <div className="techiuse">
                  <span id="arrowname">►</span>{" "}
                  <span className="techname2"> Express</span>
                </div>
              </div>
              <div className="column is-4"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
