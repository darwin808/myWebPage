import React from "react";
import Proj1_1 from "../p8.png";
import { motion } from "framer-motion";

function P8() {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="card">
      <div className="card-image">
        <img src={Proj1_1} alt="p1" />
      </div>
      <div className="card-content">
        <p id="projTitle" className="title is-size-2">
          Pizza landing page
        </p>
        <p id="projDesc" className="subtitle is-size-5">
          A landing page using react.js
        </p>
        <p id="toolsused" className="is-size-6">
          React.js CSS3
        </p>
      </div>
      <div className="links has-text-right mb-4 ">
        <a href="https://github.com/darwin808/pizzaweb">
          <i className="fab fa-github  fa-lg" id="profile-links"></i>
        </a>

        <a
          id="iconlinks"
          href="https://6007f86d3434cfae5baaca7d--stoic-brahmagupta-d98189.netlify.app/">
          <i
            className="fas fa-external-link-alt fa-lg mr-4 ml-4"
            id="profile-links"></i>
        </a>
      </div>
    </motion.div>
  );
}

export default P8;
