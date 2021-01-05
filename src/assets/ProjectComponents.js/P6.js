import React from "react";
import Proj1_1 from "../p6.png";
import { motion } from "framer-motion";

function P6() {
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
          Ecommerce Website
        </p>
        <p id="projDesc" className="subtitle is-size-5">
          Ecommerce website that sell phones.
        </p>
        <p id="toolsused" className="is-size-6">
          React.js Firebase Bulma
        </p>
      </div>
      <div className="links has-text-right mb-4 ">
        <a href="">
          <i className="fab fa-github  fa-lg" id="profile-links"></i>
        </a>

        <a
          id="iconlinks"
          href="https://5ff31102972712108bfd601c--iphonetraders.netlify.app/">
          <i
            className="fas fa-external-link-alt fa-lg mr-4 ml-4"
            id="profile-links"></i>
        </a>
      </div>
    </motion.div>
  );
}

export default P6;
