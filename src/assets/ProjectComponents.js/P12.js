import React from "react";
import Proj1_1 from "../p12.png";
import { motion } from "framer-motion";

function P12() {
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
          Pivotal Homes Website/Clone
        </p>
        <p id="projDesc" className="subtitle is-size-5">
          Pivotal Homes Clone with optimize performance using React.
        </p>
        <p id="toolsused" className="is-size-6">
          React.js SASS HTML5
        </p>
      </div>
      <div className="links has-text-right mb-4 ">
        <a href="https://github.com/darwin808/clone3">
          <i className="fab fa-github  fa-lg" id="profile-links"></i>
        </a>

        <a id="iconlinks" href="https://pivothomes.darwin808.vercel.app/">
          <i
            className="fas fa-external-link-alt fa-lg mr-4 ml-4"
            id="profile-links"></i>
        </a>
      </div>
    </motion.div>
  );
}

export default P12;
