import React from "react";
import Proj1_1 from "../p2.png";
import { motion } from "framer-motion";

function P2() {
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
          Personal Website
        </p>
        <p id="projDesc" className="subtitle is-size-5 mb-4">
          My first landing page using Vue.js
        </p>
        <p id="toolsused" className="is-size-6 mb-5">
          Vue.js
        </p>
      </div>
      <div className="links has-text-right mb-4 mt-6">
        <a href="https://github.com/darwin808/mypage1">
          <i className="fab fa-github  fa-lg" id="profile-links"></i>
        </a>

        <a id="iconlinks" href="https://darwinapolinario.herokuapp.com/">
          <i
            className="fas fa-external-link-alt fa-lg mr-4 ml-4"
            id="profile-links"></i>
        </a>
      </div>
    </motion.div>
  );
}

export default P2;
