import React from "react";
import Proj1_1 from "../p9.png";
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
          DUDA company clone
        </p>
        <p id="projDesc" className="subtitle is-size-5">
          DUDA Company website clone using react.js and SASS.
        </p>
        <p id="toolsused" className="is-size-6">
          React.js SASS HTML5
        </p>
      </div>
      <div className="links has-text-right mb-4 ">
        <a href="https://github.com/darwin808/duda-clone-react">
          <i className="fab fa-github  fa-lg" id="profile-links"></i>
        </a>

        <a
          id="iconlinks"
          href="https://600d675fbc194e0a18ad8476--duda-clone.netlify.app/">
          <i
            className="fas fa-external-link-alt fa-lg mr-4 ml-4"
            id="profile-links"></i>
        </a>
      </div>
    </motion.div>
  );
}

export default P8;
