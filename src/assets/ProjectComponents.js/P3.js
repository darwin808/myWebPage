import React from "react";
import Proj1_1 from "../p3.png";
import { motion } from "framer-motion";

function P3() {
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
          A website that sell fruits using Vue.js.
        </p>
        <p id="toolsused" className="is-size-6">
          Vue.js Vuetify
        </p>
      </div>
      <div className="links has-text-right mb-4 ">
        <a href="https://github.com/darwin808/ecommercev10">
          <i className="fab fa-github  fa-lg" id="profile-links"></i>
        </a>

        <a id="iconlinks" href="https://ecommerce-v10.herokuapp.com/">
          <i
            className="fas fa-external-link-alt fa-lg mr-4 ml-4"
            id="profile-links"></i>
        </a>
      </div>
    </motion.div>
  );
}

export default P3;
