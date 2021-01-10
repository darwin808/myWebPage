import React from "react";
import Proj1_1 from "../p7.png";
import { motion } from "framer-motion";

function P7() {
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
          Google Keep Clone
        </p>
        <p id="projDesc" className="subtitle is-size-5">
          Google Keep Clone using MERN stack.
        </p>
        <p id="toolsused" className="is-size-6">
          React.js Express.js Node.js MongoDb Tailwind
        </p>
      </div>
      <div className="links has-text-right mb-4 ">
        <a href="https://github.com/darwin808/Gnote-react">
          <i className="fab fa-github  fa-lg" id="profile-links"></i>
        </a>

        <a id="iconlinks" href="https://gnote-mern-1.herokuapp.com/">
          <i
            className="fas fa-external-link-alt fa-lg mr-4 ml-4"
            id="profile-links"></i>
        </a>
      </div>
    </motion.div>
  );
}

export default P7;
