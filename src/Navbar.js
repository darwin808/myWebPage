import React, { useState } from "react";
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

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const gotoproj = () => {
    history.push("/project");
  };

  const CompVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      scale: 4,
    },
    visible: {
      scale: 4,
      opacity: 1,
      pathLength: 1,
      transition: { duration: 3, ease: "easeInOut" },
    },
    exit: { opacity: [1, 0.8, 0.6, 0.4, 0] },
  };

  // const [showSvg, setshowSvg] = useState(true);
  // setTimeout(() => {
  //   setshowSvg(false);
  // }, 4000);
  const gotohome = () => {
    history.push("/");
  };

  const DLCV = () => {
    window.location.href =
      "https://firebasestorage.googleapis.com/v0/b/main-ecom1.appspot.com/o/Darwin%20Apolinario%20CV%20(1).docx?alt=media&token=5a773af7-d2f3-4f1f-95f9-bb09558c5457";
  };
  return (
    <nav class="navbar is-transparent mt-6 mr-6 ml-6" id="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <h1 className="title ml-6" id="DDDD">
            <div></div>
          </h1>
        </a>

        {/* <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}

        <AnimatePresence>
          <motion.svg
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100">
            <motion.path
              d="M37 0.766012L50.54 16.481L50.6306 16.5863L50.7626 16.6297L71.3728 23.4059L59.1203 39.8263L59.0272 39.951L59.0214 40.1065L58.2719 59.9614L37.126 54.4561L37 54.4233L36.874 54.4561L15.7281 59.9614L14.9786 40.1065L14.9728 39.951L14.8797 39.8263L2.62723 23.4059L23.2374 16.6297L23.3694 16.5863L23.46 16.481L37 0.766012Z"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 6,
                  duration: 1,
                  type: "spring",
                  stiffness: 30,
                },
              }}

              // variants={pathVariants}
              // initial="hidden"
              // animate="visible"
              // exit="exit"
            />
            <motion.path
              d="M45.7012 33.0869C45.7012 36.6807 44.7588 39.4004 42.874 41.2461C40.9893 43.082 38.2207 44 34.5684 44H29.4414V22.584H35.2275C38.6455 22.584 41.2432 23.4775 43.0205 25.2646C44.8076 27.0518 45.7012 29.6592 45.7012 33.0869ZM44.0752 33.1455C44.0752 30.0791 43.2939 27.7744 41.7314 26.2314C40.1787 24.6787 37.8936 23.9023 34.876 23.9023H30.9355V42.6816H34.4805C40.877 42.6816 44.0752 39.5029 44.0752 33.1455Z"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 6,
                  duration: 1,
                  type: "spring",
                  stiffness: 30,
                },
              }}

              // variants={pathVariants}
              // initial="hidden"
              // animate="visible"
              // exit="exit"
            />
          </motion.svg>
        </AnimatePresence>
      </div>

      <header className="navbar-menu">
        <div className="navbar-start" id="logo">
          <AnimatePresence>
            <motion.svg
              className="pizza-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100">
              <motion.path
                d="M37 0.766012L50.54 16.481L50.6306 16.5863L50.7626 16.6297L71.3728 23.4059L59.1203 39.8263L59.0272 39.951L59.0214 40.1065L58.2719 59.9614L37.126 54.4561L37 54.4233L36.874 54.4561L15.7281 59.9614L14.9786 40.1065L14.9728 39.951L14.8797 39.8263L2.62723 23.4059L23.2374 16.6297L23.3694 16.5863L23.46 16.481L37 0.766012Z"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 6,
                    duration: 1,
                    type: "spring",
                    stiffness: 30,
                  },
                }}

                // variants={pathVariants}
                // initial="hidden"
                // animate="visible"
                // exit="exit"
              />
              <motion.path
                d="M45.7012 33.0869C45.7012 36.6807 44.7588 39.4004 42.874 41.2461C40.9893 43.082 38.2207 44 34.5684 44H29.4414V22.584H35.2275C38.6455 22.584 41.2432 23.4775 43.0205 25.2646C44.8076 27.0518 45.7012 29.6592 45.7012 33.0869ZM44.0752 33.1455C44.0752 30.0791 43.2939 27.7744 41.7314 26.2314C40.1787 24.6787 37.8936 23.9023 34.876 23.9023H30.9355V42.6816H34.4805C40.877 42.6816 44.0752 39.5029 44.0752 33.1455Z"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 6,
                    duration: 1,
                    type: "spring",
                    stiffness: 30,
                  },
                }}

                // variants={pathVariants}
                // initial="hidden"
                // animate="visible"
                // exit="exit"
              />
            </motion.svg>
          </AnimatePresence>
        </div>

        <div className="nav-bar-end mr-6">
          <div className="navbar-item" href="#" id="Navlinks">
            <Link to="/about">
              <motion.h1
                // variants={{ CompVariants }}
                initial={{ y: -30, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 6,
                    duration: 1,
                    type: "spring",
                    stiffness: 30,
                  },
                }}
                whileHover={{
                  scale: 1.2,

                  color: "#64ffda",
                }}
                transition={{ type: "spring", stiffness: 500 }}
                className="is-size-5 has-text-weight-bold "
                id="projectLink">
                About
              </motion.h1>
            </Link>

            <Link to="/project">
              <motion.h1
                // onClick={gotoproj}
                initial={{ y: -30, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 6,
                    duration: 1,
                    type: "spring",
                    stiffness: 30,
                  },
                }}
                whileHover={{
                  scale: 1.2,
                  color: "#64ffda",
                }}
                transition={{ type: "spring", stiffness: 500 }}
                className="is-size-5 ml-6 has-text-weight-bold"
                id="projectLink">
                Projects
              </motion.h1>
            </Link>

            <motion.button
              onClick={DLCV}
              initial={{ y: -30, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 6,
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
              {/* <a href="https://firebasestorage.googleapis.com/v0/b/main-ecom1.appspot.com/o/Darwin%20Apolinario%20CV%20(1).docx?alt=media&token=5a773af7-d2f3-4f1f-95f9-bb09558c5457">
                Resume
              </a> */}
              Resume
            </motion.button>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
