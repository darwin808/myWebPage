import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import SvgContainer from "./SvgContainer";
import Navbarv2 from "./Navbarv2";

export default function BodyMe() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } },
    exit: { x: "-100vw", transition: { ease: "easeInOut" } },
  };

  const emailMe = () => {
    window.location = "mailto:darwinnn.darwinnn@gmail.com";
  };

  const [showSvg, setshowSvg] = useState(true);
  setTimeout(() => {
    setshowSvg(false);
  }, 4000);

  return (
    <motion.div
      variants={containerVariant}
      // initial="hidden"
      animate="visible"
      className="hero"
      exit="exit"
      id="BodyMe-container">
      {/* <Navbar /> */}
      <Navbarv2 />
      <SvgContainer showSvg={showSvg} />
      <div className="container" id="LeftBody">
        <motion.h1
          initial={{ y: +30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 4.9,
              duration: 1,
              type: "spring",
              stiffness: 30,
            },
          }}
          className="head0">
          Hi, my name is
        </motion.h1>
        <motion.h1
          initial={{ y: +30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 5,
              duration: 1,
              type: "spring",
              stiffness: 30,
            },
          }}
          className="head1">
          <b>Darwin Apolinario.</b>
        </motion.h1>
        <motion.h1
          initial={{ y: +30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 5.1,
              duration: 1,
              type: "spring",
              stiffness: 30,
            },
          }}
          className="head2">
          {" "}
          Front End
        </motion.h1>
        <motion.h1
          initial={{ y: +30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 5.2,
              duration: 1,
              type: "spring",
              stiffness: 30,
            },
          }}
          className="head3">
          Web Developer.
        </motion.h1>
        <motion.button
          initial={{ y: +30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 5.3,
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
          transition={{ type: "spring", stiffness: 300 }}
          id="button1"
          className="button"
          onClick={emailMe}>
          Get in Touch
        </motion.button>
      </div>

      <div id="socialMedia" className="mr-6 ml-6 mb-3">
        <motion.div className="leflinks">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 7,
                duration: 1,
                type: "spring",
                stiffness: 30,
              },
            }}>
            <a href="https://github.com/darwin808">
              <i class="fab fa-github fa-2x ml-6 mr-6"></i>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 7,
                duration: 1,
                type: "spring",
                stiffness: 30,
              },
            }}>
            <a href="https://www.instagram.com/darwinnn.nnn/">
              <i class="fab fa-instagram fa-2x mr-6"></i>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 7,
                duration: 1,
                type: "spring",
                stiffness: 30,
              },
            }}>
            <a href="https://twitter.com/darwinnn_n">
              {" "}
              <i class="fab fa-twitter fa-2x mr-6"></i>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 7,
                duration: 1,
                type: "spring",
                stiffness: 30,
              },
            }}>
            <a href="https://www.linkedin.com/in/darwin-apolinario-35b084114/">
              <i class="fab fa-linkedin fa-2x mr-6"></i>
            </a>
          </motion.div>
        </motion.div>
        <div className="rightlinks"></div>
      </div>
    </motion.div>
  );
}
